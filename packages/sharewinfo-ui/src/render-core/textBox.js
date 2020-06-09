export default (option) => {
  const waper = document.createElement('div');
  waper.setAttribute('style', 'width: 100%');
  const labelWaper = document.createElement('div');
  labelWaper.setAttribute('style', 'float: left');
  const controlWaper = document.createElement('div');
  controlWaper.setAttribute('style', 'float: left');

  labelWaper.innerHTML = option.label;

  const control = document.createElement('input');
  control.setAttribute('type', 'txt');
  control.setAttribute('name', option.name);
  control.setAttribute('value', option.value);
  controlWaper.appendChild(control);

  waper.appendChild(labelWaper); // label
  waper.appendChild(controlWaper); // control
  return waper;
};
