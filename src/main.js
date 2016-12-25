/* @flow */
class Localizator {
  constructor () {
    this.source = '';
  }

  load (source) {
    if (typeof source !== 'string') {
      throw new Error('must be a string resouce');
    }
    this.source = source;
  }
}

export default new Localizator();
