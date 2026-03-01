# MyPortfolio — React (Vite) Conversion

This repository is a React conversion (Vite) of the original static portfolio site for Aarti Bhanushali.

Contents
- `index.html` — Vite entry that mounts the React app
- `package.json` — scripts and dependencies
- `src/` — React source
  - `main.jsx` — app entry
  - `App.jsx` — top-level component with global behavior
  - `components/` — per-section components (Header, Hero, About, Skills, Projects, Contact, Footer)
  - `styles/` — `style.css` and `responsive.css` (imported in `main.jsx`)
- `Assets/` — static images and files (served at `/Assets/`)

Quick start

1. Install dependencies

```bash
npm install
```

2. Start dev server (Vite)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run preview
```

Notes & guidance
- Static assets: The project expects static files under `/Assets/` (for example `/Assets/image.jpeg`). If you prefer Vite's `public/` folder, move `Assets/` into `public/Assets/` and paths will remain `/Assets/...`.
- Styles: Original CSS was kept and imported from `src/styles/`. You can refactor to CSS modules or other approaches later.
- Behavior: Original `script.js` interactions (custom cursor, theme toggle, card hover tracking, photo modal) were ported into `App.jsx` using React hooks.
- Contact form: The form currently prevents default submit and uses a placeholder handler. Replace `Contact.jsx` submit logic with a real API or email integration if needed.

Development notes
- The nav toggle and theme button are implemented in `Header.jsx` and use local state. Theme toggling applies `dark-theme` class on `document.body`.
- Card mouse position effects set CSS variables `--mouse-x` and `--mouse-y` on the hovered card; this logic lives in `App.jsx`.

Suggested next tasks
- Move `Assets/` to `public/Assets/` (optional, recommended for Vite static serving).
- Wire the contact form to an email service or server endpoint.
- Add linting, formatting, or tests as desired.

Contact
- Edit files under `src/components/` and run the dev server to preview changes.

---

**GitHub README (this file)**

This README is tailored for the GitHub repository to help contributors and visitors quickly understand, run, and deploy the project.

Repository structure (key files)
- `index.html` — Vite entry that mounts the React app
- `package.json` — scripts and dependencies
- `src/` — React source (see `src/components/` for sections)
- `src/styles/` — project CSS
- `Assets/` — static images used by the site (served at `/Assets/`)

Folder structure

```
MyPortfolio/
├─ index.html
├─ package.json
├─ Assets/
│  └─ image.jpeg
├─ src/
│  ├─ main.jsx
  │  
│  ├─ App.jsx
  │  
│  ├─ components/
│  │  ├─ Header.jsx
  │  │  
│  │  ├─ Hero.jsx
  │  │  
│  │  ├─ About.jsx
  │  │  
│  │  ├─ Skills.jsx
  │  │  
  │  │  ├─ Projects.jsx
  │  │  
  │  │  ├─ Contact.jsx
  │  │  
  │  │  └─ Footer.jsx
  │  
  └─ styles/
     ├─ style.css
     └─ responsive.css
```

How to run locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd MyPortfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open the address shown by Vite in your browser (usually `http://localhost:5173`).

Build & deploy

- Build for production:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

Deploy to GitHub Pages (simple approach)

1. Build the app: `npm run build`
2. Push the build output (`dist/`) to the branch/folder used by GitHub Pages (for example `gh-pages` branch or the `docs/` folder). Many projects use the `gh-pages` package or a GitHub Action to automate this step.

Notes for maintainers
- If you prefer Vite's `public/` folder, move `Assets/` into `public/Assets/` (paths remain `/Assets/...`).
- The contact form in `src/components/Contact.jsx` currently uses a placeholder submit handler — wire it to an API or service as needed.
- The original `script.js` behaviour (cursor, theme toggle, card hover) has been ported into `src/App.jsx` using React hooks.

Contributing
- Fork the repo, create a branch, make changes, and open a pull request. Keep the styles and component structure consistent.

License
- Add a license file if you want to publish this repository publicly. (No license file is included by default.)

Contact
- For questions or help, edit the files under `src/components/` or open an issue.
