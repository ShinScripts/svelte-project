/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				xbox: '#47FF47',
				'nav-primary': '#141414',
				primary: '#292929',
			},
		},
	},
	plugins: [],
};
