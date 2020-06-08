import createOption from './option';

export default (option) => {
  const select = document.createElement('select');
  select.setAttribute('name', option.name);

  (option.items || []).forEach((opt) => {
    const optControl = createOption(opt, opt.value === option.value);

    select.appendChild(optControl);
  });
  return select;
};
