import { controlWithLabel } from '../render-utils';

export default (option) => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const textBox = document.createElement('input');
  textBox.setAttribute('style', 'width: calc(100% - 8px)');
  textBox.setAttribute('type', 'password');
  textBox.setAttribute('name', option.name);
  textBox.setAttribute('value', option.value || '');
  return controlWithLabel(option.label, option.waper, textBox);
};
