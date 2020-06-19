import { setFiledValue } from '../render-utils';

export default option => {
  if (!option.text) throw 'panel 必须请提供text';

  const panel = document.createElement('div');
  panel.classList.add('panel');
  option.class && panel.classList.add('class', option.class);

  const panelHeader = document.createElement('div');
  panelHeader.setAttribute('class', 'panel-header');
  panelHeader.innerHTML = `<svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg)">
      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
      </svg>
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
    setFiledValue(panel.body.defaultValue);
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
