# Resume 

This is my resume source code availaible at https://resume.artz.dev

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│   |   └── index.astro
|   └── contents
└── package.json
```

## Content

```text
src/content
├── _config.md      # Main Config
├── config.ts       # Datatypes
├── educations
│   ├── en
│   │   ├── 1_degree2.md
│   │   ├── 2_degree1.md
│   └── fr
│       ├── 1_degree1.md
│       ├── 2_degree2.md
├── projects
│   ├── en
│   │   ├── 1_my_awesome_project.md
│   │   ├── 2_my_super_project.md
│   └── fr
│       ├── 1_my_awesome_project.md
│       ├── 2_my_super_project.md
├── _skills_en.md
├── _skills_fr.md
└── works
    ├── en
    │   ├── 1_work_exp1.md
    │   └── 2_work_exp2.md
    └── fr
        ├── 1_work_exp1.md
        └── 2_work_exp2.md
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run generate-pdf:ci` | Build pdfs file                                  |

