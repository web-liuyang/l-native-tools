import * as array from './array';
import * as common from './common';
import * as object from './object';
import * as number from './number';
import * as string from './string';

type Type = typeof array | typeof common | typeof object | typeof number | typeof string;

export default {
  ...array,
  ...common,
  ...object,
  ...number,
  ...string,
} as Type;
