/** sass */
const sassPluginOptions = {};
const pluginSass = require("eleventy-plugin-sass");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 640, 1000, null],
    formats: ["avif", "webp", "png"],
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
    "js",
    "map",
  ]);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  let markdown_o = {
    html: true,
    //: add any settings you need
  };

  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")(markdown_o).use(require("markdown-it-attrs"))
  );

  // just get the current year with {% year %}
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // pass in a date (niceDate new Date()) and get a nice format return (Sunday, November 28, 2021)
  eleventyConfig.addShortcode("niceDate", (date) =>
    new Date(date).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
};
