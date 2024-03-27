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
        'hero-pattern': "url('/hero-bg.jpg')",
      },
      boxShadow: {
        card: '0px 0px 45px -20px #ffffff',
      },
      screens: {
        xs: '450px',
        'lg-mobile': '425px',
        'md-mobile': '375px',
        'sm-mobile': '320px',
      },
    },
  },
  plugins: [],
};
export default config;
