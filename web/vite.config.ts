/** @format */

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "",
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler", { target: "19" }]],
			},
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist("chrome <= 103")),
		},
	},
	build: {
		outDir: "../nui",
		emptyOutDir: true,
		rollupOptions: {
			treeshake: true,
		},
		target: "chrome103",
		cssTarget: "chrome103",
		cssMinify: "lightningcss",
	},
});
