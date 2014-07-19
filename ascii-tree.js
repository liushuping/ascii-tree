var levels = [];
var freetree = require('freetree');
var chars = [String.fromCharCode(9500), String.fromCharCode(9472), String.fromCharCode(9492)]; 

function generate(str) {
    var tree = freetree.parse(str);
    return _generate(tree, true);
}

function _generate(tree, end) {
    var last;
    var result = '';
    var leadingChars = '';

    if (tree.level == 0) {
        result = tree.value;
    } else {
        if (end) {
            result += '\r\n' + leadingChars + chars[2] + chars[1] + ' ' + tree.value;
        } else {
            result += '\r\n' + leadingChars + chars[0] + chars[1] + ' ' + tree.value;
        }
    }

    if (tree.nodes) {
        last = tree.nodes.length - 1;
        tree.nodes.forEach(function(node, index) {
            result +=  _generate(node, index == last);
        });
    }

    return result;
}

exports.generate = generate;
