'use strict';
var _PowerAssertRecorder1 = function () {
    function PowerAssertRecorder() {
        this.captured = [];
    }
    PowerAssertRecorder.prototype._capt = function _capt(value, espath) {
        this.captured.push({
            value: value,
            espath: espath
        });
        return value;
    };
    PowerAssertRecorder.prototype._expr = function _expr(value, source) {
        return {
            powerAssertContext: {
                value: value,
                events: this.captured
            },
            source: source
        };
    };
    return PowerAssertRecorder;
}();
var _rec1 = new _PowerAssertRecorder1();
var _rec2 = new _PowerAssertRecorder1();
var _rec3 = new _PowerAssertRecorder1();
var _rec4 = new _PowerAssertRecorder1();
var _rec5 = new _PowerAssertRecorder1();
var _rec6 = new _PowerAssertRecorder1();
var _rec7 = new _PowerAssertRecorder1();
var _rec8 = new _PowerAssertRecorder1();
var _rec9 = new _PowerAssertRecorder1();
assert(_rec1._expr(_rec1._capt(4 !== 4, 'arguments/0'), {
    content: 'assert(4 !== 4)',
    filepath: 'path/to/some_test.js',
    line: 3
}));
assert(_rec2._expr(_rec2._capt(_rec2._capt(fuga, 'arguments/0/left') !== 4, 'arguments/0'), {
    content: 'assert(fuga !== 4)',
    filepath: 'path/to/some_test.js',
    line: 5
}));
assert(_rec3._expr(_rec3._capt(_rec3._capt(fuga, 'arguments/0/left') === _rec3._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(fuga === piyo)',
    filepath: 'path/to/some_test.js',
    line: 7
}));
assert(_rec4._expr(_rec4._capt(_rec4._capt(fuga, 'arguments/0/left') === _rec4._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(fuga === piyo)',
    filepath: 'path/to/some_test.js',
    line: 9
}));
assert(_rec5._expr(_rec5._capt(_rec5._capt(fuga, 'arguments/0/left') === _rec5._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(fuga === piyo)',
    filepath: 'path/to/some_test.js',
    line: 13
}));
assert(_rec6._expr(_rec6._capt(_rec6._capt(fuga, 'arguments/0/left') !== _rec6._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(fuga !== piyo)',
    filepath: 'path/to/some_test.js',
    line: 15
}));
assert.ok(_rec7._expr(_rec7._capt(_rec7._capt(hoge, 'arguments/0/left') === _rec7._capt(fuga, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert.ok(hoge === fuga, \'comment\')',
    filepath: 'path/to/some_test.js',
    line: 17
}), 'comment');
assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(ary1, 'arguments/0/left/object').length, 'arguments/0/left') === _rec8._capt(_rec8._capt(ary2, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(ary1.length === ary2.length)',
    filepath: 'path/to/some_test.js',
    line: 19
}));
assert(_rec9._expr(_rec9._capt(_rec9._capt(foo, 'arguments/0/left') instanceof _rec9._capt(Foo, 'arguments/0/right'), 'arguments/0'), {
    content: 'assert(foo instanceof Foo)',
    filepath: 'path/to/some_test.js',
    line: 21
}));
