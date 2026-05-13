# Ross Rabanos — Senior React Native Developer Portfolio

A production-ready static portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The site is designed for GitHub Pages deployment and showcases mobile app case studies, interactive demo flows, and hiring-focused content.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

The site is configured to deploy on GitHub Pages using the `vite.config.ts` base path.

1. In `vite.config.ts`, replace `/portfolio/` with `/<your-repository-name>/`.
2. Add your resume file at `public/resume.pdf`.
3. Push to the `main` branch.
4. GitHub Actions will build and deploy the site automatically.
5. In repository settings, enable GitHub Pages and select the `gh-pages` deployment source if needed.

## Update Personal Info

- Replace the placeholder email in `src/data/portfolio.ts`
- Replace the GitHub and LinkedIn links in `src/data/portfolio.ts`
- Replace the resume file path in `src/components/Resume.tsx` or `public/resume.pdf`

## Project Structure

- `src/components` — Reusable UI sections and demo components
- `src/data` — Editable portfolio content and interactive demo data
- `public` — Static assets including `resume.pdf`
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Notes

This portfolio is built as a static frontend only. There are no backend features or API calls. All demo interactions are powered by local mock data and React state.

