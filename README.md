ascii-tree
==========

A node module for generating a text tree in ASCII

[![build status](https://travis-ci.org/liushuping/ascii-tree.svg)](https://travis-ci.org/liushuping/ascii-tree.svg)

This module generates an ascii tree representation for a given string bullet list.

## Generate for a given string bullet list.
```javascript
var asciitree = require('ascii-tree');
var input = '#root node\r\n##node1\r\n###\r\nnode1\r\n##node2';
var tree = asciitree.generate(str);
```
the output string `tree` will be in below representation
```
root node
├─ node1
│  └─ node11
└─ node2
```
The leading character is not necessary to be `#`, but can be any character, this is helpful to resolve the confliction between the leading character and actual content character.
```javascript
var asciitree = require('ascii-tree');
var input = '*root node\r\n**node1\r\n***\r\nnode1\r\n**node2';
var tree = asciitree.generate(str);
```
The line break charachters `\r\n` are required. 

## Generate from an input file
First prepare an input file using bullets representating a tree
```
#root node
##node1
###node11
##node2
```
again, the leading character is not necessary to be `#` but can be any character. Then process the file content with ascii-tree to generate the ascii tree
```javascript
var fs = require('fs');
var asciitree = require('ascii-tree');
var str = fs.readFileSync('input.txt', 'utf8');
var tree = asciitree.generate(str);
fs.writeFile('output.txt', tree, 'utf8');
```

## Test
Make sure `mocha` is installed globally
```
npm install mocha -g
```
Run `npm test` to run unit test
## Dependencies
ascii-tree uses [freetree](https://github.com/liushuping/freetree) for creating tree data structure from inputting text
## License
MIT