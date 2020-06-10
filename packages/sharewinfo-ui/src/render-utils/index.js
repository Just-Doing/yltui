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

export { controlWithLabel };
