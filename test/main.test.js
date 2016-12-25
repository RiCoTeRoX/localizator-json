/* @flow */
import tape from 'tape-catch';
import abjson from '../src/main';

tape('Localizator Json Test\'s', (t) => {
  const localizator = abjson;
  t.test('should be exist', (q) => {
    q.equal(localizator, abjson);
    q.end();
  });
});

