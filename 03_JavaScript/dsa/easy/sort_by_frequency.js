function sortByFrequecy(arr) {
	const obj = {};

	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = (obj[arr[i]] || 0) + 1;
	}

	arr.sort((a, b) => {
		if (obj[a] === obj[b]) {
			return a - b; // If frequency same, sort by value
		}
		return obj[a] - obj[b]; // Sort by frequency
	});

	return arr;
}

console.log(sortByFrequecy([1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 3, 3, 3, 3]));
