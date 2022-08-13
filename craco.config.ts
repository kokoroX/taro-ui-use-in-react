/* eslint-disable import/first */
require("dotenv-cra").config();
// dotenvConfig();
import CracoAlias from "craco-alias";
import path from 'path';
import fs from 'fs';
import cracoBabelLoader from 'craco-babel-loader';
import CracoEnvPlugin from 'craco-plugin-env';

// manage relative paths to packages
const appDirectory = fs.realpathSync(process.cwd());
const resolvePackage = relativePath => path.resolve(appDirectory, relativePath);
// console.log(`resolvePackage('node_modules/taro-ui'): `, resolvePackage('node_modules/taro-ui'));
console.log('process.env: ', process.env);

const cracoConfig = {
  plugins: [
    {
      plugin: CracoAlias,
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
      options: {
        variables: {
          FIREBASE_API_KEY: '222'
        }
      }
    }
  ],
  babel: {
    presets: [
      "@babel/preset-react"
    ]
  }
}

export default cracoConfig;