export default () => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const control = document.createElement('input');
  control.setAttribute('type', 'file');
  control.setAttribute('name', option.name);
  return control;
};
