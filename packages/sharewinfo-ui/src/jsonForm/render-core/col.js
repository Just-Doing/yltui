export default (option) => {
  if (!option.span) throw 'col 必须请提供span数量';

  const width = `${(option.span / 24) * 100}%`;
  const div = document.createElement('div');
  div.setAttribute('style', `width: ${width}`);
  option.class && div.setAttribute('class', option.class);
  return div;
};
