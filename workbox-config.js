module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{png,xml,ico,svg,webmanifest,woff2,css,js,html,avif,webp}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: '_site/sw.js'
};