/**
 * Checks if there are any pairs of values in a sorted array that have an average equal to the target.
 *
 * @param {number[]} sortedArray - A sorted array of numbers to search for pairs.
 * @param {number} target - The target average value.
 * @returns {boolean} - Returns true if a pair with the right average is found, false otherwise.
 *
 * @example
 * averagePair([1, 2, 3], 2.5); // true
 * averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
 * averagePair([], 4); // false
 */
function averagePair(sortedArray, target) {
	let left = 0;
	let right = sortedArray.length - 1;

	while (left < right) {
		const avg = (sortedArray[left] + sortedArray[right]) / 2;

		if (avg === target) {
			return true;
		} else if (avg < target) {
			left++;
		} else {
			right--;
		}
	}

	return false;
}
