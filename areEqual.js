export default function areEqual(a, b) {
	if (a === b) {
		return true;
	}
	else if (typeof a !== typeof b) {
		return false;
	}
	else if (a == null || b == null) {
		return a === b;
	}
	else if (typeof a === 'boolean') {
		return a === b;
	}
	else if (typeof a === 'number') {
		return a === b;
	}
	else if (typeof a === 'string') {
		return a === b;
	}
	else if (typeof a === 'bigint') {
		return a === b;
	}
	else if (typeof a === 'function') {
		return a === b;
	}
	else if (typeof a !== 'object') {
		return a === b;
	}
	else if (a.constructor !== b.constructor) {
		return false;
	}
	else if (a instanceof Boolean && b instanceof Boolean) {
		return a.valueOf() === b.valueOf();
	}
	else if (a instanceof Number && b instanceof Number) {
		return a.valueOf() === b.valueOf();
	}
	else if (a instanceof String && b instanceof String) {
		return a.valueOf() === b.valueOf();
	}
	else if (a instanceof BigInt && b instanceof BigInt) {
		return a.valueOf() === b.valueOf();
	}
	else if (a instanceof Array && b instanceof Array) {
		if (a.length !== b.length) {
			return false;
		}
		for (const i in a) {
			if (!areEqual(a[i], b[i])) {
				return false;
			}
		}
		return true;
	}
	else {
		const checkedKeys = {};
		for (const k in a) {
			if (!areEqual(a[k], b[k])) {
				return false;
			}
			checkedKeys[k] = true;
		}
		for (const k in b) {
			if (checkedKeys[k]) {
				continue;
			}
			if (!areEqual(a[k], b[k])) {
				return false;
			}
		}
		return true;
	}
}
