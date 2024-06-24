/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': "url('/images/teatro-gris.webp')",
				'biography-image': "url('/images/biography-image.png')",
			},
			colors: {
				'primary-gray': '#343434',
				'primary-wine': '#821C16',
				'secondary-gray': '#4C4C4C',
				'secondary-wine': '#56110D',
			},
		},
	},
	plugins: [
		require('daisyui'),
	],
}
