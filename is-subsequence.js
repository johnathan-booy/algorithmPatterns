/**
 * isSubsequence determines whether a substring appears inside another string. The letters of the substring need to appear in the right order, but they can be seperated
 *
 * @param {String} substring
 * @param {String} string
 * @returns {Boolean} true if substring appears in string
 *
 * @example
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 */
function isSubsequence(substring, string) {
	// Keep count of position in substring and string
	let substringIdx = 0;
	let stringIdx = 0;

	// Loop till one of the positions is out of range
	while (substringIdx < substring.length && stringIdx < string.length) {
		// If we find a match, move to the next character in substring
		if (string[stringIdx] === substring[substringIdx]) substringIdx++;
		stringIdx++;
	}

	// If we've reached the end of the substring, it means that the substring exists in the string
	return substringIdx === substring.length;
}
