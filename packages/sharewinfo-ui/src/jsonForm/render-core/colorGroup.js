import { controlWithLabel } from '../render-utils';
import color from './color';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  let changeEvent = null;
  if (option.fieldChange) {
    // 绑定字段修改事件
    changeEvent = () => {
      var colorGroup = document.getElementsByName(option.name);
      var color_val = [];
      for (var i = 0; i < colorGroup.length; i++) {
        colorGroup[i].style.backgroundColor && color_val.push(colorGroup[i].style.backgroundColor);
      }
      option.fieldChange({ [option.name]: color_val });
    };
  }

  const waper = document.createElement('div'); // 创建添加颜色按钮

  const colorListWaper = document.createElement('div');
  colorListWaper.setAttribute('class', 'color-list');
  (option.items || []).forEach(opt => {
    opt.name = option.name;
    if (changeEvent) opt.fieldChange = changeEvent;
    const colorBox = color(opt, opt.value);

    colorListWaper.appendChild(colorBox);
  });

  if (option.addOrReduce) {
    const colorPlus = document.createElement('span');
    colorPlus.setAttribute('class', 'color-plus');
    colorPlus.innerText = '+';
    const colorReduce = document.createElement('span'); // 创建删除颜色按钮
    colorReduce.setAttribute('class', 'color-reduce');
    colorReduce.innerText = '-';
    waper.appendChild(colorPlus);
    waper.appendChild(colorReduce);
    // 添加颜色 事件
    colorPlus.onclick = function() {
      const colorPlusOpt = { name: option.name };
      if (changeEvent) colorPlusOpt.fieldChange = changeEvent;
      colorPlusOpt.value = '#fff';
      const colorBox = color(colorPlusOpt);

      colorListWaper.appendChild(colorBox);
      colorListWaper.appendChild(colorBox);
    };
    // 删除颜色 事件
    colorReduce.onclick = function() {
      colorListWaper.lastChild.remove();
    };
  }

  waper.appendChild(colorListWaper);

  return controlWithLabel(option.label, option.waper, waper);
};
