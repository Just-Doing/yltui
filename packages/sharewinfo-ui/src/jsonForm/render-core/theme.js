import { controlWithLabel } from '../render-utils';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const themeWaper = document.createElement('div');
  themeWaper.setAttribute('class', 'jsonform-theme-waper');
  themeWaper.setAttribute('name', option.name);

  (option.items || []).forEach(opt => {
    const theme = document.createElement('div');
    theme.setAttribute('value', opt.value);
    theme.setAttribute('style', `background-color: ${opt.bak}`);
    theme.setAttribute('class', 'jsonform-theme');
    (opt.colors || []).forEach(color => {
      const themeColor = document.createElement('div');
      themeColor.setAttribute('style', `background-color: ${color}`);
      themeColor.setAttribute('class', 'jsonform-theme-color');

      theme.appendChild(themeColor);
    });

    theme.onclick = function() {
      const themeCheck = document.querySelector('.jsonform-theme-checked');
      let latestCheckedValue = themeCheck ? themeCheck.getAttribute('value') : '';
      const checkedValue = theme.getAttribute('value');
      const allTheme = theme.parentNode.childNodes;
      allTheme.forEach(themDom => {
        themDom.classList.remove('jsonform-theme-checked');
      });

      theme.classList.add('jsonform-theme-checked');
      if (option.fieldChange && latestCheckedValue !== checkedValue) {
        option.fieldChange({ [option.name]: opt.value });
      }
    };

    themeWaper.appendChild(theme);
  });

  return controlWithLabel(option.label, option.waper, themeWaper);
};
