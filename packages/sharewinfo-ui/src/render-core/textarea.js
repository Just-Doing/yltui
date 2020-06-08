export default (option) => {
  const control = document.createElement('textarea');
  control.setAttribute('name', option.name);
  control.setAttribute('value', option.value);
  return control;
};
