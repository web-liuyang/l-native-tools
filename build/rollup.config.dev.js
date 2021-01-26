process.env.NODE_ENV = 'development';

import path from 'path';

import configList, { resolve } from './rollup.config';
import serve from 'rollup-plugin-serve';

const PORT = 3002;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('public', 'index.html');
const devUrl = `${devSite}/${devPath}`;

// configList.map((item, index, arr) => {
//   item.output.sourcemap = true;
//   item.plugins = [
//     ...item.plugins,
//     serve({
//       port: PORT,
//       // contentBase: [resolve('public')],
//       contentBase: [resolve('')],
//     }),
//   ];
//   return item;
// });

configList[0] = {
  ...configList[0],
  output: {
    ...configList[0].output,
    sourcemap: true,
  },
  plugins: [
    ...configList[0].plugins,
    serve({
      port: PORT,
      // contentBase: [resolve('public')],
      contentBase: [resolve('')],
    }),
  ],
};

setTimeout(() => {
  console.log(devUrl);
}, 1000);

export default configList;
