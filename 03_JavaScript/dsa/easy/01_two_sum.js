// https://leetcode.com/problems/two-sum/description

// brute force
function findTwoSum(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}
	return "No";
}

// hashmap
function findTwoSum2(arr, target) {
	const mpp = new Map();

	for (let i = 0; i < arr.length; i++) {
		const diff = target - arr[i];
		if (mpp.has(diff)) {
			return [mpp.get(diff), i];
		}
		mpp.set(arr[i], i);
	}
	return "No";
}

console.log(findTwoSum([2, 5, 7, 11, 15], 9));
console.log(findTwoSum2([2, 5, 7, 11, 15], 9));
