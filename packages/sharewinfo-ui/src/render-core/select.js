import { controlWithLabel } from '../render-utils';
import createOption from './option';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const select = document.createElement('select');
  select.setAttribute('name', option.name);
  if (option.fieldChange) {
    select.onchange = e => option.fieldChange({ [option.name]: e.target.value });
  }
  (option.items || []).forEach(opt => {
    const optControl = createOption(opt, opt.value === option.value);

    select.appendChild(optControl);
  });
  return controlWithLabel(option.label, option.waper, select);
};
