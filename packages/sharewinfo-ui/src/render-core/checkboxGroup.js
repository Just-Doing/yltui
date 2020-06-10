import { controlWithLabel } from '../render-utils';
import checkbox from './checkbox';

export default option => {
  const waper = document.createElement('div');
  waper.setAttribute('class', 'checkbox-list');
  (option.items || []).forEach(opt => {
    opt.name = option.name;
    const checkboxOption = checkbox(opt, opt.value === option.value);

    waper.appendChild(checkboxOption);
  });
  return controlWithLabel(option.label, option.waper, waper);
};
