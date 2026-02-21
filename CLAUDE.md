# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **React 19** with **TypeScript** (strict mode), bundled by **Vite 7**
- ESLint 9 (flat config) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- No test framework installed yet — add one (e.g. Vitest) before writing tests

## Commands

```bash
npm run dev       # start dev server (HMR on localhost:5173)
npm run build     # tsc type-check + Vite production build → dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint over all .ts/.tsx files
```

Type-check without building:
```bash
npx tsc --noEmit
```

## Project structure

```
src/
  main.tsx      # ReactDOM.createRoot entry point
  App.tsx       # root component
  App.css       # component-scoped styles
  index.css     # global styles
  assets/       # static assets imported by components
public/         # files copied verbatim to dist/
index.html      # Vite HTML entry (references /src/main.tsx)
```

All source lives under `src/`. New features go in subdirectories there (e.g. `src/components/`, `src/hooks/`, `src/pages/`).

## TypeScript notes

`tsconfig.app.json` (covers `src/`) enforces strict mode plus `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. Use `import type` for type-only imports (`verbatimModuleSyntax` is on). The build pipeline is `tsc -b` (project references) followed by `vite build`; `tsc` does not emit files (`noEmit: true`), Vite handles transpilation.

## ESLint notes

Config is in `eslint.config.js` (ESLint 9 flat config). It applies only to `**/*.{ts,tsx}` and ignores `dist/`. Run lint before committing; the React Refresh plugin will warn if components are not exported correctly for HMR.

## Git commits

Always use the following co-author line in commit messages:

```
Co-Authored-By: Sanjeev Kumar <mishra.sanjeev@gmail.com>
```
