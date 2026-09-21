# William Guo — personal website

Responsive research website built with React and deployed to GitHub Pages.

## Content

- Add publications in `src/data/publications.js`. Each entry supports authors, venue, year, abstract, PDF, arXiv, slides, code, and BibTeX.
- Add projects in `src/data/projects.js`.
- Edit page copy in `src/pages/`. Biography content lives on the homepage; research interests and publications share the Research page.

## Local development

- `npm start` starts the development server.
- `npm test` runs the test suite.
- `npm run build` creates a production build.

## GitHub Pages

Run `npm run deploy` to build and publish the site to the `gh-pages` branch. The `homepage` field in `package.json` is configured for `https://willdguo.github.io/`.
