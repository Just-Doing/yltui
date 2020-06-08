import checkbox from './checkbox';

export default (option) => {
  const waper = document.createElement('span');

  (option.items || []).forEach((opt) => {
    const option = checkbox(opt, opt.value === option.value);

    waper.appendChild(option);
  });
  return waper;
};
