/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
        display: ['press-start-2p', 'ui-monospace', 'monospace'],
        serif: ['Literata Variable', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        'zag-dark': 'var(--color-zag-dark)',
        'zag-light': 'var(--color-zag-light)',
        'zag-dark-muted': 'var(--color-zag-dark-muted)',
        'zag-light-muted': 'var(--color-zag-light-muted)',
        'zag-accent-light': 'var(--color-zag-accent-light)',
        'zag-accent-light-muted': 'var(--color-zag-accent-light-muted)',
        'zag-accent-dark': 'var(--color-zag-accent-dark)',
        'zag-accent-dark-muted': 'var(--color-zag-accent-dark-muted)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
} 