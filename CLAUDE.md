# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog site built with React 19 and Vite, deployed to GitHub Pages with a custom domain (k-suzumi.com). The project uses SWC for fast refresh and is configured for static site deployment.

## Development Commands

- **Start development server**: `npm run dev`
  - Runs Vite dev server with HMR
  - File watching uses polling (configured in vite.config.js:10)

- **Build for production**: `npm run build`
  - Outputs to `dist/` directory
  - Automatically run before deployment via `predeploy` script

- **Lint code**: `npm run lint`
  - Uses ESLint with React Hooks and React Refresh plugins
  - Custom rule: allows unused vars with uppercase names (varsIgnorePattern: '^[A-Z_]')

- **Preview production build**: `npm run preview`
  - Serves the built `dist/` directory locally

- **Deploy to GitHub Pages**: `npm run deploy`
  - Builds the project and deploys to gh-pages branch
  - Site is accessible at custom domain configured in CNAME

## Architecture

### Build Configuration
- **Vite** (vite.config.js:5): Base path set to '/' for custom domain deployment
- **React plugin**: Uses @vitejs/plugin-react-swc for faster builds
- **File watching**: Polling enabled for better compatibility across systems

### Application Structure
- **Entry point**: src/main.jsx renders App component into #root
- **Main component**: src/App.jsx is the top-level component
- **Styling**: Component-level CSS (App.css) and global styles (index.css)

### Deployment
- GitHub Pages deployment via gh-pages package
- Custom domain: k-suzumi.com (configured in CNAME file)
- Build output in `dist/` directory (ignored by git)
- Main branch is used for source code; gh-pages branch for deployment
