!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.sharewinfo = t())
    : (e.sharewinfo = t());
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 1))
    );
  })([
    ,
    function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'jsonForm', function() {
          return o;
        });
      var r = {};
      n.r(r),
        n.d(r, 'panels', function() {
          return l;
        }),
        n.d(r, 'integer', function() {
          return u;
        }),
        n.d(r, 'checkbox', function() {
          return s;
        }),
        n.d(r, 'file', function() {
          return d;
        }),
        n.d(r, 'hidden', function() {
          return p;
        }),
        n.d(r, 'image', function() {
          return m;
        }),
        n.d(r, 'option', function() {
          return f;
        }),
        n.d(r, 'password', function() {
          return h;
        }),
        n.d(r, 'reset', function() {
          return g;
        }),
        n.d(r, 'select', function() {
          return v;
        }),
        n.d(r, 'submit', function() {
          return y;
        }),
        n.d(r, 'textbox', function() {
          return x;
        }),
        n.d(r, 'textarea', function() {
          return w;
        }),
        n.d(r, 'checkboxGroup', function() {
          return A;
        }),
        n.d(r, 'radio', function() {
          return b;
        }),
        n.d(r, 'radioGroup', function() {
          return k;
        }),
        n.d(r, 'col', function() {
          return a;
        }),
        n.d(r, 'text', function() {
          return C;
        }),
        n.d(r, 'color', function() {
          return E;
        }),
        n.d(r, 'colorGroup', function() {
          return N;
        });
      var o = {};
      n.r(o),
        n.d(o, 'render', function() {
          return j;
        });
      var a = e => {
        if (!e.span) throw 'col 必须请提供span数量';
        const t = (e.span / 24) * 100 + '%',
          n = document.createElement('div');
        return n.setAttribute('style', 'width: ' + t), e.class && n.setAttribute('class', e.class), n;
      };
      const c = (e, t, n) => {
        const r = document.createElement('div');
        if ((r.setAttribute('class', 'text-waper'), e)) {
          const t = a({ span: e.span || 12, class: e.class });
          t.setAttribute('class', 'label-waper'), (t.innerText = e.text || ''), r.appendChild(t);
        }
        if (t) {
          const e = a({ span: t.span || 12, class: t.class });
          e.setAttribute('class', 'control-waper'), e.appendChild(n), r.appendChild(e);
        } else r.appendChild(n);
        return r;
      };
      function i(e, t) {
        return (e = Math.min(t, Math.max(0, e))), Math.abs(e - t) < 1e-6 ? 1 : (e % t) / ~~t;
      }
      var l = e => {
          if (!e.text) throw 'panel 必须请提供text';
          const t = document.createElement('div');
          t.classList.add('class', 'panel'), e.class && t.classList.add('class', e.class);
          const n = document.createElement('div');
          n.setAttribute('class', 'panel-header'),
            (n.innerHTML = `<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg)">\n      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>\n      </svg>\n      <span>${e.text}</span>\n    `);
          const r = document.createElement('div');
          r.setAttribute('class', 'panel-body');
          const o = document.createElement('div');
          return (
            o.setAttribute('class', 'panel-body-content'),
            r.appendChild(o),
            t.appendChild(n),
            t.appendChild(r),
            (t.body = o),
            (n.onclick = function() {
              !r.orgHeight && r.offsetHeight > 0 && (r.orgHeight = r.offsetHeight + 'px'),
                0 === r.offsetHeight
                  ? ((n.childNodes[0].style = 'transform: rotate(90deg);'), (r.style.height = r.orgHeight))
                  : ((n.childNodes[0].style = ''), (r.style.height = '0'));
            }),
            t
          );
        },
        s = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('label');
          t.setAttribute('class', 'checkbox-label-waper');
          const n = document.createElement('div');
          n.setAttribute('class', 'checkbox-waper');
          const r = document.createElement('input');
          r.setAttribute('type', 'checkbox'),
            r.setAttribute('name', e.name),
            r.setAttribute('id', e.id),
            r.setAttribute('value', e.value),
            e.checked && r.setAttribute('checked', 'checked'),
            e.fieldChange && (r.onchange = t => e.fieldChange({ [e.name]: t.target.checked }));
          const o = document.createElement('span');
          return (
            (o.innerText = e.text || ''), n.appendChild(r), t.appendChild(n), t.appendChild(o), c(e.label, e.waper, t)
          );
        },
        u = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('input');
          return (
            t.setAttribute('style', 'width: calc(100% - 8px)'),
            t.setAttribute('type', 'text'),
            t.setAttribute('name', e.name),
            t.setAttribute('value', e.value || ''),
            e.fieldChange && (t.onchange = t => e.fieldChange({ [e.name]: t.target.value })),
            c(e.label, e.waper, t)
          );
        },
        d = () => {
          if (!option.name) throw 'json 指定name 属性：' + JSON.stringify(option);
          const e = document.createElement('input');
          return e.setAttribute('type', 'file'), e.setAttribute('name', option.name), e;
        },
        p = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('input');
          return t.setAttribute('type', 'hidden'), t.setAttribute('name', e.name), t.setAttribute('value', e.value), t;
        },
        m = e => {
          const t = document.createElement('img');
          return (
            t.setAttribute('src', e.src),
            e.width && t.setAttribute('width', e.width),
            e.height && t.setAttribute('height', e.height),
            t
          );
        },
        f = e => {
          const t = document.createElement('option');
          return (
            t.setAttribute('value', e.value),
            (t.innerText = e.text),
            e.checked && t.setAttribute('selected', 'selected'),
            t
          );
        },
        h = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('input');
          return (
            t.setAttribute('style', 'width: calc(100% - 8px)'),
            t.setAttribute('type', 'password'),
            t.setAttribute('name', e.name),
            t.setAttribute('value', e.value || ''),
            c(e.label, e.waper, t)
          );
        },
        b = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('label');
          t.setAttribute('class', 'radio-label-waper');
          const n = document.createElement('div');
          n.setAttribute('class', 'radio-waper');
          const r = document.createElement('input');
          r.setAttribute('type', 'radio'),
            r.setAttribute('name', e.name),
            r.setAttribute('id', e.id),
            r.setAttribute('value', e.value),
            e.checked && r.setAttribute('checked', 'checked'),
            e.fieldChange && (r.onchange = t => e.fieldChange({ [e.name]: t.target.checked }));
          const o = document.createElement('span');
          return (
            (o.innerText = e.text || ''), n.appendChild(r), t.appendChild(n), t.appendChild(o), c(e.label, e.waper, t)
          );
        },
        g = e => {
          const t = document.createElement('input');
          return t.setAttribute('type', 'reset'), t;
        },
        v = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('select');
          return (
            t.setAttribute('name', e.name),
            e.fieldChange && (t.onchange = t => e.fieldChange({ [e.name]: t.target.value })),
            (e.items || []).forEach(n => {
              n.checked = n.value === e.value;
              const r = f(n);
              t.appendChild(r);
            }),
            c(e.label, e.waper, t)
          );
        },
        y = e => {
          const t = document.createElement('input');
          return t.setAttribute('type', 'submit'), t.setAttribute('value', e.value), t;
        },
        x = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('input');
          return (
            t.setAttribute('style', 'width: calc(100% - 8px)'),
            t.setAttribute('type', 'text'),
            t.setAttribute('name', e.name),
            t.setAttribute('value', e.value || ''),
            e.fieldChange && (t.onchange = t => e.fieldChange({ [e.name]: t.target.value })),
            c(e.label, e.waper, t)
          );
        },
        w = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('textarea');
          return (
            t.setAttribute('style', 'width: calc(100% - 8px);height:150px'),
            t.setAttribute('type', 'text'),
            t.setAttribute('name', e.name),
            t.setAttribute('value', e.value || ''),
            e.fieldChange && (t.onchange = t => e.fieldChange({ [e.name]: t.target.value })),
            c(e.label, e.waper, t)
          );
        },
        A = e => {
          if (!e.name) throw 'json 中必须指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('div');
          let n = null;
          return (
            e.fieldChange &&
              (n = () => {
                for (var t = document.getElementsByName(e.name), n = [], r = 0; r < t.length; r++)
                  t[r].checked && n.push(t[r].value);
                e.fieldChange({ [e.name]: n });
              }),
            t.setAttribute('class', 'checkbox-list'),
            (e.items || []).forEach(r => {
              (r.name = e.name), n && (r.fieldChange = n), (r.checked = r.value === e.value);
              const o = s(r);
              t.appendChild(o);
            }),
            c(e.label, e.waper, t)
          );
        },
        k = e => {
          if (!e.name) throw 'json 中必须指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('div');
          let n = null;
          return (
            e.fieldChange &&
              (n = () => {
                for (var t = document.getElementsByName(e.name), n = [], r = 0; r < t.length; r++)
                  t[r].checked && n.push(t[r].value);
                e.fieldChange({ [e.name]: n });
              }),
            t.setAttribute('class', 'radio-list'),
            (e.items || []).forEach(r => {
              (r.name = e.name), n && (r.fieldChange = n), (r.checked = r.value === e.value);
              const o = b(r);
              t.appendChild(o);
            }),
            c(e.label, e.waper, t)
          );
        },
        C = e => {
          const t = document.createElement('div');
          return (
            e.class && t.setAttribute('class', e.class),
            e.style && t.setAttribute('style', e.style),
            (t.innerHTML = e.value),
            t
          );
        },
        E = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          const t = document.createElement('div'),
            n = document.createElement('div'),
            r = t => {
              if (
                'colorbox' != t.target.className &&
                'color-bord' != t.target.className &&
                'color-bar' != t.target.className &&
                'color-input' != t.target.id
              ) {
                if (e.fieldChange) {
                  const t = document.querySelector('#color-input');
                  t && e.fieldChange({ [e.name]: t.value });
                }
                n.remove(), document.body.removeEventListener('click', r);
              }
            };
          return (
            e.name && t.setAttribute('name', e.name),
            t.setAttribute('class', 'colorbox'),
            t.setAttribute('style', 'background-color: ' + e.value || !1),
            (t.onclick = function(o) {
              var a, c;
              document.body.addEventListener('click', r),
                (n.innerHTML =
                  ((a = o.pageY),
                  (c = o.pageX),
                  `<style>\n.colorpick {\n  width: 118px;\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  top: ${a}px;\n  left: ${c}px;\n  flex-wrap: wrap;\n}\n.color-bord {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  border: solid 1px #cbcbcb;\n  border-radius: 3px 0 0 3px;\n}\n.color-bord::after,\n.color-bord::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.color-bord::before {\n  background: linear-gradient(to right, white, transparent);\n}\n\n.color-bord::after {\n  background: linear-gradient(to top, black, transparent);\n}\n\n.color-bar {\n  width: 15px;\n  height: 100px;\n  border: solid 1px #cbcbcb;\n  border-left: none;\n  border-radius: 0 3px 3px 0;\n  background: linear-gradient(\n    to top,\n    #f00 0%,\n    #ff0 16.66%,\n    #0f0 33.33%,\n    #0ff 50%,\n    #00f 66.66%,\n    #f0f 83.33%,\n    #f00 100%\n  );\n}\n.color-bar-porint {\n  width: 15px;\n  height: 3px;\n  border-top: solid 1px #fff;\n  border-bottom: solid 1px #fff;\n  background-color: #fff;\n  opacity: 0.8;\n  position: relative;\n  top: 50px;\n}\n.color-point {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  bottom: 50px;\n  z-index: 1;\n}\n#color-input{\n  width: 70px;\n}\n.color-ok{\n  width: 35px;\n  height: 20px;\n  border: solid 1px #cbcbcb;\n  border-radius: 3px;\n  background: #193964;\n  color: #fff;    \n  text-align: center;\n  margin: 2px 0 0 2px;\n  line-height: 20px;\n  cursor: pointer;\n}\n</style><div class="colorpick">\n                      <div class="color-bord" style="background-color: hsl(360, 100%, 50%);">\n                        <div class="color-point"></div>\n                      </div>\n                      <div class="color-bar">\n                        <div class="color-bar-porint"></div>\n                      </div>\n                      <div class="color-input"><input type="text" id="color-input" /></div>\n                      <div class="color-ok">OK</div>\n                    </div>`)),
                document.body.appendChild(n);
              const l = document.querySelector('.color-bord'),
                s = document.querySelector('.color-bar'),
                u = document.querySelector('.color-point'),
                d = document.querySelector('.color-bar-porint'),
                p = document.querySelector('.color-ok'),
                m = document.querySelector('#color-input');
              (m.value = e.value || '#ffffff'), (p.onclick = r);
              var f = 0;
              function h(e) {
                let n = e.pageX - l.offsetParent.offsetLeft,
                  r = e.pageY - l.offsetParent.offsetTop;
                u.setAttribute('style', 'top:' + r + 'px;left: ' + n + 'px');
                const o = Math.round((n / 100) * 100) / 100,
                  a = Math.round(100 * (1 - r / 100)) / 100,
                  c = ((e, t, n) => {
                    (e = i(e, 360)), (t = i(100 * t, 100));
                    const r = ~~(6 * e),
                      o = 6 * e - r,
                      a = (n = i(100 * n, 100)) * (1 - t),
                      c = n * (1 - o * t),
                      l = n * (1 - (1 - o) * t);
                    let s = 0,
                      u = 0,
                      d = 0;
                    switch (r % 6) {
                      case 0:
                        (s = n), (u = l), (d = a);
                        break;
                      case 1:
                        (s = c), (u = n), (d = a);
                        break;
                      case 2:
                        (s = a), (u = n), (d = l);
                        break;
                      case 3:
                        (s = a), (u = c), (d = n);
                        break;
                      case 4:
                        (s = l), (u = a), (d = n);
                        break;
                      case 5:
                        (s = n), (u = a), (d = c);
                    }
                    const p = e => Math.round(255 * e);
                    return { r: p(s), g: p(u), b: p(d) };
                  })(f, o, a),
                  s = ((e, t, n) => {
                    let r = '#';
                    return (
                      [e, t, n].forEach(e => {
                        let t = e.toString(16);
                        t.length < 2 && (t = '0' + t), (r += t);
                      }),
                      r
                    );
                  })(c.r, c.g, c.b);
                (m.value = s), t.setAttribute('style', 'background-color: ' + s + ';');
              }
              function b(e) {
                let t = e.pageY - s.offsetParent.offsetTop;
                d.setAttribute('style', 'top:' + t + 'px;');
                (f = ((100 - t) / 100) * 360), l.setAttribute('style', 'background-color: hsl(' + f + ', 100%, 50%);');
              }
              (l.onclick = h),
                (l.onmousedown = function() {
                  l.addEventListener('mousemove', h);
                }),
                (l.onmouseup = function() {
                  l.removeEventListener('mousemove', h);
                }),
                (s.onclick = b),
                (s.onmousedown = function() {
                  s.addEventListener('mousemove', b);
                }),
                (s.onmouseup = function() {
                  s.removeEventListener('mousemove', b);
                });
            }),
            c(e.label, e.waper, t)
          );
        },
        N = e => {
          if (!e.name) throw 'json 指定name 属性：' + JSON.stringify(e);
          let t = null;
          e.fieldChange &&
            (t = () => {
              for (var t = document.getElementsByName(e.name), n = [], r = 0; r < t.length; r++)
                t[r].style.backgroundColor && n.push(t[r].style.backgroundColor);
              e.fieldChange({ [e.name]: n });
            });
          const n = document.createElement('div'),
            r = document.createElement('div');
          if (
            (r.setAttribute('class', 'color-list'),
            (e.items || []).forEach(n => {
              (n.name = e.name), t && (n.fieldChange = t);
              const o = E(n, n.value);
              r.appendChild(o);
            }),
            e.addOrReduce)
          ) {
            const o = document.createElement('span');
            o.setAttribute('class', 'color-plus'), (o.innerText = '+');
            const a = document.createElement('span');
            a.setAttribute('class', 'color-reduce'),
              (a.innerText = '-'),
              n.appendChild(o),
              n.appendChild(a),
              (o.onclick = function() {
                const n = { name: e.name };
                t && (n.fieldChange = t), (n.value = '#fff');
                const o = E(n);
                r.appendChild(o), r.appendChild(o);
              }),
              (a.onclick = function() {
                r.lastChild.remove();
              });
          }
          return n.appendChild(r), c(e.label, e.waper, n);
        };
      function S(e, t, n, o) {
        (t || []).forEach(t => {
          const a = (function(e) {
            return r[e.type](e);
          })({ ...t, fieldChange: n });
          t.child && t.child.length && ('panels' === t.type ? S(a.body, t.child, n, o) : S(a, t.child, n, o)),
            t.name && (o[t.name] = t.type),
            e.appendChild(a);
        });
      }
      function j(e, t, n) {
        const r = (function() {
            const e = document.createElement('div');
            return e.setAttribute('style', 'width: 100%; display: flex;flex-flow: row wrap'), e;
          })(),
          o = {};
        return (
          S(r, t, n, o),
          e.appendChild(r),
          {
            getData: () => {
              const e = {},
                t = Object.keys(o);
              for (var n = 0; n < t.length; n++) {
                const s = t[n];
                switch (o[s]) {
                  case 'textbox':
                  case 'select':
                    e[s] = document.getElementsByName(s)[0].value;
                    break;
                  case 'checkbox':
                    e[s] = document.getElementsByName(s)[0].checked;
                    break;
                  case 'checkboxGroup':
                    for (var r = document.getElementsByName(s), a = [], c = 0; c < r.length; c++)
                      r[c].checked && a.push(r[c].value);
                    e[s] = a;
                    break;
                  case 'color':
                    e[s] = document.getElementsByName(s)[0].style.backgroundColor;
                    break;
                  case 'colorGroup':
                    var i = document.getElementsByName(s),
                      l = [];
                    for (c = 0; c < i.length; c++) l.push(i[c].style.backgroundColor);
                    e[s] = l;
                }
              }
              return e;
            },
          }
        );
      }
    },
  ]);
});
