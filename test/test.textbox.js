function render(dom, option) {
  const control = jsonForm[option.type](option);
  dom.appendChild(control);
}

const waper = document.createElement('div');
// textbox
render(dom, { type: 'textbox' });
