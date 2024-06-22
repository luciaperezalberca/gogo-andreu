/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': "url('/images/fondo-gogo.png')",
				'biography-image': "url('/images/biography-image.png')",
			},
			colors: {
				'primary-gray': '#343434',
				'primary-wine': '#821C16',
			},
		},
	},
	plugins: [],
}
