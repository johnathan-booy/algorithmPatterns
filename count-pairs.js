/**
 * countPairs should count the number of unique pairs in an array that some to a target value
 *
 * @param {Numbers[]} arr - array of integers, without any duplicates
 * @param {Number} target - target sum
 * @returns {Number}
 *
 * @example
 * countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
 * countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
 * countPairs([4,6,2,7], 10) // 1 (4,6)
 * countPairs([1,2,3,4,5], 10) // 0
 *
 */
function countPairs(arr, target) {
	let count = 0;
	const seen = new Set();

	// Loop over the array
	for (let num of arr) {
		const otherNum = target - num;

		// If we've seen otherNum, remove it from seen and increment count
		if (seen.has(otherNum)) {
			seen.delete(otherNum);
			count++;
		}
		// Else add number to seen set
		else {
			seen.add(num);
		}
	}

	return count;
}
