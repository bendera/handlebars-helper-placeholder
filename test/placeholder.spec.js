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

});
