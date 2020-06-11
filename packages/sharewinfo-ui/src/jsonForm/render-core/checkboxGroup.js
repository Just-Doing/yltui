import { controlWithLabel } from '../render-utils';
import checkbox from './checkbox';

export default option => {
  if (!option.name) throw 'json 中必须指定name 属性：' + JSON.stringify(option);
  const waper = document.createElement('div');
  let changeEvent = null;
  if (option.fieldChange) {
    changeEvent = () => {
      var checkboxGroup = document.getElementsByName(option.name);
      var check_val = [];
      for (var i = 0; i < checkboxGroup.length; i++) {
        if (checkboxGroup[i].checked) {
          check_val.push(checkboxGroup[i].value);
        }
      }
      option.fieldChange({ [option.name]: check_val });
    };
  }

  waper.setAttribute('class', 'checkbox-list');
  (option.items || []).forEach(opt => {
    opt.name = option.name;
    if (changeEvent) opt.fieldChange = changeEvent;
    const checkboxOption = checkbox(opt, opt.value === option.value);
    waper.appendChild(checkboxOption);
  });
  return controlWithLabel(option.label, option.waper, waper);
};
