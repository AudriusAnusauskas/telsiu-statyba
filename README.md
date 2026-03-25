# Telšių Statyba Website

Official website project for **UAB Telšių Statyba** built with **Next.js** and **TypeScript**.

## About

This is a corporate landing website that includes:

- Hero section
- Services section
- About section
- Projects showcase
- Contact section
- Footer

The app is localized for Lithuanian (`lt`) and includes SEO metadata for the company.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI components
- Vercel Analytics

## Getting Started

### 1) Install dependencies

Using npm:

```bash
npm install
```
(Alternative lockfile for pnpm is included as well.)

### 2) Run development server
```npm run dev```
If you get a network interface error in some environments, run:

```npm run dev -- --hostname 127.0.0.1 --port 3000```

### 3) Open in browser
```http://localhost:3000```
or ```http://127.0.0.1:3000```
## Available Scripts
```npm run dev - start development server
npm run build - create production build
npm run start - start production server
npm run lint - run ESLint
```
### Project Structure
```app/           # Next.js App Router pages and layout
components/    # UI and page sections
hooks/         # Custom React hooks
lib/           # Utility functions
public/        # Static assets (images, icons)
styles/        # Global styles
```
### Deployment
Recommended deployment: Vercel (works out of the box with Next.js).

You can also deploy to any platform that supports Node.js and Next.js production builds.

Repository
GitHub: https://github.com/AudriusAnusauskas/Telsiu-statyba
