declare const $l: {
    String: "string";
    currency(method: "+" | "-" | "*" | "/", numberArr: number[]): number;
    Object: "object";
    typeOf(origin: any): "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null";
    isEmpty(origin?: any): boolean;
    straightDistance(origin: string, target: string): number;
    deepClone<T = {} | any[]>(origin: T): T;
    debounce(fn: Function, delay: number, immediate?: boolean | undefined): () => void;
    throttle(fn: Function, delay: number): () => void;
    flatten(origin: any[], target?: any[]): any[];
};
export default $l;
