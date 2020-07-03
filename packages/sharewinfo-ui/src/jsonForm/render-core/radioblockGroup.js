import { controlWithLabel } from '../render-utils';

export default option => {
  function createRadioBlock(radioOpt) {
    const radio = document.createElement('div');
    radio.setAttribute('class', 'radio-block');
    radioOpt.checked && radio.classList.add('radio-block-checked');
    radio.setAttribute('name', radioOpt.name);
    radio.setAttribute('type', radioOpt.type);
    radio.setAttribute('value', radioOpt.value || radioOpt.text);
    radio.innerText = radioOpt.text || radioOpt.value;
    radio.onclick = function(e) {
      // 获取当前选择的值
      let latestCheckedValue = document.querySelector(`[name='${radioOpt.name}'].radio-block-checked`).getAttribute('value');
      const checkedValue = e.target.getAttribute('value');
      const allRadio = e.target.parentNode.querySelectorAll(e.target.tagName);
      allRadio.forEach(radio => {
        radio.removeAttribute('checked');
        radio.classList.remove('radio-block-checked');
      });

      e.target.setAttribute('checked', 'checked');
      e.target.classList.add('radio-block-checked');
      if (option.fieldChange && latestCheckedValue !== checkedValue) {
        option.fieldChange({ [option.name]: checkedValue });
      }
      latestCheckedValue = checkedValue;
    };
    return radio;
  }

  if (!option.name) throw 'json 中必须指定name 属性：' + JSON.stringify(option);
  const waper = document.createElement('div');

  waper.setAttribute('class', 'radio-block-list');
  (option.items || []).forEach(opt => {
    opt.name = option.name;
    opt.checked = opt.value === option.value;
    const radioOption = createRadioBlock(opt);
    waper.appendChild(radioOption);
  });
  return controlWithLabel(option.label, option.waper, waper);
};
