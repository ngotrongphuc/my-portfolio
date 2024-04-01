import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('/hero-bg.jpg')",
        'not-found': "url('/not-found-bg.jpg')"
      },
      boxShadow: {
        card: '0px 0px 20px -5px #ffffff',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
