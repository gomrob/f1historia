import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        f1: {
          red: '#E8001D',
          bg: '#FAFAFA',
          surface: '#F5F5F7',
          card: '#FFFFFF',
          border: '#E8E8EE',
          muted: '#9CA3AF',
          text: '#0A0A0F',
          'text-muted': '#6B6B80',
        },
        team: {
          redbull:    '#3671C6',
          ferrari:    '#E8002D',
          mclaren:    '#FF8000',
          mercedes:   '#27F4D2',
          alpine:     '#FF87BC',
          astonmartin:'#358C75',
          williams:   '#64C4FF',
          haas:       '#B6BABD',
          sauber:     '#52E252',
          racingbulls:'#6692FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(10,10,15,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,15,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}

export default config
