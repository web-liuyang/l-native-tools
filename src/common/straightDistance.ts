import { typeOf } from "../common";

/**
 * 直线距离计算
 * @param {string} origin - 当前经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @param {string} target - 目标经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @returns 返回两端之间的距离,单位米
 */
function straightDistance(origin: string, target: string): number {
  if (typeOf(origin) !== "string" || typeOf(target) !== "string") {
    throw new TypeError(
      `想要的到string类型的参数但是却得到：${typeOf(origin)}与${typeOf(target)}类型的参数`
    );
  }
  const { PI, asin, sqrt, pow, sin, cos, round } = Math;
  // 获取经纬度
  const [lon1, lat1] = origin.split(",");
  const [lon2, lat2] = target.split(",");
  const EARTH_RADIUS = 6378137.0; // 地球半径

  // 获取弧度
  function getRad(d: string) {
    return ((d as unknown as number) * PI) / 180.0;
  }

  const radLat1 = getRad(lat1);
  const radLat2 = getRad(lat2);
  const a = radLat1 - radLat2;
  const b = getRad(lon1) - getRad(lon2);

  let s = 2 * asin(sqrt(pow(sin(a / 2), 2) + cos(radLat1) * cos(radLat2) * pow(sin(b / 2), 2)));
  s = s * EARTH_RADIUS;
  s = round(round(s * 10000) / 10000.0);
  return s;
}

export default straightDistance;
