export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const control = document.createElement('textarea');
  control.setAttribute('name', option.name);
  control.setAttribute('value', option.value);
  return control;
};
