'use strict';
assert(function (a, b) {
    return a + b;
});
assert(assert._expr(assert._capt(assert._capt(baz, 'arguments/0/left') === assert._capt(function (a, b) {
    return a + b;
}(assert._capt(foo, 'arguments/0/right/arguments/0'), assert._capt(bar, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(baz === function (a, b) {return a + b;}(foo, bar))',
    filepath: 'path/to/some_test.js',
    line: 5
}));
