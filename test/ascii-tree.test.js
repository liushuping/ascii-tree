var assert = require('assert');
var asciitree = require('../ascii-tree');

describe('#generate', function() {
    it('should parse a single root tree', function() {
        var tree = '#root';
        var result = asciitree.generate(tree);
	console.log(result);
        assert.ok(result == 'root');
    });
console.log('>>>>>>>>>>>>>>>>>>>');
    it('should parse 2 level tree', function() {
 	var tree = '#root';
	var result = asciitree.generate(tree);
	console.log(result);
	assert.ok(result == 'root');
    });
});
