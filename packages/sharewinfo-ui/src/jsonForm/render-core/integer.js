import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const textBox = document.createElement('input');
  textBox.setAttribute('style', 'width: calc(100% - 8px)');
  textBox.setAttribute('type', 'text');
  textBox.setAttribute('name', option.name);
  textBox.setAttribute('value', option.value || '');
  if (option.fieldChange) {
    textBox.onchange = e => option.fieldChange({ [option.name]: e.target.value });
  }
  return controlWithLabel(option.label, option.waper, textBox);
};
