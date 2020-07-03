import * as renderCore from './index';

import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 中必须指定name 属性：' + JSON.stringify(option);
  if (!option.controls || option.controls.length !== 2)
    throw 'json 中必须指定controls 长度为2的控件数量：' + JSON.stringify(option);

  const waper = document.createElement('div');
  waper.setAttribute('name', option.name);
  const firstOption = { ...option.controls[0], name: `${option.name}0` };
  const secondOption = { ...option.controls[1], name: `${option.name}1` };
  waper.setAttribute('value', firstOption.value || '');
  // 当控件 值改动时 设置到父节点属性上
  firstOption.fieldChange = function(field) {
    const value = field[`${option.name}0`];
    waper.setAttribute('value', value);
    option.fieldChange({ [option.name]: value });
  };
  secondOption.fieldChange = function(field) {
    const value = field[`${option.name}1`];
    waper.setAttribute('value', value);
    option.fieldChange({ [option.name]: value });
  };

  const firstControl = renderCore[option.controls[0].type](firstOption);
  const secondControl = renderCore[option.controls[1].type](secondOption);
  secondControl.style.display = 'none';
  firstControl.setAttribute("controlType", firstOption.type)
  secondControl.setAttribute("controlType", secondOption.type)
  firstControl.setAttribute('value', JSON.stringify(firstOption.value || '')); // 记录下第一个控件的 默认值
  secondControl.setAttribute('value', JSON.stringify(secondOption.value || '')); // 记录下第二个控件的 默认值

  const toggleBtn = document.createElement('button');
  toggleBtn.innerText = '切换';
  toggleBtn.onclick = function() {
    const firstControlVisable = firstControl.style.display;
    const secondControlVisable = secondControl.style.display;
    firstControl.style.display = firstControlVisable === '' ? 'none' : '';
    secondControl.style.display = secondControlVisable === '' ? 'none' : '';
  };
  waper.setAttribute('class', 'toggle-list');

  const toggleBtnWper = document.createElement('div');
  toggleBtnWper.setAttribute('class', 'toggle-btn-waper');
  toggleBtnWper.appendChild(toggleBtn);
  waper.appendChild(toggleBtnWper);
  waper.appendChild(firstControl);
  waper.appendChild(secondControl);
  return controlWithLabel(option.label, option.waper, waper);
};
