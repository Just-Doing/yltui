export default opt => {
  const option = document.createElement('option');
  option.setAttribute('value', opt.value);
  option.innerText = opt.text;
  option.checked && option.setAttribute('selected', 'selected');
  return option;
};
