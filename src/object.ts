import { typeOf } from './common';

/**
 * 目标对象的自身属性键组成的数组,不包括原型对象
 * @param {object | any[]} origin - 源对象
 * @return {PropertyKey[]} 源对象可枚举的数组
 */
export function getOwnKeys(origin: object | any[]): PropertyKey[] {
  if (typeOf(origin) !== 'object' || typeOf(origin) !== 'array') {
    throw new TypeError(`想要获取object与array类型的参数却获得：${typeOf(origin)}类型的参数`);
  }
  return Reflect.ownKeys(origin);
}


/** 
 * 深度比较两个对象是否全等
 * @param {*} obj1 - 对象1
 * @param {*} obj2 - 对象2
 * @return {boolean} true 相等 false 不相等
 */
export function isDeepObjectEqual(obj1: any, obj2: any): boolean {
  //1.如果是比较对象===，返回true
  if (obj1 === obj2) return true;

  //2.如果比较的是两个方法，转成字符串比较
  if (typeof obj1 === 'function' && typeof obj2 === 'function')
    return obj1.toString() === obj2.toString();

  //3如果obj1和obj2都是Date实例，获取毫秒值比较
  if (obj1 instanceof Date && obj2 instanceof Date) return obj1.getTime() === obj2.getTime();

  //4如果比较是两个类型不一致,无须比较直接返回false
  if (
    Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2) ||
    typeof obj1 !== 'object'
  )
    return false;

  //5.获取对象所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  //自身属性长度相等,
  if (obj1Props.length !== obj2Props.length) return false;

  //递归调用判断每一个属性值是否相等
  return obj1Props.every(prop => isDeepObjectEqual(obj1[prop], obj2[prop]));
}

