import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "index.ts"),
			name: "react_admin_layout_chuazz",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
			plugins: [
				babel({
					exclude: "node_modules/**",
				}),
				typescript(),
				postcss({
					plugins: [autoprefixer()],
					sourceMap: true,
					minimize: true,
				}),
				terser(),
			],
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	plugins: [react(), dts()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
		},
	},
});
