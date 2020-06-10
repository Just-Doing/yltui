import { controlWithLabel } from '../render-utils';

export default (option, checked) => {
  const labelWaper = document.createElement('label');
  labelWaper.setAttribute('class', 'checkbox-label-waper');

  const waper = document.createElement('div');
  waper.setAttribute('class', 'checkbox-waper');
  const input = document.createElement('input');

  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', option.name);
  input.setAttribute('id', option.id);
  input.setAttribute('value', option.value);
  checked && input.setAttribute('checked', 'checked');

  const label = document.createElement('span');
  label.innerText = option.text || '';

  waper.appendChild(input);

  labelWaper.appendChild(waper);
  labelWaper.appendChild(label);
  return controlWithLabel(option.label, option.waper, labelWaper);
};
