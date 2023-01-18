import adapter from '@sveltejs/adapter-netlify';
const neylify = require('@sveltejs/adapter-netlify')
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: neylify()
	}
};

export default config;
