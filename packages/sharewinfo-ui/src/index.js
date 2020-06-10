import * as jsonForm from './render-core';

// 根节点 创建
function rootElement() {
  const root = document.createElement('div');
  root.setAttribute('style', 'width: 100%; display: flex;flex-flow: row wrap');
  return root;
}

function createControl(option) {
  // 根据不同的类型创建不同的控件
  const control = jsonForm[option.type](option);
  return control;
}

// 递归渲染 json
function recursionRender(dom, json) {
  // json 按行数和列数 计算布局
  (json || []).forEach(o => {
    const control = createControl(o);
    if (o.child && o.child.length) {
      recursionRender(control, o.child);
    }
    dom.appendChild(control);
  });
}

function render(dom, json) {
  const root = rootElement();

  recursionRender(root, json);

  dom.appendChild(root);
}

export { render };
