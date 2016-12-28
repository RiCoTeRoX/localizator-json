'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('isomorphic-fetch');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('es6-promise').polyfill(); //eslint-disable-line

//eslint-disable-line

var Localizator = function () {
  function Localizator() {
    _classCallCheck(this, Localizator);

    this.source = '';
    this.memorySource = '';
  }

  _createClass(Localizator, [{
    key: 'load',
    value: function load(source, callback) {
      var _this = this;

      if (typeof source === 'string' && typeof callback === 'function') {
        this.source = source;
        fetch(this.source, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (data) {
          _this.memorySource = data;
          callback();
        }).fail(function () {
          throw new Error('Fail');
        });
        return true;
      }
      throw new Error('Bad parameters');
    }
  }]);

  return Localizator;
}();

exports.default = Localizator;

