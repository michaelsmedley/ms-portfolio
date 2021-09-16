/** sass */
const sassPluginOptions = {};
const pluginSass = require("eleventy-plugin-sass");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 500, 1000, null],
    formats: ["avif", "png", "webp"],
    outputDir: "./_site/img/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);

  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "woff2",
    "njk",
    "png",
    "xml",
    "ico",
    "svg",
    "webmanifest",
  ]);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
};
