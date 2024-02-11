import { chromium } from "playwright";
import { PDFDocument } from 'pdf-lib';
import matter from 'gray-matter';
import fs from "fs";

const config_file: string = "src/content/_config.md"

async function generatePDF(url: string, outputPath: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle" });
  
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

async function addPropertiesToPDF(pdfPath: string, language: string, lang: string) {
 
  // Get Data from Mardown Config file
  const config_matter = await matter.read(config_file);
  const {name, firstname, aboutText} = config_matter.data

  // Get the date
  const now = new Date()

  // Read the local PDF file
  const pdfBytes = fs.readFileSync(pdfPath);

  // Load the PDF using pdf-lib
  const pdfDoc = await PDFDocument.load(pdfBytes);

  // Set PDF properties
  pdfDoc.setTitle(`${name} ${firstname} Resume`);
  pdfDoc.setSubject(aboutText[lang])
  pdfDoc.setAuthor(`${name} ${firstname}`);
  pdfDoc.setCreator(`${name} ${firstname}`);
  pdfDoc.setProducer('https://resume.artz.dev');
  pdfDoc.setLanguage(language);
  pdfDoc.setCreationDate(now);
  
  // Serialize the PDF with the author property
  const modifiedPdfBytes = await pdfDoc.save();
  
  // Save the modified PDF to the specified output file
  fs.writeFileSync(pdfPath, modifiedPdfBytes);
}
  
const config_matter = await matter.read(config_file);
const {pdfFilename} = config_matter.data
  
await generatePDF("http://localhost:4321/fr", `public/${pdfFilename["fr"]}.pdf`);
await addPropertiesToPDF(`public/${pdfFilename["fr"]}.pdf`, "Français", "fr")
await generatePDF("http://localhost:4321/en", `public/${pdfFilename["en"]}.pdf`);
await addPropertiesToPDF(`public/${pdfFilename["en"]}.pdf`, "English", "en")