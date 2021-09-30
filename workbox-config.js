module.exports = {
	globDirectory: 'assets/',
	globPatterns: [
		'**/*.{png,xml,ico,svg,webmanifest,woff2,scss}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'assets/sw.js'
};