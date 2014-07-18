var levels = [];
var freetree = require('freetree');
var chars = [String.fromCharCode(9500), String.fromCharCode(9472), String.fromCharCode(9492)]; 

function generate(str) {
    var tree = freetree.parse(str);
    return _generate(tree, true);
}

function _generate(tree) {
    var result = '';
    var leadingChars = '';

    if (tree.level == 0) {
	result = tree.value;
    } else {
	    for (i = 1; i <= tree.level; ++i) {
		if (levels[i]) {
		    leadingChars += '   ';
		} else {
		    leadingChars += chars[0] + chars[1] + ' ';
		}
	    }

	    if (end) {
		result += '\r\n' + leadingChars + chars[2] + chars[1] + ' ' + tree.value;
	    } else {
		result += '\r\n' + leadingChars + chars[0] + chars[1] + ' ' + tree.value;
	    }
    }

    if (tree.nodes) {
	    for (i = 0; i < tree.nodes.length - 1; ++i) {
		result += '\r\n' + _generate(tree.nodes[i]);
	    }

	    if (tree.nodes.length > 0) {
	        levels[tree.nodes[tree.length - 1].level] = true;
		result += '\r\n' + _generate(tree.nodes[tree.length - 1]);
	    }
    }

    return result;
}

exports.generate = generate;
