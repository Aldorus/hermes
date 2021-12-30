/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components/atom": path.resolve(__dirname, "src/components/atom"),
      "@components/organism": path.resolve(
        __dirname,
        "src/components/organism"
      ),
      "@components/pages": path.resolve(__dirname, "src/components/pages"),
      "@providers/mocks": path.resolve(__dirname, "src/providers/mocks"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@react/bem": path.resolve(__dirname, "src/commons/bem/bem.tsx"),
    },
  },
};
