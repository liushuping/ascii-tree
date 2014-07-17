var levels = [];
var freetree = require('freetree');
var chars = [String.fromCharCode(9500), String.fromCharCode(9472), String.fromCharCode(9492)]; 

function generate(str) {
    var tree = freetree.parse(str);
    return generate(tree, true);
}

function generate(tree, end) {
    var result = '';
    var leadingChars = '';

    if (tree.level == 0) {
        return tree.value;
    }

    for (i = 1; i <= level - 1; ++i) {
        if (levels[i]) {
            leadingChars += '   ';
        } else {
            leadingChars += chars[0] + chars[1] + ' ';
        }
    }

    if (end) {
        levels[tree.level] = true;
        result += chars[2] + chars[1] + ' ' + tree.value;
    } else {
        result += chars[0] + chars[1] + ' ' + tree.value;
    }

    for (i = 0; i < tree.length - 1; ++i) {
        result += generate(tree.nodes[i], false);
    }

    if (tree.length > 0) {
        result += generate(tree.nodes[tree.length - 1], true);
    }

    return result;
}

exports.generate = generate;
