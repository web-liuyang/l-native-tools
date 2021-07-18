process.env.NODE_ENV = 'development';

import path from 'path';

import rollupOptionsFunc, { resolve } from './rollup.config';

import serve from 'rollup-plugin-serve';

const PORT = 3002;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('public', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(devUrl);
}, 1000);

export default () => {
  const configList = rollupOptionsFunc('dev');
  configList.plugins = [...configList.plugins, serve(resolve('public'))];
  return configList;
};
