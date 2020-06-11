export default (option) => {
  const control = document.createElement('img');
  control.setAttribute('src', option.src);
  option.width && control.setAttribute('width', option.width);
  option.height && control.setAttribute('height', option.height);
  return control;
};
