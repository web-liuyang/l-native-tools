process.env.NODE_ENV = 'development';

import path from 'path';

import configFn, { resolve } from './rollup.config';

import serve from 'rollup-plugin-serve';

const PORT = 3002;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('public', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(devUrl);
}, 1000);

export default () => {
  const configList = configFn('dev');
  configList[0].plugins = [...configList[0].plugins, serve(resolve('public'))];
  return configList;
};
