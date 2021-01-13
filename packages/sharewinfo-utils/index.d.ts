export declare class data {
  // 延时 异步操作
  static delayToDo: (fun: Function, ms: number, para: object) => number;
  // 递归数据
  // input: [{id:1, pid:0, name:'test1'},{id:2, pid:1, name:'test1'}]
  // result: [{id:1, pid:0, name:'test1', children:[{id:2, pid:1, name:'test1'}]}]
  static recursionData: (list: Array<any>, keyName: string, parentKeyName: string, rootValue: string) => Array<any>;
  // 数组去重
  static distincetData: (arrat: Array<any>, key1: string, key2: string,) => Array<any>;
  // 深度合并对象
  static merge: (minor: object, minObj: object) => object;
  // 判断对象全等
  static shallowEqual: (objA: object, objB: object) => boolean;
}

export declare class time {
  // 格式化时间 默认 yyyy-mm-dd HH:mm:ss
  //yyyy-mm-dd HH:mm:ss 24小时制
  //HH:mm:ss 24小时制
  //yyyy-mm-dd hh:mm:ss 12小时制
  //yyyy-mm-dd
  //yyyy年mm月dd日
  static formate: (inputDate: any, formateStr: string) => string;
}

export declare class file {
  // 上传文件
  static UploadFile: (url: string, param: object, cab: Function, errcbk: Function) => void;
}

export declare class url {
  // 获取url 参数
  static getPageQuery: () => object;
  // 校验url
  static isUrl: (url: string) => boolean;
}

export declare class security {
  // RSA 加密  对应服务端可解密
  static rsaEncrypt: (input: string, publicKey: string) => string;
  // RSA 解密
  static rsaDecode: (input: string, privateKey: string) => string;
}

export declare class browser {
  // RSA 加密  对应服务端可解密
  static getBrowserInfo: () => object;
  // RSA 解密
  static isMobile: () => boolean;
}

export declare class map {
  // 计算两经纬度的距离
  static getDistance: (lat1: number, lng1: number, lat2: number, lng2: number) => object;
}
