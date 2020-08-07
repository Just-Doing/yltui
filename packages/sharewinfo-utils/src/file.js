const fetch = function () {};

export const UploadFile = function (url, param, cab, errcbk) {
  fetch(url, {
    method: 'POST',
    body: param,
  })
    .then((res) => {
      if (res.headers.get('Content-type').indexOf('application/json') > -1) {
        return res.json();
      }
      return res.text();
    })
    .catch((error) => {
      if (errcbk) {
        errcbk(error);
      }
    });
};
