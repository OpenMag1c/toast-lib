const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [
      ... (config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      })
    ];

    return config;
  }
}