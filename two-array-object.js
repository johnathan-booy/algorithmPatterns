/**
 * twoArrayObject combines an array of keys with an array of values into a single object.
 * If there are more keys than values, the remaining keys are assigned a value of null
 * If there are more values than kesy, the remaining values are ignored
 *
 * @param {Array} keys - this array is turned into the keys
 * @param {Array} values - this array is turned into the values
 * @returns {Object} - result of combining the keys and values
 *
 * @example
 * twoArrayObject(['a', 'b', 'c'], [1, 2]) // {'a': 1, 'b': 2, 'c': null}
 *
 * twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
 *
 * twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}
 *
 */
function twoArrayObject(keys, values = []) {
	// Create the combination object
	const obj = {};

	// Loop over the keys array
	for (let i = 0; i < keys.length; i++) {
		// If the index is out of bounds for the values array, set the value to null
		obj[keys[i]] = i < values.length ? values[i] : null;
	}
	// Return the object
	return obj;
}
