ascii-tree
==========

A node module for generating a text tree in ASCII

Editing an ASCII tree manually is not easy, the [freetree](https://github.com/liushuping/freetree) module provides an easy way for creating in-memory tree data structure from simple bullet items. This module leverages [freetree](https://github.com/liushuping/freetree) and outputs formatted tree in ascii characters.

## Code Example
Prepare an input file (input.txt) using bullets representing a tree e.g.
```
#root node
##node1
###node11
##node2
```
and then process the file content with ascii-tree to generate the ascii tree.
```
var fs = require('fs');
var asciitree = require('ascii-tree');
var str = fs.readFileSync('input.txt', 'utf8);
var tree = asciitree.generate(str);
fs.writeFile('output.txt', tree, 'utf8');
```
Then the output.txt will have below contents
```
root node

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
