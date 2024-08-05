/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backdropBlur: {
        xs: '0px',
      },
      colors: {
        'backdrop-blue': '#233dff',
      },
      backgroundColor: {
        'backdrop-blue': '#233dff',
      },
      colors: {
        twitter : '#1DA1F2',
        linkedin: '#0A66C2',
        primary1: '#131424',
        primary: "#ffffff",
        secondary: '#393A47',
        //accent: '#ffffff',
        accent: '#131424',
        accent1: '#233dff',
        accent2: '#233dff',
        //accent: '#233ce1'
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        explosion1: 'url("/bg-explosion-blue.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {

        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        squada: ['var(--font-squada)', 'sans-serif']

      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar'),

    function ({ addUtilities }) {
      addUtilities({
        '.backdrop-blue': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(35, 61, 255, 0.5)', // Adjust the opacity as needed
        },
      });
    },
  ],
};
