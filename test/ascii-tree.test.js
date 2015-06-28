var assert = require('assert');
var asciitree = require('../ascii-tree');
var c1 = String.fromCharCode(9500);
var c2 = String.fromCharCode(9472);
var c3 = String.fromCharCode(9492);
var c4 = String.fromCharCode(9474);

var inputs = [
    '#root',
    '#root\r\n##level1_1\r\n##level1_2\r\n##level1_3',
    '#root\r\n##level1_1\r\n###level2_1\r\n##level1_2'
];

var inputs2 = [
    '*root',
    '*root\r\n**level1_1\r\n**level1_2\r\n**level1_3',
    '*root\r\n**level1_1\r\n***level2_1\r\n**level1_2'
];

var outputs = [
    'root',
    'root\r\n' + c1 + c2 + ' level1_1\r\n' + c1 + c2 + ' level1_2\r\n' + c3 + c2 + ' level1_3',
    'root\r\n' + c1 + c2 + ' level1_1\r\n' + c4 + '  ' + c3 + c2 + ' level2_1\r\n' + c3 + c2 + ' level1_2'
];

describe('#generate', function() {
    inputs.forEach(function(input, index) {
        it('should parse trees for all input ' + index, function() {
            var result = asciitree.generate(input);
            assert.ok(result.trim() == outputs[index].trim());
        });
    });

    inputs2.forEach(function(input, index) {
        it('should should accept different leading character when parsing trees for all input ' + index, function() {
            var result = asciitree.generate(input);
            assert.ok(result.trim() == outputs[index].trim());
        });
    });
});