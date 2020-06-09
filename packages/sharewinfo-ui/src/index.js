import * as jsonForm from './render-core';

function rootElement() {
  const root = document.createElement('div');
  root.setAttribute('style', 'width: 100%; display: flex;flex-flow: row wrap');
  return root;
}

function createControl(option) {
  const control = jsonForm[option.type](option);
  return control;
}

function recursionRender(dom, json) {
  // json 按行数和列数 计算布局
  (json || []).forEach((o) => {
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
