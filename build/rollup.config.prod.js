process.env.NODE_ENV = 'production';

import config, { resolve } from './rollup.config';

import { uglify } from 'rollup-plugin-uglify';
import { babel } from '@rollup/plugin-babel';

config.plugins = [
  ...config.plugins,
  babel({
    presets: ['@babel/preset-env'],
    babelHelpers: 'bundled',
  }),
  uglify(),
];

export default config;
