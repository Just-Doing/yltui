import radio from './radio';

export default (option, checked) => {
  const waper = document.createElement('span');

  (option.items || []).forEach((opt) => {
    const option = radio(opt, opt.value === option.value);

    waper.appendChild(option);
  });
  return waper;
};
