export default (option) => {
  const control = document.createElement('input');
  control.setAttribute('type', 'submit');
  control.setAttribute('value', option.value);
  return control;
};
