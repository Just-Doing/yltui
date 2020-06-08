export default (opt, checked) => {
  const option = document.createElement('option');
  option.setAttribute('value', opt.value);
  checked && option.setAttribute('checked', 'checked');
  return option;
};
