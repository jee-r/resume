import { chromium } from "playwright";

async function generatePDF(url: string, outputPath: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
  
    // Add CSS rules to hide button
    await page.addStyleTag({
      content: '#pdf-btn { display: none !important; }',
    });
    
    // Use the `page.$` method to locate the div by its ID
    const resume = await page.$("#resume");
    if (resume) {
      // Get the bounding box of the div
      const boundingBox = await resume.boundingBox();
      if (boundingBox) {
        // Generate the PDF with the specified output file
        await page.pdf({
          path: outputPath,
          format: 'A4',
          printBackground: true,
        });
      }
    }
  } finally {
    await browser.close();
  }
}

await generatePDF("http://localhost:4321/fr", "public/resume_fr.pdf");
await generatePDF("http://localhost:4321/en", "public/resume_en.pdf");