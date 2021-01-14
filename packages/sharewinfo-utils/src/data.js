// 根据平行数据获取 递归数据
// [{id:1, pid:0, name:'test1'},{id:2, pid:1, name:'test1'}] => [{id:1, pid:0, name:'test1', children:[{id:2, pid:1, name:'test1'}]}]
export const recursionData = (list, keyName, parentKeyName, rootValue) => {
  function getData(childNodes, leveKey) {
    const res = [];
    childNodes.forEach((o) => {
      const childs = list.filter((c) => c[parentKeyName] === o[keyName]);
      o.leveKey = leveKey ? `${leveKey}-${o[keyName]}` : o[keyName];
      if (childs.length) {
        o.children = getData(childs, o.leveKey);
        res.push(o);
      } else {
        res.push(o);
      }
    });
    return res;
  }
  const roots = list.filter((o) => o[parentKeyName] === rootValue);
  getData(roots, '');
  return roots;
};

// 根据key 去重数据
export const distincetData = (function f(array){
  const args = f.arguments;
  const hash = {};
  const res = array.reduce((item, next) => {
    let keyName = ''
    for(let i=1;i<args.length; i++){
      keyName += next[args[i]]||'-'
    }
    if(!hash[keyName]){
      hash[keyName] = true
      item.push(next)
    } 
    return item;
  }, []);
  return res;
})

// 深度 合并对象
export const merge = function (minor, main) {
  for (var key in minor) {
    const target = main[key];
    if (main[key] === undefined) {
      main[key] = minor[key];
      continue;
    }

    if (typeof target == 'object' && target.constructor == Object) {
      arguments.callee(minor[key], main[key]);
    }
  }
};

export function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// 延迟发起请求，
export function delayToDo(fun, ms, para) {
  if (!fun || !ms || typeof ms !== 'number' || typeof fun !== 'function') {
    throw new Error('参数错误');
  }
  if (window.timer) {
    clearTimeout(window.timer);
  }
  window.timer = setTimeout(function (p) {
    fun(p);
  }, ms, para);
}
