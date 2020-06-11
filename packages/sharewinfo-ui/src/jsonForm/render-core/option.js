export default (opt, checked) => {
  const option = document.createElement('option');
  option.setAttribute('value', opt.value);
  option.innerText = opt.text;
  checked && option.setAttribute('selected', 'selected');
  return option;
};
