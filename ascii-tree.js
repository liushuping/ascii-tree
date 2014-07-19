var levels = [];
var freetree = require('freetree');
var chars = [String.fromCharCode(9500), String.fromCharCode(9472), String.fromCharCode(9492)]; 

function generate(str) {
    var tree = freetree.parse(str);
    return _generate(tree, true);
}

function compose(end, value) {
    var c = end ? chars[2] : chars[0];
    return '\r\n' + c + chars[1] + ' ' + value;
}

function _generate(tree, end) {
    var i, last;
    var result = '';

    if (tree.level == 0) {
        result = tree.value;
    } else {
        result += compose(end, tree.value);
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
