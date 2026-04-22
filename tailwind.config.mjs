/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* Exact colors from sirocotours.com */
        primary: '#08495D',           /* Deep teal - headings, footer bg, main brand */
        'primary-light': '#056C8C',   /* Lighter teal - links, accents */
        accent: '#C4964A',            /* Bronze/gold - icons, decorative elements */
        'accent-light': '#D4A85A',    /* Lighter gold for hover states */
        background: '#F8F9FA',        /* Page background */
        foreground: '#08495D',        /* Body text color */
        'muted-fg': '#6c757d',        /* Muted text */
        dark: '#23282D',              /* Dark section backgrounds */
        'input-border': '#F1F1F1',    /* Form input borders */
        'btn-border': '#999999',      /* Button borders */
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1300px',
      },
      borderRadius: {
        btn: '5px',
      },
      letterSpacing: {
        hero: '0.35em',
      },
    },
  },
  plugins: [],
}
