// Very simple boot file just to load and configure RequireJS

var requirejs = require('requirejs');
requirejs.config({
	nodeRequire: require
});

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

global.define = define

// This should load server.coffee, but fails because RequireJS is looking for JS file
// After transpiling manually, it will work
requirejs("./server").listen(1234, function() {
	console.log('Server is up and running');
});

// Requiring coffee-script module allows to core `require` function to look for coffee
// files, however RequireJS is not cabable of doing that.