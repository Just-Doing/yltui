import { controlWithLabel, getElementLeft, getElementTop } from '../render-utils';
import createOption from './option';

export default (option) => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const select = document.createElement('div');
  select.setAttribute('class', 'select-box');
  select.setAttribute('name', option.name);
  select.setAttribute('rel', '');
  const selectSerach = document.createElement('p');
  selectSerach.innerHTML = '选择';
  selectSerach.setAttribute('style', 'font-size:12px;font-weight:normal');
  const dropDown = document.createElement('ul');

  //定义一个select下拉框容器
  const dropBox = document.createElement('div');
  dropBox.className = 'parentBox';
  dropBox.appendChild(dropDown);

  const icon = document.createElement('span');
  icon.setAttribute('class', 'icon');
  icon.innerHTML = `
  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
  </svg>`;

  //生成select下拉框的option
  (option.items || []).forEach((o) => {
    debugger;
    const selectOption = document.createElement('li');
    selectOption.setAttribute('rel', o.value || '');
    selectOption.innerHTML = o.text;
    selectOption.setAttribute('style', 'text-align:left');
    dropDown.appendChild(selectOption);
  });

  function getElementTop(element, targetEl) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null && current !== targetEl) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }

    return actualTop;
  }

  function getElementLeft(element, targetEl) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null && current !== targetEl) {
      actualLeft += current.offsetLeft;
      current = current.offsetParent;
    }

    return actualLeft;
  }

  select.appendChild(selectSerach);
  const box = document.getElementById('baseFormArea');
  // const box = document.body;
  box.style.position = 'relative';
  box.appendChild(dropBox);
  // select.appendChild(dropDown);
  // document.querySelector(option.parentContener).appendChild(dropBox);
  // console.log(option.parentContener);

  select.appendChild(icon);
  //dropDown的点击事件会触发select的点击事件 所以加一个控制器判断触发次数
  let flag = 1;

  //select下拉框选择事件
  dropDown.onclick = function (e) {
    if (e.target.tagName.toLowerCase() === 'li') {
      if (option.fieldChange) option.fieldChange({ [option.name]: e.target.getAttribute('rel') });
      selectSerach.innerHTML = e.target.textContent;
      select.setAttribute('rel', e.target.getAttribute('rel'));
    }
  };

  //显示出select下拉框
  function showDropdown() {
    console.log(dropDown.style.display);
    if (dropDown.style.display !== 'block') {
      dropDown.style.display = 'block';
      flag = 1;
      icon.childNodes[1].style.transform = 'rotate(180deg)';

      document.body.addEventListener('click', closeOption);
    }
  }

  //点击select事件
  select.onclick = function (e) {
    if (flag !== 2) {
      //给select下拉框添加style以及定位
      const disx = getElementLeft(select, box);
      const disy = getElementTop(select, box) + select.offsetHeight;
      const width = select.offsetWidth;
      dropDown.setAttribute('style', 'width:' + width + 'px');
      dropBox.setAttribute('style', 'position:absolute;left:' + disx + 'px;' + 'top:' + disy + 'px');

      showDropdown();
    } else if (flag === 2) {
      closeOption();
    }
  };

  //关闭select下拉框
  function closeOption() {
    if (dropDown.style.display == 'block') {
      flag += 1;
      if (flag === 3) {
        dropDown.style.display = 'none';
        icon.childNodes[1].style.transform = 'rotate(0deg)';
        document.body.removeEventListener('click', closeOption);
      }
    }
  }
  return controlWithLabel(option.label, option.waper, select);
};
