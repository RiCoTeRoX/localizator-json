/* @flow */
'use strict';
require('es6-promise').polyfill(); //eslint-disable-line
import 'isomorphic-fetch'; //eslint-disable-line
import 'jsdom-global/register';
import tape from 'tape-catch';
import _test from 'tape-promise';
import sinon from 'sinon';
import nock from 'nock';
import Abjson from '../src/main';

const test = _test(tape);

const jsonResponse = {
  google: 'http://www.google.com',
  points: 'you points: %1 - your position: %2',
  greet: 'hello %1',
  confirm: 'The color you selected is %1. Wanna replace %2 with %1?'
};

test('Localizator Json Test\'s', (t) => {
  t.test('Should be exist', (q) => {
    const localizator = new Abjson();
    q.ok(localizator !== undefined);
    q.end();
  });

  t.test('Should has a load method', (q) => {
    const localizator = new Abjson();
    q.equal(typeof localizator.load, 'function');
    q.end();
  });

  t.test('Should throw an error if nothing passed', (q) => {
    const localizator = new Abjson();
    q.throws(() => {
      localizator.load();
    }, /Must provider good parameters/);
    q.end();
  });

  t.test('Should load a json', (q) => {
    const localizator = new Abjson();
    nock('http://localhost/localizator-json/test')
      .get('/en.json')
      .reply(200, jsonResponse);

    return localizator.load('en.json', (rsp) => {
      q.equal(localizator.memorySource, rsp);
      q.end();
    });
  });

  t.test('Must have a get method', (q) => {
    const localizator = new Abjson();
    const spy = sinon.spy(localizator, 'get');
    nock('http://localhost/localizator-json/test')
      .get('/en.json')
      .reply(200, jsonResponse);
    return localizator.load('en.json', () => {
      q.ok(localizator.get);
      localizator.get('google');
      q.ok(spy.calledOnce);
      q.equal(localizator.get('google'), 'http://www.google.com');
      q.end();
    });
  });

});
