import { controlWithLabel, hsv2rgb, rgb2hex, rgb2hsv, supportLocalStorage } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const colorBordWidth = 100,
    colorBordHeight = 100,
    colorBarHeight = 100;

  const colorPickHtmlTemp = (top, left) => `<div class="colorpick" style=" top: ${top}px; left: ${left}px;">
                      <div class="color-bord" style="background-color: hsl(360, 100%, 50%);">
                        <div class="color-point"></div>
                      </div>
                      <div class="color-bar">
                        <div class="color-bar-porint"></div>
                      </div>
                      <div class="color-input"><input type="text" id="color-input" /></div>
                      <div class="color-ok">OK</div>
                    </div>`;

  const defaultColor = [
    ['#ffffff', '#000000', '#118dff', '#12239e', '#e66c37', '#6b007b', '#e044a7', '#744ec2', '#d9b300', '#d64550'],
    ['#e6e6e6', '#999999', '#a0d1ff', '#a0a7d8', '#f5c4af', '#c499ca', '#f3b4dc', '#c7b8e7', '#f0e199', '#efb5b9'],
    ['#CCCCCC', '#666666', '#70BBFF', '#717BC5', '#F0A787', '#A666B0', '#EC8FCA', '#AC95DA', '#E8D166', '#E68F96'],
    ['#B3B3B3', '#333333', '#41A4FF', '#414FB1', '#EB895F', '#893395', '#E669B9', '#9071CE', '#E1C233', '#DE6A73'],
    ['#808080', '#1A1A1A', '#0D6ABF', '#0E1A77', '#AD5129', '#50005C', '#A8337D', '#573B92', '#A38600', '#A1343C'],
    ['#666666', '#000000', '#094780', '#09124F', '#73361C', '#36003E', '#702254', '#3A2761', '#6D5A00', '#6B2328'],
  ];

  const colorSelectHtmlTemp = (top, left, colorArray) => {
    let htmlTemp = `<div class="defaultcolor-list"  style=" top: ${top}px; left: ${left}px;">
                      <div class="defaultcolor-list-title"><div style="margin-left: 15px">主题颜色</div></div>`;
    colorArray.forEach(array => {
      htmlTemp += '<div class="colors">';
      array.forEach(
        color => (htmlTemp += `<div class="colorSpan" color="${color}" style="background-color: ${color}" ></div>`),
      );
      htmlTemp += '</div>';
    });
    // 如果支持 localstorge 才显示 最近使用的颜色
    if (supportLocalStorage()) {
      let stageColor = JSON.parse(window.localStorage.getItem('stageColor') || '[]');
      stageColor = stageColor.slice(0, 10);
      // 最近使用的颜色
      htmlTemp += '<div class="defaultcolor-list-title"><div style="margin-left: 15px">最近颜色</div></div>';
      htmlTemp += '<div class="colors">';
      stageColor.forEach(
        color => (htmlTemp += `<div class="colorSpan" color="${color}" style="background-color: ${color}" ></div>`),
      );
      htmlTemp += '</div>';
    }

    // 自定义颜色获取 按钮
    htmlTemp += '<div class="customer-color"><button id="customerColorBtn">自定义颜色</button></div>';
    return htmlTemp + '</div>';
  };

  const colorPick = document.createElement('div');
  const colorPickWindow = document.createElement('div');
  const removeColorPick = e => {
    if (
      e.target.className != 'colorbox' &&
      e.target.className != 'color-bord' &&
      e.target.className != 'color-bar' &&
      e.target.id != 'color-input' &&
      e.target.id != 'customerColorBtn'
    ) {
      const colorInput = document.querySelector('#color-input');
      if (colorInput && colorInput.value) {
        setColor2Storge(colorInput.value);
      }
      colorPickWindow.remove();
      document.body.removeEventListener('click', removeColorPick);
    }
  };

  function setColor2Storge(color) {
    if (option.fieldChange) {
      option.fieldChange({ [option.name]: color });
    }
    colorPick.setAttribute('style', 'background-color: ' + color);
    if (supportLocalStorage()) {
      let stageColor = JSON.parse(window.localStorage.getItem('stageColor') || '[]');
      // 删除 以前存在的颜色值
      stageColor.splice(stageColor.indexOf(color), stageColor.indexOf(color) > -1 ? 1 : 0);
      stageColor = stageColor.slice(0, 10);
      stageColor.unshift(color);
      window.localStorage.setItem('stageColor', JSON.stringify(stageColor));
    }
  }

  // 弹出选择颜色窗口
  function showColorSelectWindow(e) {
    var x = e.pageX + 190 > document.body.clientWidth ? e.pageX - 190 : e.pageX;
    var y = e.pageY + 220 > document.body.clientHeight ? e.pageY - 220 : e.pageY;

    colorPickWindow.innerHTML = colorSelectHtmlTemp(y, x, defaultColor);
    document.body.appendChild(colorPickWindow);

    // 绑定 主题颜色的事件
    document.querySelectorAll('.colorSpan').forEach(function(colorSpan) {
      colorSpan.addEventListener('click', function(e) {
        const color = e.target.getAttribute('color');
        setColor2Storge(color);
      });
    });
    // 绑定 自定义颜色按钮事件
    document.getElementById('customerColorBtn').onclick = function() {
      showColorPickWindow(e);
    };
    // 绑定关闭事件
    document.body.addEventListener('click', removeColorPick);
  }

  // 弹出 自定义取色器
  function showColorPickWindow(e) {
    var x = e.pageX + 122 > document.body.clientWidth ? e.pageX - 122 : e.pageX;
    var y = e.pageY + 130 > document.body.clientHeight ? e.pageY - 130 : e.pageY;

    colorPickWindow.innerHTML = colorPickHtmlTemp(y, x);
    const colorBord = document.querySelector('.color-bord');
    const colorBar = document.querySelector('.color-bar');
    const colorPoint = document.querySelector('.color-point');
    const colorBarPoint = document.querySelector('.color-bar-porint');
    const colorOk = document.querySelector('.color-ok');
    const colorInput = document.querySelector('#color-input');
    const colorValue = colorPick.style.backgroundColor; // 这里是rgb值
    let hsv = { h: 255, s: 255, v: 255 };

    if (colorValue) {
      // 回选颜色
      const rgbValue = /rgb\((\d*), (\d*), (\d*)\)/.exec(colorValue);
      const r = rgbValue[1],
        g = rgbValue[2],
        b = rgbValue[3];
      hsv = rgb2hsv(r, g, b);
      const colorBarPointY = colorBarHeight - (hsv.h / 360) * colorBarHeight;
      colorBarPoint.style.top = `${colorBarPointY}px`;
      const colorPointX = Math.round(hsv.s * colorBordWidth);
      const colorPointY = Math.round((1 - hsv.v) * colorBordHeight);
      colorPoint.style.top = `${colorPointY}px`;
      colorPoint.style.left = `${colorPointX}px`;

      colorInput.value = rgb2hex(parseInt(r), parseInt(g), parseInt(b)); // 设置默认值
      colorBord.setAttribute('style', 'background-color: hsl(' + hsv.h + ', 100%, 50%);'); // 色相设置取色版 背景色
    }

    colorOk.onclick = removeColorPick;

    function setColor2Pick() {
      const rgb = hsv2rgb(hsv.h, hsv.s, hsv.v);
      const hex = rgb2hex(rgb.r, rgb.g, rgb.b);
      colorInput.value = hex;
      colorPick.setAttribute('style', 'background-color: ' + hex + ';');
    }
    // 色板 鼠标移动事件
    function colorbordMove(e) {
      let disx = e.pageX - colorBord.offsetParent.offsetLeft;
      let disy = e.pageY - colorBord.offsetParent.offsetTop;
      colorPoint.setAttribute('style', 'top:' + disy + 'px;left: ' + disx + 'px');
      hsv.s = Math.round((disx / colorBordWidth) * 100) / 100;
      hsv.v = Math.round((1 - disy / colorBordHeight) * 100) / 100;
      setColor2Pick();
    }
    // 色项 鼠标移动事件
    function colorbarMove(e) {
      let disy = e.pageY - colorBar.offsetParent.offsetTop;
      colorBarPoint.setAttribute('style', 'top:' + disy + 'px;');
      hsv.h = ((colorBarHeight - disy) / colorBarHeight) * 360; // 色相 计算
      colorBord.setAttribute('style', 'background-color: hsl(' + hsv.h + ', 100%, 50%);'); // 色相设置取色版 背景色
      setColor2Pick();
    }
    // 色板 点击事件
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
  }
  option.name && colorPick.setAttribute('name', option.name);
  colorPick.setAttribute('class', 'colorbox');
  colorPick.setAttribute('style', 'background-color: ' + option.value || '#fff');

  colorPick.onclick = function(e) {
    showColorSelectWindow(e);
  };

  return controlWithLabel(option.label, option.waper, colorPick);
};
