const withImages = require("next-images");

module.exports = withImages({
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
  dynamicAssetPrefix: true,
  images: {
    loader: "akamai",
    path: "",
  },
  webpack(config, options) {
    return config;
  },
});
