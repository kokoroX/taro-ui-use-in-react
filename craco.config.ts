/* eslint-disable import/first */
require("dotenv-cra").config();
// dotenvConfig();
import CracoAliasPlugin from 'react-app-alias';
import path from 'path';
import fs from 'fs';
import cracoBabelLoader from 'craco-babel-loader';
import CracoEnvPlugin from 'craco-plugin-env';
import webpack from 'webpack';


// manage relative paths to packages
const appDirectory = fs.realpathSync(process.cwd());
const resolvePackage = relativePath => path.resolve(appDirectory, relativePath);
// console.log(`resolvePackage('node_modules/taro-ui'): `, resolvePackage('node_modules/taro-ui'));
console.log('process.env: ', process.env);

const cracoConfig = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: ".",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json"
      }
    },
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [
          resolvePackage('node_modules/taro-ui'),
        ],
      },
    },
    {
      plugin: CracoEnvPlugin,
      options: {}
    }
  ],
  babel: {
    presets: [
      "@babel/preset-react"
    ]
  },
  webpack: {
    resolve: {
      mainFields: [
        'main:h5',
        'browser',
        'module',
        'jsnext:main',
        'main',
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        ENABLE_INNER_HTML: true,
        ENABLE_ADJACENT_HTML: true,
        ENABLE_TEMPLATE_CONTENT: true,
        ENABLE_CLONE_NODE: true,
        ENABLE_SIZE_APIS: false,
      }),
    ],
  }
}

export default cracoConfig;