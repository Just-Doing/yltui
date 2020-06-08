export default (option) => {
  const control = document.createElement('input');
  control.setAttribute('type', 'password');
  control.setAttribute('name', option.name);
  control.setAttribute('value', option.value);
  return control;
};
