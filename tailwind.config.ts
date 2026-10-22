import type { Config } from 'tailwindcss'

// Los valores reales viven en src/index.css (:root). Aquí solo se exponen como clases,
// y se sustituye la paleta por defecto para que no se puedan usar colores fuera de los tokens.
export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ink: 'var(--color-ink)',
      surface: 'var(--color-surface)',
      signal: 'var(--color-signal)',
      oxblood: 'var(--color-oxblood)',
      paper: 'var(--color-paper)',
      muted: 'var(--color-muted)',
      line: 'var(--color-line)',
    },
    fontFamily: {
      display: ['Anton', 'Impact', 'Arial Narrow', 'sans-serif'],
      sans: ['Manrope', 'system-ui', 'Segoe UI', 'sans-serif'],
      mono: ['JetBrains Mono', 'ui-monospace', 'Consolas', 'monospace'],
    },
    // Escala fluida: [tamaño, interlineado]
    fontSize: {
      label: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      sm: ['0.9375rem', { lineHeight: '1.6' }],
      base: ['clamp(1rem, 0.96rem + 0.2vw, 1.125rem)', { lineHeight: '1.65' }],
      lead: ['clamp(1.125rem, 1.02rem + 0.5vw, 1.375rem)', { lineHeight: '1.55' }],
      cta: ['1.1875rem', { lineHeight: '1.2' }],
      h3: ['clamp(1.25rem, 1.1rem + 0.7vw, 1.75rem)', { lineHeight: '1.25' }],
      h2: ['clamp(2.25rem, 1.4rem + 4vw, 4.75rem)', { lineHeight: '0.95' }],
      h1: ['clamp(2.75rem, 1.3rem + 7vw, 7.5rem)', { lineHeight: '0.92' }],
      hero: ['clamp(3.25rem, 0.9rem + 11.5vw, 9.5rem)', { lineHeight: '0.9' }],
      index: ['clamp(3.5rem, 2rem + 7vw, 8rem)', { lineHeight: '0.85' }],
    },
    // Esquinas rectas en todo
    borderRadius: {
      none: '0',
      DEFAULT: '0',
    },
    extend: {
      borderColor: {
        DEFAULT: 'var(--color-line)',
      },
      minHeight: {
        tap: '2.75rem',
      },
      minWidth: {
        tap: '2.75rem',
      },
      keyframes: {
        'menu-in': {
          from: { opacity: '0', transform: 'translateY(0.75rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'menu-in': 'menu-in 180ms ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config
