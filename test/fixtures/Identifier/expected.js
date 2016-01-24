'use strict';
assert(assert._expr(assert._capt(falsyStr, 'arguments/0'), {
    content: 'assert(falsyStr)',
    filepath: 'path/to/some_test.js',
    line: 3
}));
assert(assert._expr(assert._capt(falsyStr, 'arguments/0'), {
    content: 'assert(falsyStr, messageStr)',
    filepath: 'path/to/some_test.js',
    line: 5
}), messageStr);
assert.equal(assert._expr(assert._capt(str, 'arguments/0'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'path/to/some_test.js',
    line: 7
}), assert._expr(assert._capt(anotherStr, 'arguments/1'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'path/to/some_test.js',
    line: 7
}));
assert.equal(assert._expr(assert._capt(str, 'arguments/0'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'path/to/some_test.js',
    line: 9
}), assert._expr(assert._capt(anotherStr, 'arguments/1'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'path/to/some_test.js',
    line: 9
}));
assert.equal(assert._expr(assert._capt(str, 'arguments/0'), {
    content: 'assert.equal(str, anotherStr, messageStr)',
    filepath: 'path/to/some_test.js',
    line: 14
}), assert._expr(assert._capt(anotherStr, 'arguments/1'), {
    content: 'assert.equal(str, anotherStr, messageStr)',
    filepath: 'path/to/some_test.js',
    line: 14
}), messageStr);
assert.equal(assert._expr(assert._capt(str, 'arguments/0'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'path/to/some_test.js',
    line: 16
}), assert._expr(assert._capt(anotherStr, 'arguments/1'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'path/to/some_test.js',
    line: 16
}));
assert.equal(assert._expr(assert._capt(str, 'arguments/0'), {
    content: 'assert.equal(str, yetAnotherStr)',
    filepath: 'path/to/some_test.js',
    line: 21
}), assert._expr(assert._capt(yetAnotherStr, 'arguments/1'), {
    content: 'assert.equal(str, yetAnotherStr)',
    filepath: 'path/to/some_test.js',
    line: 21
}));
