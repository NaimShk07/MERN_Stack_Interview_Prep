// https://leetcode.com/problems/maximum-subarray/description/

function findMaxArrSum(arr) {
	let total = arr[0];

	for (let i = 0; i < arr.length; i++) {
		let sum = arr[i];

		if (sum > total) total = sum;

		for (let j = i + 1; j < arr.length; j++) {
			sum += arr[j];
			if (sum > total) {
				total = sum;
			}
		}
	}
	return total;
}

console.log(findMaxArrSum([-2, -3, 4, -1, -2, 1, 5, -3]));
