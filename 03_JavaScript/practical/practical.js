// ! 🔢 1. Check if a string is a palindrome

// function checkPalindrome(str) {
// 	const newStr = str.split("").reverse().join("");
// 	return str == newStr;
// }

// console.log(checkPalindrome("madam"));

// ! 🧮 2. Generate Fibonacci series up to N terms

// 0 1 1 2 3 5

// function fibonacci(length) {
// 	const arr = [0, 1];
// 	for (let i = 2; i < length; i++) {
// 		arr.push(arr[i - 1] + arr[i - 2]);
// 	}
// 	return arr;
// }
// console.log(fibonacci(6));

// ! 🔁 3. Reverse a string

// function reverseString(str) {
// 	return str.split("").reverse().join("");
// }
// console.log(reverseString("helloworld"));

// ! 🧠 4. Find the factorial of a number

// function findFactorial(number) {
// 	let factorial = 1;
// 	for (let i = 2; i <= number; i++) {
// 		factorial *= i;
// 	}
// 	return factorial;
// }
// console.log(findFactorial(5));

// ! 🔍 5. Find the second largest number in an array

// function findSecondHighest(arr) {
// 	const uniqueArr = [...new Set(arr)];
// 	uniqueArr.sort((a, b) => b - a); // descending
// 	return uniqueArr[1];
// }
// console.log(findSecondHighest([1, 2, 33, 2, 4, 99]));

// ! 🧹 6. Remove duplicates from an array

// function removeDuplicate(arr) {
// 	const newArr = [];
// 	arr.forEach((element) => {
// 		if (!newArr.includes(element)) {
// 			newArr.push(element);
// 		}
// 	});
// 	return newArr;
// }
// console.log(removeDuplicate([1, 2, 3, 3, 3]));

// ! 🧠 7. Check if a number is prime

// function checkPrime(number) {
// 	if (number == 1) return false;
// 	let isPrime = true;
// 	for (let i = 2; i < number; i++) {
// 		if (number % i == 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	return isPrime;
// }
// console.log(checkPrime(11));

// ! 🔢 8. Count vowels in a string

// function countVowel(str) {
// 	let count = 0;
// 	let vowel = "aeiou";
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase();
// 		if (vowel.includes(char)) {
// 			count++;
// 		}
// 	}
// 	return count;
// }
// console.log(countVowel("aeiou"));

// ! ⬆️ 9. Sort an array in ascending order (without sort())

// function sortAsc(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = 0; j < arr.length - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let temp;
// 				temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// }
// console.log(sortAsc([1, 26, 4, 5, 2, 9, 8]));

// ! 🕳️ 10. Find missing number in an array of 1 to N
// function findMissing(arr) {
// 	const min = Math.min(...arr);
// 	const max = Math.max(...arr);
// 	const numberSet = new Set(arr);
// 	const missing = [];
// 	for (let i = min; i < max; i++) {
// 		if (!numberSet.has(i)) {
// 			missing.push(i);
// 		}
// 	}
// 	return missing;
// }
// console.log(findMissing([1, 2, 5, 6, 8, 3, 20, 10]));

// ! 11. Check if two strings are anagrams

// ! 12. Find the GCD of two numbers

// ! 13. Find the longest word in a sentence

// ! 14. Flatten a nested array

// function flattenArr(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(flattenArr(arr[i]));
//         }else{
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(flattenArr([1, [2, [3, 4]], 5, [6]] ));

// ! 15. Find all pairs in an array that sum to a target

// ! 16. Capitalize first letter of each word in a sentence

// ! 17. Count character frequency in a string

// ! 18. Move all zeros to the end of the array

// ! 19. Check if an array is sorted

// ! 20. Convert Roman numerals to integers

// ! 21. Data transformation

// let input = [
// 	{ key: "sample1", data: "data1" },
// 	{ key: "sample3", data: "data4" },
// 	{ key: "sample3", data: "data5" },
// 	{ key: "sample2", data: "data2" },
// 	{ key: "sample2", data: "data3" },
// 	{ key: "sample3", data: "data1" },
// ];
// let output = {
// 	sample1: [{ key: "sample1", data: "data1" }],
// 	sample2: [
// 		{ key: "sample2", data: "data2" },
// 		{ key: "sample2", data: "data3" },
// 	],
// 	sample3: [
// 		{ key: "sample3", data: "data4" },
// 		{ key: "sample3", data: "data5" },
// 		{ key: "sample3", data: "data1" },
// 	],
// };
// let obj = {};

// input.forEach((value) => {
// 	if (!obj.hasOwnProperty(value.key)) {
// 		obj[value.key] = [];
// 	}
// 	obj[value.key].push(value);
// });

// ! 22. Memoize Function

// const map = new Map();

// function memoizeOne(func) {
// 	function temp(...args) {
// 		const key = args.join("-"); // '1-2'

// 		if (map.has(key)) {
// 			console.log("getting from cache");
// 			return map.get(key);
// 		}

// 		const result = func(...args);
// 		map.set(key, result);
// 		return result;
// 	}
// 	return temp;
// }

// const add = (a, b) => a + b;

// const memoizeAdd = memoizeOne(add);

// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(2, 2));
// console.log(memoizeAdd(2, 2));
// console.log(memoizeAdd(1, 2));

// ! 23. Flatten the array

// function flattenArr(a) {
// 	let result = [];
// 	a.forEach((value) => {
// 		if (Array.isArray(value)) {
// 			result = result.concat(flattenArr(value));
// 		} else {
// 			result.push(value);
// 		}
// 	});
// 	return result;
// }

// const arr = [1, 2, 3, [4, [5, 6]], 7, 8];
// console.log(flattenArr(arr));

// ! 24. Write a throttling fuction
// ! 25. Write a debouncing fuction
// ! 26. Find the length of the longest unique substring (no repeating characters)
// ! 27. Group items in an array by a property

const users = [
	{ name: "Alice", city: "London" },
	{ name: "Bob", city: "Paris" },
	{ name: "Charlie", city: "London" },
	{ name: "David", city: "Paris" },
	{ name: "Eve", city: "Rome" },
];

const formatedUser = {};

users.forEach((value) => {
	if (!formatedUser.hasOwnProperty(value.city)) {
		formatedUser[value.city] = [value.name];
	} else {
		formatedUser[value.city].push(value.name);
	}
});

console.log(formatedUser);

// ! 28. Print 1 to 10 without any loops
// ! 29. Count the occurrences of elements
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// ! 30. find the sum of two fractions
// ! 31. find the duplicate number from arr

const arr = [1, 2, 3, 2, 4, 2, 3, 4, 5, 2];

function returnDuplicate(arr) {
	let repeatedNum = [];

	// #1
	// for (let i = 0; i < arr.length; i++) {
	// 	for (let j = i + 1; j < arr.length; j++) {
	// 		if (arr[i] == arr[j]) {
	// 			if (!repeatedNum.includes(arr[i])) {
	// 				repeatedNum.push(arr[i]);
	// 			}
	// 			break; // unless you have to find how many times it repeat
	// 		}
	// 	}
	// }

	// #2

	let sortedArr = arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] == arr[i + 1]) {
			if (!repeatedNum.includes(arr[i])) {
				repeatedNum.push(arr[i]);
			}
		}
	}

	return repeatedNum;
}

console.log(returnDuplicate(arr));

// ! 32. Example: Understanding "x + 5% = 100"

// Step-by-step Explanation in Hinglish:

// 1️⃣ Equation diya hai:
// x + 5% = 100

// 2️⃣ Yahaan “5%” ka matlab hota hai “5% of x”,
// yani (5/100) * x = 0.05x

// 3️⃣ Ab equation ko likh sakte hain:
// x + 0.05x = 100

// 4️⃣ Dono terms mein x hai, toh add kar do:
// (1 + 0.05)x = 100
// 1.05x = 100

// 5️⃣ Ab x nikalne ke liye divide karo:
// x = 100 / 1.05
// x = 95.24

// ✅ Final Answer:
// x = 95.24

// 💡 Simple Words Mein:
// “x + 5% = 100” ka matlab hai “x mein uska 5% add karke 100 milta hai.”
// Isliye 5% ko x ke saath multiply karna zaroori hai — isliye “0.05x” likhte hain.

// ! 33. Finding the Longest Common Prefix (LCP)
// function longestCommonPrefix(strs) {
// 	if (!strs.length) return "";

// 	strs.sort();
// 	const first = strs[0];
// 	const last = strs[strs.length - 1];
// 	let i = 0;

// 	while (i < first.length && i < last.length && first[i] === last[i]) {
// 		i++;
// 	}

// 	return first.slice(0, i);
// }
// console.log(longestCommonPrefix(["aebcv", "aeq", "aeml", "aeiyt"]));

// ! 34. Move element 0 to last

// function moveZerosToEnd(arr) {
// 	let nonZeroIndex = 0;

// 	// Move non-zero elements forward
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] !== 0) {
// 			arr[nonZeroIndex] = arr[i];
// 			nonZeroIndex++;
// 		}
// 	}

// 	// Fill the rest with zeros
// 	for (let i = nonZeroIndex; i < arr.length; i++) {
// 		arr[i] = 0;
// 	}

// 	return arr;
// }

// console.log(moveZerosToEnd([1, 2, 0, 4, 5, 0, 3]));
