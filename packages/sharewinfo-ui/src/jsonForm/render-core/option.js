export default opt => {
  const option = document.createElement('option');
  option.setAttribute('value', opt.value);
  option.innerText = opt.text;

  opt.checked && option.setAttribute('selected', 'selected');
  return option;
};
