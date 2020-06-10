import { controlWithLabel } from '../render-utils';

export default option => {
  const control = document.createElement('input');
  control.setAttribute('type', 'txt');
  control.setAttribute('name', option.name);
  control.setAttribute('value', option.value || '');

  return controlWithLabel(option.label, option.waper, control);
};
