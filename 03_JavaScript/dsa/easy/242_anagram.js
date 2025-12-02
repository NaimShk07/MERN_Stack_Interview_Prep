// https://leetcode.com/problems/valid-anagram/

function isAnagram(str1, str2) {
	return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function isAnagram2(str1, str2) {
	if (str1.length !== str2.length) return false;
	const count = {};

	for (const ch of str1) {
		count[ch] = (count[ch] || 0) + 1;
		// console.log(count);
	}

	console.log(count);
	for (const ch of str2) {
		if (!count[ch]) return false;
		count[ch]--;
	console.log(count);

	}
	return true;
}

console.log(isAnagram2("mnagram", "nagaram"));
