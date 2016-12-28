require('es6-promise').polyfill(); //eslint-disable-line
require('isomorphic-fetch'); //eslint-disable-line

export default class Localizator {
  constructor () {
    this.source = '';
    this.memorySource = '';
  }

  load (source, callback) {
    if (source && typeof source === 'string' && callback && typeof callback === 'function') {
      this.source = `http://localhost/localizator-json/test/${source}`;
      fetch(this.source)
        .then((rsp) => {
          if (rsp.status >= 400) {
            throw new Error('Bad response from server');
          }
          return rsp.json();
        })
        .then((rsp) => {
          this.memorySource = rsp;
          callback(this.memorySource);
        });
    } else {
      throw new Error('Must provider good parameters');
    }
  }

  get (key, replace = null) {
    if (this.memorySource[key]) {
      return this.memorySource[key];
    } else {
      return 'Key doesn`t exist';
    }
  }
}
//
// var abjson = new Localizator();
// abjson.load('en.json', function (rsp) {
//   console.log(rsp);
// });
