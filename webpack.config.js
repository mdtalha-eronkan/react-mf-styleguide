const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "eronkan",
    projectName: "sguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /.css$/i,
          use: [
            require.resolve('style-loader', {
              paths: [require.resolve('webpack-config-single-spa')],
            }),
            require.resolve('css-loader', {
              paths: [require.resolve('webpack-config-single-spa')],
            }),
            'postcss-loader',
          ],
        },
      ],
    },
  });
};