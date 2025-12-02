// https://leetcode.com/problems/valid-parentheses/description/

// stack
function isValid(str) {
	const stack = [];
	const obj = {
		"}": "{",
		")": "(",
		"]": "[",
	};

	for (const ch of str) {
		if (ch === "{" || ch === "(" || ch === "[") {
			stack.push(ch);
		} else {
			const last = stack.pop();
			const expected = obj[ch];
			if (last !== expected) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

console.log(isValid("[({})]"));
