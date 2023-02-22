/**
 * sameFrequency checks whether two numbers have the same frequency of digits
 *
 * @param {Number} num1 - first number to compare
 * @param {Number} num2 - second number to compare
 * @returns {Boolean} - true if the numbers contain the exact same digits
 *
 * @example
 *
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
	// Convert numbers to strings
	const string1 = num1.toString();
	const string2 = num2.toString();

	// False if numbers don't have the same length
	if (string1.length !== string2.length) {
		return false;
	}

	// Map the numbers to frequency objects
	const digitCount1 = {};
	const digitCount2 = {};
	for (const char of string1) {
		digitCount1[char] = (digitCount1[char] || 0) + 1;
	}
	for (const char of string2) {
		digitCount2[char] = (digitCount2[char] || 0) + 1;
	}

	// Compare the frequencies of each digit
	for (const digit in digitCount1) {
		if (!digitCount1.hasOwnProperty(digit)) {
			continue;
		}
		if (digitCount1[digit] !== digitCount2[digit]) {
			return false;
		}
	}

	return true;
}
