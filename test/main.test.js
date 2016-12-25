/* @flow */
import tape from 'tape-catch';
import abjson from '../src/main';

tape('Localizator Json Test\'s', (t) => {
  const localizator = abjson;
  t.test('Should be exist', (q) => {
    q.equal(localizator, abjson);
    q.end();
  });

  t.test('Should has a load method', (q) => {
    q.equal(typeof localizator.load, 'function');
    q.end();
  });

  t.test('Should only accept 1 string parameter', (q) => {
    q.throws(() => localizator.load(1), Error);
    q.end();
  });

  t.test('Should paramater equal to source', (q) => {
    const source = 'algo.json';
    localizator.load(source);
    q.equal(source, localizator.source);
    q.end();
  });
});
