export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: { DEFAULT: '#03040f', card: '#080c1a', border: '#1a1f3a' },
        purple: { DEFAULT: '#7c3aed', light: '#a78bfa', dark: '#5b21b6' },
        cyan: { DEFAULT: '#06b6d4', light: '#67e8f9' },
        neon: { green: '#10b981', pink: '#ec4899' }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      }
    }
  },
  plugins: []
}
