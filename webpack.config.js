/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const TsConfigWebpackPlugin = require('ts-config-webpack-plugin');

module.exports = (env, argv) => {
  process.env.NODE_ENV = argv.mode || 'development';
  // eslint-disable-next-line global-require
  const getEnvironment = require('./config/env');
  const isProd = argv.mode === 'production';
  const config = {
    mode: argv.mode,
    target: 'node',
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
      path: path.resolve(__dirname, './build'),
      publicPath: '/',
      filename: 'server.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '~src': path.resolve(__dirname, './src'),
        '~lib': path.resolve(__dirname, './src/lib'),
      },
    },
    externals: [nodeExternals()],
    module: {
      strictExportPresence: true,
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          loader: require.resolve('eslint-loader'),
        },
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
            },
          },
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(getEnvironment()), new TsConfigWebpackPlugin()],
    stats: 'errors-warnings',
    // node: {
    //   __console: false,
    //   __dirname: false,
    //   __filename: false,
    // },
  };
  if (!isProd) {
    config.plugins.push(new NodemonPlugin());
  }
  return config;
};
