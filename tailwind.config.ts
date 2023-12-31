import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
	],
	presets: [
		require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
	],
	theme: {
		extend: {
			fontFamily: {
				major: ['"Major Mono Display"', "monospace"],
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
