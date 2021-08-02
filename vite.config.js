import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	server: {
		fs: {
			allow: [".."],
		},
		host: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
	build: {
		rollupOptions: {
			external: ["jotai"],
		},
	},
});
