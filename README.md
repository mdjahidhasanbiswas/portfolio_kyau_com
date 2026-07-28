# Student Portfolio

A simple single-page portfolio for CSE / early undergrad students. Edit one JSON file to update your content. Built with React, GSAP, and Lenis.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Edit your content

Open `src/data/portfolio.json` and change:

- `name`, `role`, `tagline`, `location`, `email`
- `about` — short bio
- `skills` — list of skills
- `projects` — title, year, description, tags, links
- `contact` + `socials`

That’s the main file you’ll maintain. The page updates from this data.

## What’s included

- Single page: Hero → About → Projects → Contact
- Smooth scrolling with **Lenis**
- Entrance + scroll animations with **GSAP** / ScrollTrigger
- Respects `prefers-reduced-motion`

## Scripts

| Command         | What it does              |
| --------------- | ------------------------- |
| `npm run dev`   | Local development server  |
| `npm run build` | Production build          |
| `npm run preview` | Preview the production build |

## Deploy

Build with `npm run build`, then host the `dist` folder on Netlify, Vercel, GitHub Pages, or any static host.

## Tips for students

1. Replace placeholder links with your real GitHub / LinkedIn / project URLs.
2. Keep project descriptions short (1–2 sentences).
3. Add a new project by copying an object inside the `projects` array in the JSON.
4. Don’t chase fancy frameworks yet — ship this, then improve.
