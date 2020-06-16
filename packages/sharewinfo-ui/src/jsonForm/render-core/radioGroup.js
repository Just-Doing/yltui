import { controlWithLabel } from '../render-utils';
import radio from './radio';

export default (option) => {
  if (!option.name) throw 'json 中必须指定name 属性：' + JSON.stringify(option);
  const waper = document.createElement('div');
  let changeEvent = null;
  if (option.fieldChange) {
    changeEvent = () => {
      var radioGroup = document.getElementsByName(option.name);
      var check_val = [];
      for (var i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
          check_val.push(radioGroup[i].value);
        }
      }
      option.fieldChange({ [option.name]: check_val });
    };
  }

  waper.setAttribute('class', 'radio-list');
  (option.items || []).forEach((opt) => {
    opt.name = option.name;
    if (changeEvent) opt.fieldChange = changeEvent;
    opt.checked = opt.value === option.value;
    const radioOption = radio(opt);
    waper.appendChild(radioOption);
  });
  return controlWithLabel(option.label, option.waper, waper);
};
