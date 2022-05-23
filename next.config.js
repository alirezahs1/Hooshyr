/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// images: {
	//     disableStaticImages: true
	// }
	images: {
		loader: 'akamai',
		path: '',
	},
}

module.exports = nextConfig