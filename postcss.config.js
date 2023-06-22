const postcss = require("postcss");

module.exports = {
  plugins: [
    postcss([require("cssnano"), require("postcss-combine-media-query")]),
    // postcss([require("postcss-combine-media-query")]), css 나노로 만들지 않음
  ],
};
