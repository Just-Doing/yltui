import * as renderCore from './index';

import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 中必须指定name 属性：' + JSON.stringify(option);
  if (!option.controls || option.controls.length !== 2)
    throw 'json 中必须指定controls 长度为2的控件数量：' + JSON.stringify(option);
  // 记录下上次选择的值
  const firstControl = renderCore[option.controls[0].type](option.controls[0]);
  const secondControl = renderCore[option.controls[1].type](option.controls[1]);
  secondControl.style.display = 'none';
  const waper = document.createElement('div');
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
