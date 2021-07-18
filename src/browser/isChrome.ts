/**
 * 是否是谷歌浏览器
 * @returns
 */
function isChrome(): boolean {
  return window.navigator.userAgent.indexOf("Chrome") !== -1;
}

export default isChrome;
