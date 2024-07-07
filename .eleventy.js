const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");

module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: "./public/static/**/*.css",
	});

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	eleventyConfig.addPassthroughCopy("CNAME");
	// eleventyConfig.addBundle("css");
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