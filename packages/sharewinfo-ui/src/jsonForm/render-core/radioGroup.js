import radio from './radio';

export default (option, checked) => {
  if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
  const waper = document.createElement('span');

  (option.items || []).forEach(opt => {
    const option = radio(opt, opt.value === option.value);

    waper.appendChild(option);
  });
  return waper;
};
