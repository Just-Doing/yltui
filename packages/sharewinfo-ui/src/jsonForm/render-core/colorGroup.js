import { controlWithLabel } from '../render-utils';
import color from './color';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  let changeEvent = null;
  if (option.fieldChange) {
    changeEvent = () => {
      var colorGroup = document.getElementsByName(option.name);
      var color_val = [];
      for (var i = 0; i < colorGroup.length; i++) {
        color_val.push(colorGroup[i].style.backgroundColor);
      }
      option.fieldChange({ [option.name]: color_val });
    };
  }

  const waper = document.createElement('div');
  waper.setAttribute('class', 'color-list');
  (option.items || []).forEach(opt => {
    opt.name = option.name;
    if (changeEvent) opt.fieldChange = changeEvent;
    const colorBox = color(opt, opt.value);

    waper.appendChild(colorBox);
  });
  return controlWithLabel(option.label, option.waper, waper);
};
