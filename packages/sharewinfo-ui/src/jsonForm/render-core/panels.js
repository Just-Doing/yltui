import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.text) throw 'panel 必须请提供text';

  const panel = document.createElement('div');
  panel.classList.add('class', 'panel');
  option.class && panel.classList.add('class', option.class);

  const panelHeader = document.createElement('div');
  panelHeader.setAttribute('class', 'panel-header');
  panelHeader.innerHTML = `<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg)">
      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
      </svg>
      <span>${option.text}</span>
    `;

  const panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body');
  // panel - body - content  三层嵌套 为了做样式和header 事件控制
  const panelBodyContent = document.createElement('div');
  panelBodyContent.setAttribute('class', 'panel-body-content');

  panelBody.appendChild(panelBodyContent);

  panel.appendChild(panelHeader);
  panel.appendChild(panelBody);

  panel.body = panelBodyContent;

  panelHeader.onclick = function() {
    if (!panelBody.orgHeight && panelBody.offsetHeight > 0) {
      panelBody.orgHeight = `${panelBody.offsetHeight}px`;
    }
    if (panelBody.offsetHeight === 0) {
      panelHeader.childNodes[0].style = 'transform: rotate(90deg);';
      panelBody.style.height = panelBody.orgHeight;
    } else {
      panelHeader.childNodes[0].style = '';
      panelBody.style.height = '0';
    }
  };

  return panel;
};