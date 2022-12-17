const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

// General config for all build modes
module.exports = (env, argv) => {
  var config = {
    entry: './src/assets/JavaScript/index.js',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
        },
      ]
    },
  };

  // Development build mode
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.output = {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
    config.plugins = [
      new CopyPlugin({
        patterns: [
          { from: "src/index.html", to: "." },
        ],
      }),
    ]
  }

  // Production build mode
  if (argv.mode === 'production') {
    config.output = {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public')
    }
    config.plugins = [
      new CopyPlugin({
        patterns: [
          { from: "src/index.html", to: "." },
        ],
      }),
    ]
  }

  return config;
};