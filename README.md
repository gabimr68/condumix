CONDUMIX — Institutional Website

This repository contains the institutional website developed for CONDUMIX, a Brazilian company with over 30 years of experience in the electrical sector, specializing in the distribution of electrical wires and cables.

The project was built using Astro, focusing on high performance, SEO best practices, and a clean, scalable architecture suitable for a corporate website.

--------------------------------------------------

ABOUT CONDUMIX

Condumix has been operating for more than three decades, providing electrical cables and solutions that strictly follow technical specifications, always aiming for maximum customer satisfaction.

This website was created to:
- Strengthen the company’s digital presence
- Present its history, values, and expertise
- Support institutional and commercial communication
- Deliver a fast, reliable, and modern user experience

--------------------------------------------------

TECH STACK

- Astro (Static Site Generator)
- JavaScript / TypeScript
- Markdown & MDX
- SEO-first architecture

--------------------------------------------------

FEATURES

- Optimized performance (Lighthouse 100/100)
- SEO-friendly structure with canonical URLs and OpenGraph metadata
- Clean and maintainable project structure
- Markdown & MDX content support
- Automatic sitemap generation
- RSS feed support
- Minimal and customizable styling
- Ideal for corporate and institutional websites

--------------------------------------------------

PROJECT STRUCTURE

public/
  Static assets (images, icons, etc.)

src/
  components/
    Reusable UI components
  content/
    Markdown and MDX content collections
  layouts/
    Page layouts
  pages/
    Website pages and routes

astro.config.mjs
package.json
tsconfig.json
README.md

Pages are automatically generated from .astro or .md files located in src/pages/.
Static assets are served from the public/ directory.

--------------------------------------------------

AVAILABLE COMMANDS

All commands should be run from the project root directory.

npm install
  Install project dependencies

npm run dev
  Start local development server at http://localhost:4321

npm run build
  Build the production-ready website into the dist/ directory

npm run preview
  Preview the production build locally

npm run astro ...
  Run Astro CLI commands

--------------------------------------------------

DEPLOYMENT

This project can be deployed on any static hosting platform, including:
- Vercel
- Netlify
- Cloudflare Pages

--------------------------------------------------

CREDITS

This project is based on the Astro Starter Kit: Blog,
inspired by the Bear Blog theme:
https://github.com/HermanMartinus/bearblog/

--------------------------------------------------

AUTHOR

Website developed as part of a professional portfolio project.
