'use strict';

const assert = require('assert');
const hbs = require('handlebars');
const placeholder = require('..');
const dataPrefix = 'data:image/svg+xml;charset&#x3D;UTF-8,' + '\n';
const fs = require('fs');

hbs.registerHelper('placeholder', placeholder);

describe('placeholder helper', function() {

  it('call without parameters', function(done) {
    fs.readFile('test/expected/default.svg', 'utf-8', function(err, data) {
      if(err){
        throw err;
      }
      const template = hbs.compile('{{placeholder}}');
      let expected = dataPrefix + data;

      assert.equal(expected, decodeURIComponent(template({})));
      done();
    });
  });

  it('specify size', function(done) {
    fs.readFile('test/expected/100x200.svg', 'utf-8', function(err, data) {
      if(err){
        throw err;
      }
      const template = hbs.compile('{{placeholder width="100" height="200"}}');
      let expected = dataPrefix + data;

      assert.equal(expected, decodeURIComponent(template({})));
      done();
    });
  });

  it('custom text', function(done) {
    fs.readFile('test/expected/custom-text.svg', 'utf-8', function(err, data) {
      if(err){
        throw err;
      }
      const template = hbs.compile('{{placeholder text="Custom text"}}');
      let expected = dataPrefix + data;

      assert.equal(expected, decodeURIComponent(template({})));
      done();
    });
  });

  it('percentage value', function(done) {
    fs.readFile('test/expected/percentage-value.svg', 'utf-8', function(err, data) {
      if(err){
        throw err;
      }
      const template = hbs.compile('{{placeholder width="25%" height="25%"}}');
      let expected = dataPrefix + data;

      assert.equal(expected, decodeURIComponent(template({})));
      done();
    });
  });

});
