module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#0033ff",
			},
		},
		fontFamily: {
			sans: ["Inter var", "Arial", "sans-serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
