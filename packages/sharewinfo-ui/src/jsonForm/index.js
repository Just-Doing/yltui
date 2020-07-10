import * as renderCore from './render-core';

// 根节点 创建
function rootElement() {
  const root = document.createElement('div');
  root.setAttribute('style', 'width: 100%; display: flex;flex-flow: row wrap');
  root.setAttribute('class', 'json-form');
  return root;
}

function createControl(option) {
  // 根据不同的类型创建不同的控件
  const control = renderCore[option.type](option);
  return control;
}
// 递归渲染 json
function recursionRender(dom, json, fieldChange, formData) {
  // json 按行数和列数 计算布局
  (json || []).forEach(o => {
    const control = createControl({ ...o, fieldChange });
    if (o.child && o.child.length) {
      if (o.type === 'panels') {
        control.body.defaultValue = {};
        recursionRender(control.body, o.child, fieldChange, formData);
      } else {
        recursionRender(control, o.child, fieldChange, formData);
      }
    }
    if (o.name) {
      formData[o.name] = o.type;
      if (dom.defaultValue)
        dom.defaultValue[o.name] = {
          controlType: o.type,
          value: o.value,
        }; // 如果父元素是panel 需要加子元素默认值记录到 父类上
    }
    dom.appendChild(control);
  });
}

function render(dom, json, fieldChange) {
  const root = rootElement();

  const formDataType = {}; //用来保存所有 字段和控件类型的对应 {field1: 'textbox'},在更具 name 和 控件类型， 读取字段值，
  recursionRender(root, json, fieldChange, formDataType);

  dom.appendChild(root);
  return {
    getData: () => {
      const formData = {};
      const objKeys = Object.keys(formDataType);
      for (var keyIndex = 0; keyIndex < objKeys.length; keyIndex++) {
        const keyName = objKeys[keyIndex];
        switch (formDataType[keyName]) {
          case 'textbox':
          case 'number':
          case 'select':
          case 'radioGroup':
            formData[keyName] = document.getElementsByName(keyName)[0].value;
            break;
          case 'radioblockGroup':
            const checkRadio = document.querySelector(`[name='${keyName}'].radio-block-checked`);
            formData[keyName] = checkRadio ? checkRadio.getAttribute('value') : '';
            break;
          case 'checkbox':
            formData[keyName] = document.getElementsByName(keyName)[0].checked;
            break;
          case 'switchBox':
            formData[keyName] = document.getElementsByName(keyName)[0].classList.contains('jsonform-switch-checked');
            break;
          case 'checkboxGroup':
            var checkboxGroup = document.getElementsByName(keyName);
            var check_val = [];
            for (var i = 0; i < checkboxGroup.length; i++) {
              if (checkboxGroup[i].checked) {
                check_val.push(checkboxGroup[i].value);
              }
            }
            formData[keyName] = check_val;
            break;
          case 'color':
            formData[keyName] = document.getElementsByName(keyName)[0].style.backgroundColor;
            break;
          case 'colorGroup':
            var colorGroup = document.getElementsByName(keyName);
            var color_val = [];
            for (var i = 0; i < colorGroup.length; i++) {
              color_val.push(colorGroup[i].style.backgroundColor);
            }
            formData[keyName] = color_val;
            break;

          case 'toggle':
            formData[keyName] = document.getElementsByName(keyName)[0].getAttribute('value');
            break;
        }
      }
      return formData;
    },
  };
}

export { render };
