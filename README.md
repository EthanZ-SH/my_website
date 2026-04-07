# Personal Portfolio Website

Single-page React portfolio built with Vite, Tailwind CSS, shadcn-style UI components, and Framer Motion.

## How to access the website locally

1. Open a terminal in this project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open your browser at:

```text
http://localhost:5173
```

## Useful scripts

```bash
npm run dev      # Start local development server
npm run lint     # Run ESLint checks
npm run build    # Create production build in /dist
npm run preview  # Preview production build locally
```

## Access on other devices (same network)

Run:

```bash
npm run dev -- --host
```

Then open the Network URL shown in terminal on your phone/laptop connected to the same Wi-Fi.

## Where to edit your content

- Section text, projects, videos, and timeline: `src/data/content.js`
- Main page composition: `src/App.jsx`
- Section components: `src/components/sections/`

## Deploying online

You can deploy this Vite app quickly to platforms like Vercel or Netlify by connecting your GitHub repo.

- Build command: `npm run build`
- Output directory: `dist`
