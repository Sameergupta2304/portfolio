/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        panel: 'var(--color-panel)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91, 140, 255, 0.18), 0 18px 60px rgba(0, 0, 0, 0.35)',
      },
      maxWidth: {
        container: '72rem',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at top, rgba(91, 140, 255, 0.18), transparent 30%), linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 25%)',
      },
    },
  },
  plugins: [],
};
