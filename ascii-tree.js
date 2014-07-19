var levels = [];
var freetree = require('freetree');
var chars = [String.fromCharCode(9500), String.fromCharCode(9472), String.fromCharCode(9492)]; 

function generate(str) {
    var tree = freetree.parse(str);
    return _generate(tree, true);
}

function compose(tree, end) {
    if (tree.level == 0) {
        return tree.value;
    } else {
        var c = end ? chars[2] : chars[0];
        return '\r\n' + c + chars[1] + ' ' + tree.value;
    }
}

function _generate(tree, end) {
    var last;
    var result = compose(tree, end);

    if (tree.nodes) {
        last = tree.nodes.length - 1;
        tree.nodes.forEach(function(node, index) {
            result +=  _generate(node, index == last);
        });
    }

    return result;
}

exports.generate = generate;
