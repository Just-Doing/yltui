# yltui 是一个前端工具，包含一些和业务无关的公共方法

安装： npm install sharewinfo-utils -S | npm install sharewinfo-ui -S | <script type="text/javascript" src='index.js'></script> <br />
全局对象 sharewinfo
接口：

## data

1. 延时 异步操作<br />
   &nbsp;&nbsp;delayToDo: (fun: Function, ms: number) => number;<br />
2. 递归数据 input: [{id:1, pid:0, name:'test1'},{id:2, pid:1, name:'test1'}]<br />
   result: [{id:1, pid:0, name:'test1', children:[{id:2, pid:1, name:'test1'}]}]<br />
   recursionData: (list: Array<any>, keyName: string, parentKeyName: string, rootValue: string) => Array<any>;<br />
3. 数组去重<br />
   distincetData: (arrat: Array<any>, key: string) => Array<any>;<br />
4. 度合并对象<br />
   distincetData: (arrat: Array<any>, key: string) => Array<any>;<br />
5. 判断对象全等<br />
   shallowEqual: (objA: object, objB: object) => boolean;<br />

## time

1. 格式化时间 YYYY-MM-dd HH:mm:ss<br />
   ormate: (inputDate: any) => string;<br />

## file

1. 上传文件<br />
   UploadFile: (url: string, param: object, cab: Function, errcbk: Function) => void;<br />

## url

1. 获取 url 参数<br />
   getPageQuery: () => object;<br />
2. 校验 url<br />
   isUrl: (url: string) => boolean;<br />

## security

1. RSA 加密 对应服务端可解密<br />
   rsaEncrypt: (input: string, publicKey: string) => string;<br />
2. RSA 解密<br />
   saDecode: (input: string, privateKey: string) => string;
