// https://leetcode.com/problems/missing-number/description/

function findMissing(arr) {
	arr.sort((a, b) => a - b);

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] > 1) {
			return arr[i - 1] + 1;
		}
	}
	return null;
}

console.log(findMissing([5, 1, 2, 3]));
