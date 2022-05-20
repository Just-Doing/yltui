export const clearCookie = function () {
  const date = new Date();
  date.setTime(date.getTime() - 10000);
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = 0; i < keys.length; i += 1) document.cookie = `${keys[i]}=0; expire=${date.toGMTString()}; path=/`;
  }
};
