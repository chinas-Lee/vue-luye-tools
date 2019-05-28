"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by LCQ on 2019-05-28,0028.
 */
var _VueTools = require('./src/index');

var genericInstall = function genericInstall(Vue) {
  Vue._VueTools = _VueTools;
  Object.defineProperties(Vue.prototype, {
    _VueTools: {
      get: function get() {
        return _VueTools;
      }
    }
  });
};

var VueLuyeTools = {
  install: function install(Vue, options) {
    if (options && options.name) {
      Vue[options.name] = _VueTools;
      Object.defineProperties(Vue.prototype, _defineProperty({}, options.name, {
        get: function get() {
          return _VueTools;
        }
      }));
    }

    genericInstall(Vue);
    Vue.mixin({
      mounted: function mounted() {// Just tell you that it is mounted
        // console.log('VueLodash');
      }
    });

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLuyeTools);
    }
  }
};
var _default = VueLuyeTools;
exports.default = _default;