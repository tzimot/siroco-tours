/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(35, 30%, 97%)',
        foreground: 'hsl(25, 20%, 12%)',
        card: 'hsl(35, 25%, 99%)',
        'card-foreground': 'hsl(25, 20%, 12%)',
        primary: 'hsl(25, 75%, 47%)',
        'primary-foreground': 'hsl(0, 0%, 100%)',
        secondary: 'hsl(210, 35%, 25%)',
        'secondary-foreground': 'hsl(0, 0%, 98%)',
        muted: 'hsl(35, 15%, 93%)',
        'muted-foreground': 'hsl(25, 10%, 45%)',
        accent: 'hsl(38, 70%, 55%)',
        'accent-foreground': 'hsl(25, 20%, 12%)',
        destructive: 'hsl(0, 84.2%, 60.2%)',
        border: 'hsl(30, 15%, 88%)',
        input: 'hsl(30, 15%, 85%)',
        ring: 'hsl(25, 75%, 47%)',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.625rem',
      },
    },
  },
  plugins: [],
}
