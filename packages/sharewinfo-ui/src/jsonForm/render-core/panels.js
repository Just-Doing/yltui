import { setFiledValue } from '../render-utils';

export default option => {
  if (!option.text) throw 'panel 必须请提供text';

  const panel = document.createElement('div');
  panel.classList.add('panel');
  option.class && panel.classList.add('class', option.class);

  const panelHeader = document.createElement('div');
  panelHeader.setAttribute('class', 'panel-header');
  panelHeader.innerHTML = `<svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=""><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
      <span>${option.text}</span>
    `;

  const panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body panel-expaned');
  // panel -> body -> content  三层嵌套 为了做样式和header 事件控制
  const panelBodyContent = document.createElement('div');
  panelBodyContent.setAttribute('class', 'panel-body-content');

  const setDefault = document.createElement('span');
  setDefault.setAttribute('class', 'back-default');
  setDefault.innerText = '还原为默认值';

  setDefault.onclick = function() {
    const { defaultValue } = panel.body;
    setFiledValue(defaultValue);
    if (option.fieldChange) {
      const defaultFieldValue = {};
      Object.keys(defaultValue).forEach(k => (defaultFieldValue[k] = defaultValue[k].value));
      option.fieldChange(defaultFieldValue);
    }
  };

  panelBodyContent.appendChild(setDefault);

  panelBody.appendChild(panelBodyContent);

  panel.appendChild(panelHeader);
  panel.appendChild(panelBody);

  panel.body = panelBodyContent;

  panelHeader.onclick = function() {
    if (!panelBody.orgHeight) {
      panelBody.orgHeight = `${panelBody.offsetHeight}px`; // 记下原有高度
    }
    if (panelBody.offsetHeight < 1) {
      panelHeader.childNodes[0].style = 'transform: rotate(90deg);'; // 改变箭头方向
      panelBody.style.height = panelBody.orgHeight; // 设置原来高度
      panelBody.classList.add('panel-expaned');
      panelBody.classList.remove('panel-close');
    } else {
      panelHeader.childNodes[0].style = '';
      panelBody.style.height = '0';
      panelBody.classList.add('panel-close');
      panelBody.classList.remove('panel-expaned');
    }
  };

  return panel;
};
