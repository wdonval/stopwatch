const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#0033ff",
			},
		},
		screens: {
			xxs: "360px",
			xs: "480px",
			...defaultTheme.screens,
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
