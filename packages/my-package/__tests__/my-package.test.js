'use strict';

const myPackage = require('..');
const assert = require('assert').strict;

assert.strictEqual(myPackage(), 'Hello from myPackage');
console.info('myPackage tests passed');
