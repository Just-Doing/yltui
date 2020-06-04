export default (option) => {
  const control = document.createElement('input');
  control.setAttribute('type', 'txt');
  control.setAttribute('value', option.defaultValue);
  return control;
};
