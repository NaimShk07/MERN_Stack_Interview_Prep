// https://leetcode.com/problems/merge-sorted-array/description/

function mergeArray(nums1, m, nums2, n) {
	for (let i = nums1.length - 1; i >= 0; i--) {
		// all element of num2 are in num1 so we can stop
		if (n === 0) break;

		// If nums1 still has elements AND nums1[m-1] is bigger OR nums1 is exhausted
		if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
			nums1[i] = nums1[m - 1];
			m--;
		} else {
			nums1[i] = nums2[n - 1];
			n--;
		}
	}
	return nums1;
}

console.log(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
