export declare class data {
  static delayToDo: (fun: Function, ms: number) => number;
  static recursionData: (list: Array<any>, keyName: string, parentKeyName: string, rootValue: string) => Array<any>;
  static distincetData: (arrat: Array<any>, key: string) => Array<any>;
}

export declare class time {
  static getDate: (inputDate: any) => string;
}

export declare class file {
  static UploadFile: (url: string, param: object, cab: Function, errcbk: Function) => void;
}

export declare class url {
  static getPageQuery: () => object;
  static isUrl: (url: string) => boolean;
}
