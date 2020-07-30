import { controlWithLabel } from '../render-utils';
import createOption from './option';

export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const select = document.createElement('div');
  select.setAttribute('class', 'select-box');
  select.setAttribute('id', option.name);
  const selectSerach = document.createElement('p');
  selectSerach.innerHTML = '选择';
  const droDown = document.createElement('ul');

  const icon = document.createElement('span');
  icon.setAttribute('class', 'icon');
  icon.innerHTML = `
  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
  </svg>`;

  (option.items || []).forEach(o => {
    debugger;
    const option = document.createElement('li');
    option.setAttribute('rel', o.value);
    option.innerHTML = o.text;
    droDown.appendChild(option);
  });
  select.appendChild(selectSerach);
  select.appendChild(droDown);
  select.appendChild(icon);
  let flag = '';

  droDown.onclick = function(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
      if (option.fieldChange) option.fieldChange({ [option.name]: e.target.getAttribute('rel') });
      selectSerach.innerHTML = e.target.textContent;
    }
  };

  function showDropdown() {
    console.log(droDown.style.display);
    if (droDown.style.display !== 'block') {
      droDown.style.display = 'block';
      flag = 1;
      icon.childNodes[1].style.transform = 'rotate(180deg)';

      document.body.addEventListener('click', closeOption);
    }
  }

  select.onclick = function(e) {
    showDropdown();
  };

  function closeOption() {
    if (droDown.style.display == 'block') {
      console.log(2);
      flag += 1;
      if (flag === 3) {
        droDown.style.display = 'none';
        flag += 1;
        icon.childNodes[1].style.transform = 'rotate(0deg)';
        document.body.removeEventListener('click', closeOption);
      }
    }
  }
  return controlWithLabel(option.label, option.waper, select);
};
