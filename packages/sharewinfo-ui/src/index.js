import * as jsonForm from './render-core';

function rootElement() {
  const root = document.createElement('div');
  return root;
}

function createControll(option) {
  const control = jsonForm[option.type](option);
  return control;
}

function render(dom, json) {
  json = json || []; // json 按行数和列数 计算布局
  const control = createControll(option);

  dom.appendChild(control);
}

export { render };
