/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors:{
				primary: '#5FDCFE',
				secondary: '#DA39CA',
				black: '#1D1B1B',

			}
		},
  },
  plugins: [],
}
