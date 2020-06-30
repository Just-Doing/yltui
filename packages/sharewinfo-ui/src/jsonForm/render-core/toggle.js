import * as renderCore from './index';

import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 中必须指定name 属性：' + JSON.stringify(option);
  // 记录下上次选择的值
  let currentControlIndex = 0;
  const firstControl = renderCore[option.child[0].type](option.child[0]);
  const secondControl = renderCore[option.child[1].type](option.child[1]);

  const waper = document.createElement('div');

  waper.setAttribute('class', 'radio-block-list');
  waper.appendChild(firstControl);
  waper.appendChild(secondControl);
  return controlWithLabel(option.label, option.waper, waper);
};
