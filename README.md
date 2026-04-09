# Siroco Tours - Astro Website

A modern, fast, static website for Siroco Tours built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher → [Download here](https://nodejs.org)
- **VS Code** (recommended) → [Download here](https://code.visualstudio.com)
- **Astro VS Code Extension** (recommended) → Search "Astro" in VS Code extensions

### Step 1: Install Dependencies
```bash
cd siroco-tours-astro
npm install
```

### Step 2: Run Locally
```bash
npm run dev
```
Open your browser at **http://localhost:4321** 🎉

### Step 3: Build for Production
```bash
npm run build
```
The built files will be in the `dist/` folder.

### Step 4: Preview Production Build
```bash
npm run preview
```

## 📂 Project Structure

```
siroco-tours-astro/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Base HTML template (head, nav, footer)
│   ├── components/
│   │   ├── Navigation.astro      ← Responsive navbar with scroll effects
│   │   ├── Footer.astro          ← Site footer
│   │   ├── TourCard.astro        ← Reusable tour card component
│   │   └── CountUp.astro         ← Animated number counter
│   ├── data/
│   │   └── tours.ts              ← All 12 tours with complete data
│   ├── pages/
│   │   ├── index.astro           ← Homepage
│   │   ├── tours/
│   │   │   ├── index.astro       ← Tours listing page
│   │   │   └── [slug].astro      ← Dynamic tour detail pages (generates 12 pages)
│   │   ├── about.astro           ← About Us page
│   │   ├── contact.astro         ← Contact form page
│   │   └── blog.astro            ← Blog placeholder (Coming Soon)
│   └── styles/
│       └── global.css            ← Global styles + Tailwind + color palette
├── public/
│   ├── favicon.svg               ← Site favicon
│   └── og-image.png              ← Social media sharing image
├── astro.config.mjs              ← Astro configuration
├── tailwind.config.mjs           ← Tailwind CSS configuration
├── tsconfig.json                 ← TypeScript configuration
└── package.json                  ← Project dependencies
```

## 📋 Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Hero, featured tours, testimonials, CTAs |
| Tours | `/tours/` | Grid of all 12 tours |
| Tour Detail | `/tours/[slug]/` | Full itinerary, gallery, included/excluded |
| About | `/about/` | Company story, values, guides |
| Contact | `/contact/` | Form with tour dropdown + company info |
| Blog | `/blog/` | Coming soon placeholder |

## 📬 Contact Form Setup

The contact form uses **Formspree** (free tier: 50 submissions/month).

### To set up:
1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form
3. Copy your form ID (e.g., `xyzabcde`)
4. In `src/pages/contact.astro`, replace `YOUR_FORMSPREE_ID` with your ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
5. In Formspree settings, add **timoteogresbusiness@gmail.com** as the notification email

## 🎨 Customization

### Colors
Edit `tailwind.config.mjs` to change the color palette. Current theme:
- **Primary:** Warm terracotta orange `hsl(25, 75%, 47%)`
- **Secondary:** Deep navy blue `hsl(210, 35%, 25%)`
- **Background:** Warm off-white `hsl(35, 30%, 97%)`

### Tours
Edit `src/data/tours.ts` to add, remove, or modify tours.

### Images
Replace image URLs in `TOUR_IMAGES` object in `src/data/tours.ts`.

## 🌐 Deployment

### Netlify (Recommended)
```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Via GitHub (Best for continuous deployment)
1. Push code to a GitHub repository
2. Connect the repo to Netlify or Vercel
3. Every `git push` triggers automatic deployment!

## 📝 Adding Blog Posts (Future)

When ready to add blog posts, you can:
1. Create markdown files in `src/content/blog/`
2. Use Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/) for type-safe blog management
3. Update `src/pages/blog.astro` to list and render posts

## 🔗 Useful Links

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Formspree Documentation](https://formspree.io/docs)
- [Astro Themes](https://astro.build/themes)
