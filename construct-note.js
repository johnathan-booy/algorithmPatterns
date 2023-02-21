/**
 * constructNode determines whether a message can be constructed with a specific selection of letters
 *
 * Each letter can only be used once.
 *
 * @param {String} message
 * @param {String} letters
 * @return {Boolean}
 *
 * @example
 * constructNote('aa', 'abc') // false
 * constructNote('abc', 'dcba') // true
 * constructNote('aabbcc', 'bcabcaddff') // true
 */

function constructNote(message, letters) {
	// get the frequency of each character for both strings
	const messageFreq = charFreq(message);
	const lettersFreq = charFreq(letters);

	// check that all characters in message are available in letters
	for (let char in messageFreq) {
		if (!lettersFreq[char]) return false;
		if (messageFreq[char] > lettersFreq[char]) return false;
	}

	return true;
}

function charFreq(str) {
	// Create an object to keep track of the frequency of each character
	const frequency = {};
	for (let char of str) {
		frequency[char] = frequency[char] + 1 || 1;
	}
	return frequency;
}
