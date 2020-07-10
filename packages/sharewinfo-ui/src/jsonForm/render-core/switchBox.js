import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);

  const waper = document.createElement('div');
  waper.setAttribute('class', 'checkbox-waper');
  const input = document.createElement('button');

  input.setAttribute('class', 'jsonform-switch');
  input.setAttribute('name', option.name);
  input.setAttribute('id', option.id);
  input.setAttribute('value', option.value);
  option.checked && input.classList.add('jsonform-switch-checked');

  input.onclick = function() {
    if (input.classList.contains('jsonform-switch-checked')) {
      input.classList.remove('jsonform-switch-checked');
    } else {
      input.classList.add('jsonform-switch-checked');
    }
    if (option.fieldChange) {
      option.fieldChange({ [option.name]: input.classList.contains('jsonform-switch-checked') });
    }
  };

  const label = document.createElement('div');
  label.setAttribute('class', 'jsonform-switch-handle');
  input.appendChild(label);
  waper.appendChild(input);

  return controlWithLabel(option.label, option.waper, waper);
};
