process.env.NODE_ENV = 'production';

import configFn, { resolve } from './rollup.config';

// import { uglify } from 'rollup-plugin-uglify'; // 只支持ES5
import { terser } from 'rollup-plugin-terser'; // 支持ES6+

export default () => {
  const configList = configFn('dist');
  configList.map((item) => {
    item.plugins = [...item.plugins, terser()];
    return item;
  });
  return configList;
};
