// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function fingLongestSubstring(str = "") {
	let subString = "";

	for (let i = 0; i < str.length; i++) {
		let seen = new Set();
		let currentString = "";

		for (let j = i; j < str.length; j++) {
			if (seen.has(arr[j])) break;
			seen.add(arr[j]);
			currentString += arr[j];
		}

		if (subString.length < currentString.length) {
			subString = currentString;
		}
	}
	return subString.length;
}

console.log(fingLongestSubstring("cadbzabcdef"));
