var assert = require('assert');
var ascii-tree = require('../ascii-tree');

describe('#generate', function() {
    it('should parse a single root tree', function() {
        var tree = '#root';
        var result = ascii-tree.generate(tree);
        assert.ok(result == 'root');
    })
})
