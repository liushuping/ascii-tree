var assert = require('assert');
var asciitree = require('../ascii-tree');
var c1 = String.fromCharCode(9500);
var c2 = String.fromCharCode(9472);
var c3 = String.fromCharCode(9492);

var inputs = [
    '#root',
    '#root\r\n##level1_1\r\n##level1_2\r\n##level1_3',
    //'#root\r\n##level1_1\r\n###level2_1\r\n##level1_2'
];

var outputs = [
    'root',
    'root\r\n' + c1 + c2 + ' level1_1\r\n' + c1 + c2 + ' level1_2\r\n' + c3 + c2 + ' level1_3',
    //'root'
];

describe('#generate', function() {
    it('should parse trees for all inputs', function() {
        inputs.forEach(function(input, index) {
            var result = asciitree.generate(input);
            console.log(result);
            assert.ok(result == outputs[index]);
        });
    });
});
