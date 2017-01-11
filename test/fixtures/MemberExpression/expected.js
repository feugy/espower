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
        var capturedValues = this.captured;
        this.captured = [];
        return {
            powerAssertContext: {
                value: value,
                events: capturedValues
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
var _rec10 = new _PowerAssertRecorder1();
var _rec11 = new _PowerAssertRecorder1();
var _rec12 = new _PowerAssertRecorder1();
assert(_rec1._expr(_rec1._capt(_rec1._capt(foo, 'arguments/0/object').bar, 'arguments/0'), {
    content: 'assert(foo.bar)',
    filepath: 'path/to/some_test.js',
    line: 3
}));
assert(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(foo, 'arguments/0/object/object').bar, 'arguments/0/object').baz, 'arguments/0'), {
    content: 'assert(foo.bar.baz)',
    filepath: 'path/to/some_test.js',
    line: 5
}));
assert(_rec3._expr(_rec3._capt(_rec3._capt(foo, 'arguments/0/object')['bar'], 'arguments/0'), {
    content: 'assert(foo[\'bar\'])',
    filepath: 'path/to/some_test.js',
    line: 7
}));
assert(_rec4._expr(_rec4._capt(_rec4._capt(foo, 'arguments/0/object')[_rec4._capt(propName, 'arguments/0/property')], 'arguments/0'), {
    content: 'assert(foo[propName])',
    filepath: 'path/to/some_test.js',
    line: 9
}));
assert(_rec5._expr(_rec5._capt(_rec5._capt(foo, 'arguments/0/object')[_rec5._capt(propName, 'arguments/0/property')], 'arguments/0'), {
    content: 'assert(foo[propName])',
    filepath: 'path/to/some_test.js',
    line: 11
}));
assert(_rec6._expr(_rec6._capt(_rec6._capt(foo, 'arguments/0/object')[_rec6._capt(func(_rec6._capt(key, 'arguments/0/property/arguments/0')), 'arguments/0/property')], 'arguments/0'), {
    content: 'assert(foo[func(key)])',
    filepath: 'path/to/some_test.js',
    line: 13
}));
assert(_rec7._expr(_rec7._capt(_rec7._capt(_rec7._capt(_rec7._capt(foo, 'arguments/0/object/object/object')[_rec7._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[_rec7._capt(_rec7._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
    content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
    filepath: 'path/to/some_test.js',
    line: 15
}));
assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(foo, 'arguments/0/object/object/object')[_rec8._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[_rec8._capt(_rec8._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
    content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
    filepath: 'path/to/some_test.js',
    line: 17
}));
assert.equal(_rec9._expr(_rec9._capt(_rec9._capt(ary1, 'arguments/0/object').length, 'arguments/0'), {
    content: 'assert.equal(ary1.length, ary2.length)',
    filepath: 'path/to/some_test.js',
    line: 19
}), _rec10._expr(_rec10._capt(_rec10._capt(ary2, 'arguments/1/object').length, 'arguments/1'), {
    content: 'assert.equal(ary1.length, ary2.length)',
    filepath: 'path/to/some_test.js',
    line: 19
}));
assert.deepEqual(_rec11._expr(_rec11._capt(_rec11._capt(foo, 'arguments/0/object').propName, 'arguments/0'), {
    content: 'assert.deepEqual(foo.propName, foo[key])',
    filepath: 'path/to/some_test.js',
    line: 21
}), _rec12._expr(_rec12._capt(_rec12._capt(foo, 'arguments/1/object')[_rec12._capt(key, 'arguments/1/property')], 'arguments/1'), {
    content: 'assert.deepEqual(foo.propName, foo[key])',
    filepath: 'path/to/some_test.js',
    line: 21
}));
