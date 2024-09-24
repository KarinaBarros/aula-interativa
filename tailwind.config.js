/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'bangers': ['"Bangers"', 'cursive'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
