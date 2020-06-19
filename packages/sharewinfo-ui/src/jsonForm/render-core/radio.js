import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const labelWaper = document.createElement('label');
  labelWaper.setAttribute('class', 'radio-label-waper');

  const waper = document.createElement('div');
  waper.setAttribute('class', 'radio-waper');
  const input = document.createElement('input');

  input.setAttribute('type', 'radio');
  input.setAttribute('name', option.name);
  input.setAttribute('id', option.id);
  input.setAttribute('value', option.value);
  option.checked && input.setAttribute('checked', 'checked');
  if (option.fieldChange) {
    input.onchange = e => option.fieldChange({ [option.name]: e.target.checked });
  }
  const label = document.createElement('span');
  label.innerText = option.text || '';

  waper.appendChild(input);

  labelWaper.appendChild(waper);
  labelWaper.appendChild(label);
  return controlWithLabel(option.label, option.waper, labelWaper);
};
