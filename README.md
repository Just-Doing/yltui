# yltui 是一个前端工具，包含一些和业务无关的公共方法

全局对象 sharewinfo<br />

<h1 align="center">sharewinfo-ui</h1>

## 安装

```js
npm install sharewinfo-ui -S 或者 <script type="text/javascript" src='node_modules/sharewinfo-ui/dist/index.js' />
```

## jsonForm 使用

```js
import { jsonForm } from 'sharewinfo-ui';
const formJson = [
  {
    // 第一列
    type: 'col',
    span: 12, // 宽度 50%
    class: 'class1',
    style: 'style111',
    child: [
      {
        type: 'textbox',
        name: 'userName',
        label: {
          text: '用户名',
          span: 12,
        },
        waper: { span: 12 },
      },
      {
        type: 'checkboxGroup',
        name: '喜欢的水果',
        label: {
          text: ' ',
          span: 12,
        },
        waper: { span: 12 },
        items: [
          { value: 'pinguo', text: '苹果' },
          { value: 'taozi', text: '桃子' },
          { value: 'xiangjiao', text: '香蕉' },
        ],
      },
    ],
  },
  {
    // 第二列
    type: 'col',
    span: 12, // 宽度 50%
  },
];
const fieldChange = fieldValue => {}; // 字段值发生改变时 回调
const formInstance = jsonForm.render(document.getElementById('domid'), formJson, fieldChange);
// form 表单数据获取
var formData = formInstance.getDate();
```

## 排版

以上 json 表示 一个 2 列 左右分布的表单，左右各占 50% 的宽度, 其中 col - span 12 / 24 \* 100 计算的宽度占比， 按照数组的项数依次版本，每行固定显示 24 个 span，超过 24 换行处理，如果排版上有要求，可以试用空 col 指定宽度来灵活调整

## color 组件

我们内置颜色选择器， 可指定 type 为 color 单个颜色选择，或者 colorGroup 颜色组 选择

![jpg](https://github.com/Just-Doing/yltui/blob/master/packages/sharewinfo-ui/img/color.jpg)

## 样式

所有控件的样式为原始样式，用户可根据自己的样式表来美化。

## json 属性 说明

### 1. 通用属性

1.  class：样式类名称
2.  style：样式表

### 2. type = 'col' 栅格

1.  span：宽度定义，总数为 24 ，按照配置的数量计算百分比，

2.  child：栅格内部的控件列表
3.  通用属性

### 3. col -> child

1.  type: 控件类型
2.  name：控件名称 用于表单取值的 key
3.  id：控件 ID
4.  value：初始值
5.  label：标签 {text, span} text: 标签值， span：标签宽度， 总数 24
6.  waper：{span， class, style} span：控件宽度 总数 24， 需要和 label - span 配合使用
7.  items：对于集合控件类型的集合配置{value, text} value: 值， text：显示值
8.  通用属性

### 4. type 取值

col | textBox | textarea | password | text | select | image | hidden | file | color | colorGroup | checkbox | checkboxGroup | radio | radioGroup

<h1 align="center">sharewinfo-utils</h1>

## 安装

```js
npm install sharewinfo-utils -S 或者 <script type="text/javascript" src='node_modules/sharewinfo-utils/dist/index.js' />
```

### data

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

### time

1. 格式化时间 YYYY-MM-dd HH:mm:ss<br />
   ormate: (inputDate: any) => string;<br />

### file

1. 上传文件<br />
   UploadFile: (url: string, param: object, cab: Function, errcbk: Function) => void;<br />

### url

1. 获取 url 参数<br />
   getPageQuery: () => object;<br />
2. 校验 url<br />
   isUrl: (url: string) => boolean;<br />

### security

1. RSA 加密 对应服务端可解密<br />
   rsaEncrypt: (input: string, publicKey: string) => string;<br />
2. RSA 解密<br />
   saDecode: (input: string, privateKey: string) => string;
