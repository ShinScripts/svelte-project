import preprocess from 'svelte-preprocess';
import path from 'path';

const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
