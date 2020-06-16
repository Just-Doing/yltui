import { controlWithLabel, hsv2rgb, rgb2hex, rgb2hsv } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const colorBordWidth = 100,
    colorBordHeight = 100,
    colorBarHeight = 100;

  const styleTemp = (top, left) => `<style>
  .colorpick {
    width: 118px;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    flex-wrap: wrap;
  }
  </style>`;

  const htmlTemp = `<div class="colorpick">
                      <div class="color-bord" style="background-color: hsl(360, 100%, 50%);">
                        <div class="color-point"></div>
                      </div>
                      <div class="color-bar">
                        <div class="color-bar-porint"></div>
                      </div>
                      <div class="color-input"><input type="text" id="color-input" /></div>
                      <div class="color-ok">OK</div>
                    </div>`;

  const colorPick = document.createElement('div');
  const colorPickWindow = document.createElement('div');
  const removeColorPick = e => {
    if (
      e.target.className != 'colorbox' &&
      e.target.className != 'color-bord' &&
      e.target.className != 'color-bar' &&
      e.target.id != 'color-input'
    ) {
      if (option.fieldChange) {
        const colorInput = document.querySelector('#color-input');
        if (colorInput) option.fieldChange({ [option.name]: colorInput.value });
      }
      colorPickWindow.remove();
      document.body.removeEventListener('click', removeColorPick);
    }
  };
  option.name && colorPick.setAttribute('name', option.name);
  colorPick.setAttribute('class', 'colorbox');
  colorPick.setAttribute('style', 'background-color: ' + option.value || '#fff');
  colorPick.onclick = function(e) {
    document.body.addEventListener('click', removeColorPick);
    colorPickWindow.innerHTML = styleTemp(e.pageY, e.pageX) + htmlTemp;
    document.body.appendChild(colorPickWindow);
    const colorBord = document.querySelector('.color-bord');
    const colorBar = document.querySelector('.color-bar');
    const colorPoint = document.querySelector('.color-point');
    const colorBarPoint = document.querySelector('.color-bar-porint');
    const colorOk = document.querySelector('.color-ok');
    const colorInput = document.querySelector('#color-input');
    const colorValue = colorPick.style.backgroundColor; // 这里是rgb值
    if (colorValue) {
      // 回选颜色
      const rgbValue = /rgb\((\d*), (\d*), (\d*)\)/.exec(colorValue);
      const r = rgbValue[1],
        g = rgbValue[2],
        b = rgbValue[3];
      const hsv = rgb2hsv(r, g, b);
      const colorBarPointY = colorBarHeight - (hsv.h / 360) * colorBarHeight;
      colorBarPoint.style.top = `${colorBarPointY}px`;
      const colorPointX = Math.round(hsv.s * colorBordWidth);
      const colorPointY = Math.round((1 - hsv.v) * colorBordHeight);
      colorPoint.style.top = `${colorPointY}px`;
      colorPoint.style.left = `${colorPointX}px`;
      colorInput.value = rgb2hex(r, g, b); // 设置默认值
    }

    colorOk.onclick = removeColorPick;
    var clorRail = 0;

    function colorbordMove(e) {
      let disx = e.pageX - colorBord.offsetParent.offsetLeft;
      let disy = e.pageY - colorBord.offsetParent.offsetTop;
      colorPoint.setAttribute('style', 'top:' + disy + 'px;left: ' + disx + 'px');
      const s = Math.round((disx / colorBordWidth) * 100) / 100;
      const v = Math.round((1 - disy / colorBordHeight) * 100) / 100;

      const rgb = hsv2rgb(clorRail, s, v);
      const hex = rgb2hex(rgb.r, rgb.g, rgb.b);
      colorInput.value = hex;
      colorPick.setAttribute('style', 'background-color: ' + hex + ';');
    }

    function colorbarMove(e) {
      let disy = e.pageY - colorBar.offsetParent.offsetTop;
      colorBarPoint.setAttribute('style', 'top:' + disy + 'px;');
      clorRail = ((colorBarHeight - disy) / colorBarHeight) * 360; // 色相 计算
      colorBord.setAttribute('style', 'background-color: hsl(' + clorRail + ', 100%, 50%);'); // 色相设置取色版 背景色
    }
    colorBord.onclick = colorbordMove;
    colorBord.onmousedown = function() {
      colorBord.addEventListener('mousemove', colorbordMove);
    };
    colorBord.onmouseup = function() {
      colorBord.removeEventListener('mousemove', colorbordMove);
    };
    colorBar.onclick = colorbarMove;
    colorBar.onmousedown = function() {
      colorBar.addEventListener('mousemove', colorbarMove);
    };
    colorBar.onmouseup = function() {
      colorBar.removeEventListener('mousemove', colorbarMove);
    };
  };

  return controlWithLabel(option.label, option.waper, colorPick);
};
