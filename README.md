# yltui 是一个前端工具，包含一些和业务无关的公共方法

接口：
## data
  1. 延时 异步操作
      delayToDo: (fun: Function, ms: number) => number;
  2. 递归数据 input: [{id:1, pid:0, name:'test1'},{id:2, pid:1, name:'test1'}]
             result: [{id:1, pid:0, name:'test1', children:[{id:2, pid:1, name:'test1'}]}]
      recursionData: (list: Array<any>, keyName: string, parentKeyName: string, rootValue: string) => Array<any>;
  3. 数组去重
      distincetData: (arrat: Array<any>, key: string) => Array<any>;
  4. 度合并对象
      distincetData: (arrat: Array<any>, key: string) => Array<any>;
  5. 判断对象全等
      shallowEqual: (objA: object, objB: object) => boolean;
## time
  1. 格式化时间 YYYY-MM-dd HH:mm:ss
      ormate: (inputDate: any) => string;
## file
  1. 上传文件
      UploadFile: (url: string, param: object, cab: Function, errcbk: Function) => void;
## url
  1. 获取url 参数
      getPageQuery: () => object;
  2. 校验url
      isUrl: (url: string) => boolean;
## security
  1. RSA 加密  对应服务端可解密
      rsaEncrypt: (input: string, publicKey: string) => string;
  2. RSA 解密
      saDecode: (input: string, privateKey: string) => string;
