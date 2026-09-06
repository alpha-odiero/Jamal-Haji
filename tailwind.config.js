/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'hsl(var(--color-ink) / <alpha-value>)',
        'ink-soft': 'hsl(var(--color-ink-soft) / <alpha-value>)',
        'ink-faint': 'hsl(var(--color-ink-faint) / <alpha-value>)',
        canvas: 'hsl(var(--color-canvas) / <alpha-value>)',
        'canvas-alt': 'hsl(var(--color-canvas-alt) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        line: 'hsl(var(--color-line) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -12px hsl(var(--color-ink) / 0.12)',
        lift: '0 24px 60px -20px hsl(var(--color-ink) / 0.22)',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      maxWidth: {
        page: '80rem',
      },
    },
  },
  plugins: [],
}
