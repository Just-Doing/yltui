import { controlWithLabel, hsv2hsl, hsv2rgb, rgb2hex } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);

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
.color-bord {
  position: relative;
  width: 100px;
  height: 100px;
  border: solid 1px #cbcbcb;
  border-radius: 3px 0 0 3px;
}
.color-bord::after,
.color-bord::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.color-bord::before {
  background: linear-gradient(to right, white, transparent);
}

.color-bord::after {
  background: linear-gradient(to top, black, transparent);
}

.color-bar {
  width: 15px;
  height: 100px;
  border: solid 1px #cbcbcb;
  border-left: none;
  border-radius: 0 3px 3px 0;
  background: linear-gradient(
    to top,
    #f00 0%,
    #ff0 16.66%,
    #0f0 33.33%,
    #0ff 50%,
    #00f 66.66%,
    #f0f 83.33%,
    #f00 100%
  );
}
.color-bar-porint {
  width: 15px;
  height: 3px;
  border-top: solid 1px #fff;
  border-bottom: solid 1px #fff;
  background-color: #fff;
  opacity: 0.8;
  position: relative;
  top: 50px;
}
.color-point {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  bottom: 50px;
  z-index: 1;
}
#color-input{
  width: 70px;
}
.color-ok{
  width: 35px;
  height: 20px;
  border: solid 1px #cbcbcb;
  border-radius: 3px;
  background: #193964;
  color: #fff;    
  text-align: center;
  margin: 2px 0 0 2px;
  line-height: 20px;
  cursor: pointer;
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
    }
  };
  document.body.removeEventListener('click', removeColorPick);
  document.body.addEventListener('click', removeColorPick);
  option.name && colorPick.setAttribute('name', option.name);
  colorPick.setAttribute('class', 'colorbox');
  colorPick.setAttribute('style', 'background-color: ' + option.value || '#fff');
  colorPick.onclick = function(e) {
    colorPickWindow.innerHTML = styleTemp(e.pageY, e.pageX) + htmlTemp;
    document.body.appendChild(colorPickWindow);
    const colorBord = document.querySelector('.color-bord');
    const colorBar = document.querySelector('.color-bar');
    const colorPoint = document.querySelector('.color-point');
    const colorBarPoint = document.querySelector('.color-bar-porint');
    const colorOk = document.querySelector('.color-ok');
    const colorInput = document.querySelector('#color-input');
    colorOk.onclick = removeColorPick;
    var clorRail = 0;

    function colorbordMove(e) {
      let disx = e.pageX - colorBord.offsetParent.offsetLeft;
      let disy = e.pageY - colorBord.offsetParent.offsetTop;
      colorPoint.setAttribute('style', 'top:' + disy + 'px;left: ' + disx + 'px');
      const colorBarWidth = 100,
        colorBarHeight = 100;
      const hue = Math.round((disx / colorBarWidth) * 100) / 100;
      const light = Math.round((1 - disy / colorBarHeight) * 100) / 100;
      const rgb = hsv2rgb(clorRail, hue, light);
      const hex = rgb2hex(rgb.r, rgb.g, rgb.b);
      colorInput.value = hex;
      colorPick.setAttribute('style', 'background-color: ' + hex + ';');
    }
    function colorbarMove(e) {
      let disy = e.pageY - colorBar.offsetParent.offsetTop;
      colorBarPoint.setAttribute('style', 'top:' + disy + 'px;');
      const colorBarHeight = 100;
      clorRail = ((100 - disy) / colorBarHeight) * 360;
      colorBord.setAttribute('style', 'background-color: hsl(' + clorRail + ', 100%, 50%);');
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
