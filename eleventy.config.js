const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: "./public/static/**/*.css",
	});

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	return {
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "content",
			includes: "../_includes",
			data: "../_data",
			output: "_site",
		},

		pathPrefix: "/",
	};
};