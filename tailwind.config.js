/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#3F4255',
        'secondarybg': '#F2F4FA',
    },
  },
  plugins: [],
}
}
