// 个位数补0
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

// 延迟发起请求，
export function delayToDo(fun, ms) {
  if (!fun || !ms || typeof ms !== "number" || typeof fun !== "function") {
    throw new Error("参数错误");
  }
  if (window.timer) {
    clearTimeout(window.timer);
  }
  window.timer = setTimeout(() => {
    fun();
  }, ms);
}

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
  getData(roots, "");
  return roots;
};

// 根据key 去重数据
export const distincetData = (array, key) => {
  const hash = {};
  const res = array.reduce((item, next) => {
    hash[next[key]] ? "" : (hash[next[key]] = true && item.push(next));
    return item;
  }, []);
  return res;
};
