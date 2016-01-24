'use strict';
assert(assert._expr(assert._capt({ [assert._capt(num, 'arguments/0/properties/0/key')]: assert._capt(foo, 'arguments/0/properties/0/value') }, 'arguments/0'), {
    content: 'assert({ [num]: foo })',
    filepath: 'path/to/some_test.js',
    line: 3
}));
assert(assert._expr(assert._capt({ [assert._capt('prop_' + assert._capt((() => bar())(), 'arguments/0/properties/0/key/right'), 'arguments/0/properties/0/key')]: 42 }, 'arguments/0'), {
    content: 'assert({ [\'prop_\' + (() => bar())()]: 42 })',
    filepath: 'path/to/some_test.js',
    line: 5
}));
assert(assert._expr(assert._capt({ [assert._capt(`prop_${ assert._capt(generate(assert._capt(seed, 'arguments/0/properties/0/key/expressions/0/arguments/0')), 'arguments/0/properties/0/key/expressions/0') }`, 'arguments/0/properties/0/key')]: assert._capt(foo, 'arguments/0/properties/0/value') }, 'arguments/0'), {
    content: 'assert({ [`prop_${ generate(seed) }`]: foo })',
    filepath: 'path/to/some_test.js',
    line: 7
}));
assert(assert._expr(assert._capt({ foo }, 'arguments/0'), {
    content: 'assert({ foo })',
    filepath: 'path/to/some_test.js',
    line: 9
}));
assert(assert._expr(assert._capt({
    foo,
    bar: assert._capt(baz, 'arguments/0/properties/1/value')
}, 'arguments/0'), {
    content: 'assert({foo,bar: baz})',
    filepath: 'path/to/some_test.js',
    line: 11
}));
