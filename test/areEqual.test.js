import areEqual from '../areEqual.js';

function test(expectation, a, b, name) {
	if (!name) {
		test.unnamedCounter = (test.unnamedCounter || 0) + 1;
		name = `Unnamed #${test.unnamedCounter}`;
	}
	it(name, function() {
		let res;
		res = areEqual(a, b);
		if (res != expectation) {
			throw new Error(`Wrong result for {a == b}: ${res} (${expectation} expected)`);
		}
		if (areEqual(b, a) != expectation) {
			throw new Error(`Wrong result for {b == a}: ${res} (${expectation} expected)`);
		}
	});
}

describe(`helper function areEqual`, () => {
	test(true, undefined, undefined, `undefined == undefined`);
	test(true, null, null, `null == null`);
	test(false, NaN, NaN, `NaN != NaN`);
	test(true, Infinity, Infinity, `Infinity == Infinity`);
	test(false, -1/0, +1/0, `-Infinity != +Infinity`);
	test(true, '', '', `empty string == empty string`);
	test(true, 'one', 'one', `string == similar string`);
	test(false, 'one', 'another', `string != another string`);
	test(false, null, false, `null != false`);
	test(false, '', false, `empty string != false`);
	test(false, '', 0, `empty string != 0`);
	test(false, '', null, `empty string != null`);
	test(false, '', new String(''), `empty string != empty String{''}`);
	test(true, 12341234123412341234n, 12341234123412341234n, `bigint == similar bigint`);
	test(true, new Boolean(false), new Boolean(false), `Boolean{false} == Boolean{false}`);
	test(false, new Boolean(false), new Boolean(true), `Boolean{false} != Boolean{true}`);
	test(true, new Number(1), new Number(1), `Number{1} == Number{1}`);
	test(false, new Number(1), new Number(2), `Number{1} != Number{2}`);
	test(false, new Number(NaN), new Number(NaN), `Number{NaN} != Number{NaN}`);
	test(true, new String('one'), new String('one'), `String{'one'} == String{'one'}`);
	test(false, new String('one'), new String('two'), `String{'one'} != String{'two'}`);
	test(true, process, process, `object(process) == same object(process)`);
	test(true, Object, Object, `constructor function(Object) == same function(Object)`);
	test(false, [], null, `empty array != null`);
	test(true, [], [], `empty array == another empty array`);
	test(true, [1, 2], [1, 2], `array with values == another array with similar values`);
	test(false, [1, 2], [1, 3], `array with values != another array with another values`);
	test(false, [1, 2], [1, 2, 3], `array with values != another array of different length`);
	test(false, [], {}, `empty array != empty object`);
	test(true, {}, {}, `empty object == another empty object`);
	test(true, {
		'undefined': undefined,
		'null': null,
		num1: 1,
		num2: 2,
		'+Infinity': +Infinity,
		'-Infinity': -Infinity,
		strOne: 'one',
		strOne: 'one',
		strEmpty: '',
		bigint: 12341234123412341234n,
		BooleanFalse: new Boolean(false),
		BooleanTrue: new Boolean(true),
		NumberOne: new Number(1),
		NumberTwo: new Number(2),
		StringOne: new String('one'),
		StringTwo: new String('two'),
		process: process,
		funcConstructor: Object,
		func: Object.values,
		arrEmpty: [],
		arr: [true, 2, '3', new Number(4), new String('5'), [6]],
		objEmpty: {},
		obj: {
			bool1: true,
			num2: 2,
			str3: '3',
			Number4: new Number(4),
			String5: new String('5'),
			arr6: [6],
		},
	}, {
		'undefined': undefined,
		'null': null,
		num1: 1,
		num2: 2,
		'+Infinity': +Infinity,
		'-Infinity': -Infinity,
		strOne: 'one',
		strOne: 'one',
		strEmpty: '',
		bigint: 12341234123412341234n,
		BooleanFalse: new Boolean(false),
		BooleanTrue: new Boolean(true),
		NumberOne: new Number(1),
		NumberTwo: new Number(2),
		StringOne: new String('one'),
		StringTwo: new String('two'),
		process: process,
		funcConstructor: Object,
		func: Object.values,
		arrEmpty: [],
		arr: [true, 2, '3', new Number(4), new String('5'), [6]],
		objEmpty: {},
		obj: {
			bool1: true,
			num2: 2,
			str3: '3',
			Number4: new Number(4),
			String5: new String('5'),
			arr6: [6],
		},
	}, `complex object with lots of values == another complex object with similar values`);
});
