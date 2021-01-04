const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/style.css");

    // Output directory: _site

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
  });

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
