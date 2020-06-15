export default option => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', option.name);
  input.setAttribute('value', option.value);
  option.checked && input.setAttribute('checked', 'checked');
  const label = document.createElement('label');

  label.appendChild(input);
  return label;
};
