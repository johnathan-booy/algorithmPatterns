/**
 * separatePositive divides an array of non-zero integers.
 * Negative numbers are moved to the right.
 * Positive numbers are moved to the left.
 *
 * @param {number[]} nums - array of non-zero integers
 * @returns {number[]} - array with negative numbers on the right, and positive numbers on the left
 *
 * @example
 * separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
 * separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
 * separatePositive([-5, 5]) // [5, -5]
 * separatePositive([1, 2, 3]) // [1, 2, 3]
 */
function separatePositive(arr) {
	// Keep track of first and last index
	let first = 0;
	let last = arr.length - 1;

	// Continue looping as long as first is less than last
	while (first < last) {
		if (arr[first] > 0) {
			first++;
		} else if (arr[last] < 0) {
			last--;
		} else {
			const temp = arr[first];
			arr[first] = arr[last];
			arr[last] = temp;
			first++;
			last--;
		}
	}

	// Return array
	return arr;
}
