import col from '../render-core/col';

const controlWithLabel = (labelOption, waperOption, control) => {
  const waper = document.createElement('div');
  waper.setAttribute('class', 'text-waper');

  // label
  if (labelOption) {
    const labelWaper = col({
      span: labelOption.span || 12,
      class: labelOption.class,
    });
    labelWaper.setAttribute('class', 'label-waper');
    labelWaper.innerText = labelOption.text || '';
    waper.appendChild(labelWaper); // label
  }
  if (waperOption) {
    const controlWaper = col({
      span: waperOption.span || 12,
      class: waperOption.class,
    });
    controlWaper.setAttribute('class', 'control-waper');
    controlWaper.appendChild(control); // 控件加入 包装器
    waper.appendChild(controlWaper); // 返回 外包装器
  } else {
    waper.appendChild(control); // 返回 外包装器
  }
  return waper;
};

function boundValue(value, max) {
  value = Math.min(max, Math.max(0, value));
  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }
  return (value % max) / ~~max;
}

const hsv2hsl = function (h, s, v) {
  return {
    h,
    s: (s * v) / ((h = (2 - s) * v) < 1 ? h : 2 - h) || 0,
    l: h / 2,
  };
};

const hsv2rgb = (h, s, v) => {
  h = boundValue(h, 360);
  s = boundValue(s * 100, 100);
  v = boundValue(v * 100, 100);

  const i = ~~(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r = 0,
    g = 0,
    b = 0;
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }

  const round = (value) => Math.round(value * 255);

  return {
    r: round(r),
    g: round(g),
    b: round(b),
  };
};

const rgb2hex = (r, g, b) => {
  let color = '#';
  [r, g, b].forEach((v) => {
    let hex = v.toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    color += hex;
  });
  return color;
};
const parseAlpha = (a) => (a !== void 0 && !isNaN(+a) && 0 <= +a && +a <= 1 ? +a : 1);

const rgb2hsv = (r, g, b, a) => {
  r = boundValue(r, 255);
  g = boundValue(g, 255);
  b = boundValue(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s;
  let v = max;

  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: h * 360,
    s: s,
    v: v,
    a: parseAlpha(a),
  };
};

const setFiledValue = (fieldData) => {
  const objKeys = Object.keys(fieldData);
  for (var keyIndex = 0; keyIndex < objKeys.length; keyIndex++) {
    const keyName = objKeys[keyIndex];
    switch (
      fieldData[keyName].controlType // 按照控件类型 赋值
    ) {
      case 'textbox':
      case 'number':
      case 'select':
        document.getElementsByName(keyName)[0].value = fieldData[keyName].value;
        break;
      case 'checkbox':
        document.getElementsByName(keyName)[0].checked = fieldData[keyName].value;
        break;
      case 'switchBox':
        var switchBox = document.querySelector(`[name='${keyName}']`);
        if (fieldData[keyName].value) {
          switchBox.classList.add('jsonform-switch-checked');
        } else {
          switchBox.classList.remove('jsonform-switch-checked');
        }
        break;
      case 'checkboxGroup':
      case 'radioGroup':
        var checkboxGroup = document.getElementsByName(keyName);
        var check_val = fieldData[keyName].value;
        for (var i = 0; i < checkboxGroup.length; i++) {
          checkboxGroup[i].checked = check_val.indexOf(checkboxGroup[i].value) > -1;
        }
        break;
      case 'radioblockGroup':
        var checkboxGroup = document.getElementsByName(keyName);
        var check_val = fieldData[keyName].value;
        for (var i = 0; i < checkboxGroup.length; i++) {
          const value = checkboxGroup[i].getAttribute('value');
          if (check_val.indexOf(value) > -1) checkboxGroup[i].classList.add('radio-block-checked');
          else checkboxGroup[i].classList.remove('radio-block-checked');
        }
        break;
      case 'color':
        document.getElementsByName(keyName)[0].style.backgroundColor = fieldData[keyName].value;
        break;
      case 'colorGroup':
        var colorGroup = document.getElementsByName(keyName);
        var color_val = fieldData[keyName].value;

        for (var i = colorGroup.length - 1; i >= 0; i--) {
          if (i > color_val.length - 1) {
            colorGroup[i].parentNode.remove(); // 删除多余的 颜色选择
          } else {
            colorGroup[i].style.backgroundColor = color_val[i];
          }
        }
        break;
      case 'toggle':
        var controls = document.getElementsByName(keyName)[0];
        const control1 = controls.childNodes[1];
        const control2 = controls.childNodes[2];
        control1.style.display = ''; // 第一组控件 显示
        control2.style.display = 'none'; // 第二组控件 隐藏
        let control1DefaultValue = control1.getAttribute('value');
        control1DefaultValue = control1DefaultValue ? JSON.parse(control1DefaultValue) : '';

        let control2DefaultValue = control2.getAttribute('value');
        control2DefaultValue = control2DefaultValue ? JSON.parse(control2DefaultValue) : '';
        const control1Type = control1.getAttribute('controlType');
        const control2Type = control2.getAttribute('controlType');
        // 恢复 子控件值
        setFiledValue({
          [keyName + '0']: {
            controlType: control1Type,
            value: control1DefaultValue,
          },
        });
        setFiledValue({
          [keyName + '1']: {
            controlType: control2Type,
            value: control2DefaultValue,
          },
        });
        break;
    }
  }
};

function supportLocalStorage() {
  if (navigator.userAgent.indexOf('UCBrowser') > -1) {
    return false;
  }
  var uaFlag = 0;
  var uaArr = new Array(
    'Chrome',
    'MQQBrowser',
    'QQ',
    'TBS',
    'wxwork',
    'MicroMessenger',
    'T7',
    'baiduboxapp',
    'baidubrowser',
    'MiuiBrowser',
    'NetType',
    'OPR',
  );
  for (var i = 0; i < uaArr.length; i++) {
    if (navigator.userAgent.indexOf(uaArr[i]) > -1) {
      uaFlag = 1;
    }
  }
  if (uaFlag != 1) {
    if (navigator.userAgent.indexOf('HUAWEIEVA') > -1 || navigator.userAgent.indexOf('HUAWEIVTR') > -1) {
      return false;
    }
  }
  var testKey = 'test';
  try {
    window.localStorage.setItem(testKey, 'testValue');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

function getElementTop(element, targetEl) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;

  while (current !== null && current !== targetEl) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

function getElementLeft(element, targetEl) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;

  while (current !== null && current !== targetEl) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

export { controlWithLabel, hsv2hsl, hsv2rgb, rgb2hex, getElementLeft, rgb2hsv, setFiledValue, supportLocalStorage, getElementTop };
