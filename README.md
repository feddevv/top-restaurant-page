# Top Restaurant Page

Single-page restaurant website built for practicing two core topics:

- Webpack bundling workflow
- JavaScript ES Modules (ESM)

## Purpose

This project focuses on organizing UI code into modules and letting Webpack bundle everything into a browser-ready app.

Key learning goals:

- Split UI into feature modules (`home`, `menu`, `about`)
- Use ESM syntax (`import`/`export`) across the codebase
- Import CSS directly from JavaScript modules
- Use `HtmlWebpackPlugin` to generate the final HTML
- Run a local dev server with hot reloading-like workflow

## Tech Stack

- JavaScript (ESM)
- Webpack 5
- webpack-dev-server
- html-webpack-plugin
- css-loader
- style-loader

## Project Structure

```text
src/
	index.js                    # App entry point, sets up nav handlers
	template.html               # HTML template used by HtmlWebpackPlugin
	styles.css                  # Global styles
	components/
		home/
			homePage.js             # Home page render function
			styles.css              # Home page scoped styles
		menu/
			menuPage.js             # Menu page render function
			styles.css              # Menu page scoped styles
		about/
			aboutPage.js            # About page render function
			styles.css              # About page scoped styles
	data/
		menu.js                   # Menu data
		team.js                   # Team data
webpack.config.js             # Webpack config written as ESM
```

## How ESM Is Used

Examples from the codebase:

- Component imports in `src/index.js`
- Default exports from each page module (`homePage.js`, `menuPage.js`, `aboutPage.js`)
- CSS imports inside JS modules (for example `import './styles.css'`)
- ESM Webpack config (`import ... from ...` and `export default`)

`package.json` includes:

```json
"type": "module"
```

which enables ESM behavior in Node for files like `webpack.config.js`.

## Webpack Configuration Notes

`webpack.config.js` currently does the following:

- Uses `src/index.js` as the entry point
- Outputs bundled assets to `dist/`
- Handles `.css` files with `style-loader` + `css-loader`
- Generates HTML from `src/template.html` via `HtmlWebpackPlugin`
- Enables source maps for development (`eval-source-map`)
- Watches template changes in dev server

## Install

```bash
npm install
```

## Run In Development

Use the dev server:

```bash
npx webpack serve
```

Then open the local URL printed in the terminal (usually `http://localhost:8080`).

## Create Production Build

```bash
npx webpack --mode production
```

Build output is generated in `dist/`.

## What This Project Demonstrates

- Modular page rendering with ESM
- Component-level CSS imported through JavaScript
- Webpack bundling of JS + CSS into a deployable output
- Basic SPA-like navigation by replacing `#content` dynamically