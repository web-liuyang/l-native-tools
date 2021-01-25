process.env.NODE_ENV = 'development';

import path from 'path';

import config, { resolve } from './rollup.config';
import serve from 'rollup-plugin-serve';

const PORT = 3000;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('public', 'index.html');
const devUrl = `${devSite}/${devPath}`;

config.plugins = [
  ...config.plugins,
  serve({
    port: PORT,
    // contentBase: [resolve('public')],
    contentBase: [resolve('')],
  }),
];

config.output.sourcemap = true;


console.log(devUrl);

export default config;
