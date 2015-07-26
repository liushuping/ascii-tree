#!/usr/bin/env node

var freetree = require('freetree');
var c0 = String.fromCharCode(9500);
var c1 = String.fromCharCode(9472);
var c2 = String.fromCharCode(9492);
var c3 = String.fromCharCode(9474);

function generate(str) {
    var levels = [];
    var settings = {
        leadingChar: str[0]
    };
    var tree = freetree.parse(str, settings);
    return _generate(tree, true, levels);
}

function compose(tree, end, levels) {
    var i, ret = '\r\n';
    var c = end ? c2 : c0;

    if (tree.level == 0) {
        return tree.value;
    }

    for (i = 1; i < tree.level; ++i) {
        ret += levels[i] ? ' ' : c3
        ret += '  ';
    }

    return ret + c + c1 + ' ' + tree.value;
}

function _generate(tree, end, levels) {
    var last;
    var result = compose(tree, end, levels);

    if (tree.nodes) {
        last = tree.nodes.length - 1;
        tree.nodes.forEach(function(subTree, index) {
            levels[subTree.level] = index == last;
            result += _generate(subTree, index == last, levels);
        });
    }

    return result;
}

function read() {
    var lines = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function() {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            lines += chunk;
        }
    })
        .on('end', function() {
            process.stdout.write(generate(lines.trim()));
        })
}

exports.generate = generate;

if (require.main === module) {
    read();
}
