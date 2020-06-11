export default (option) => {
  const control = document.createElement('div');
  option.class && control.setAttribute('class', option.class);
  option.style && control.setAttribute('style', option.style);
  control.innerHTML = option.value;
  return control;
};
