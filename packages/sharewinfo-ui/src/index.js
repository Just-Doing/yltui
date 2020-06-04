import * as jsonForm from './render-core';

function render(dom, option) {
  const control = jsonForm[option.type](option);
  dom.appendChild(control);
}

export { render };
