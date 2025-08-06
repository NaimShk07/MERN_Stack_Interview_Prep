// 🔢 1. Check if a string is a palindrome

function checkPalindrome(str) {
	const newStr = str.split("").reverse().join("");
	return str == newStr;
}

console.log(checkPalindrome("madam"));

// 🧮 2. Generate Fibonacci series up to N terms
// 0 1 1 2 3 5

function fibonacci(length) {
	const arr = [0, 1];
	for (let i = 2; i < length; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr;
}
console.log(fibonacci(6));

// 🔁 3. Reverse a string

function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log(reverseString("helloworld"));

// 🧠 4. Find the factorial of a number

function findFactorial(number) {
	let factorial = 1;
	for (let i = 2; i <= number; i++) {
		factorial *= i;
	}
	return factorial;
}
console.log(findFactorial(5));

// 🔍 5. Find the second largest number in an array

function findSecondHighest(arr) {
	const uniqueArr = [...new Set(arr)];
	uniqueArr.sort((a, b) => b - a); // descending
	return uniqueArr[1];
}
console.log(findSecondHighest([1, 2, 33, 2, 4, 99]));

// 🧹 6. Remove duplicates from an array

function removeDuplicate(arr) {
	const newArr = [];
	arr.forEach((element) => {
		if (!newArr.includes(element)) {
			newArr.push(element);
		}
	});
	return newArr;
}
console.log(removeDuplicate([1, 2, 3, 3, 3]));

// 🧠 7. Check if a number is prime

function checkPrime(number) {
	if (number == 1) return false;
	let isPrime = true;
	for (let i = 2; i < number; i++) {
		if (number % i == 0) {
			isPrime = false;
			break;
		}
	}
	return isPrime;
}
console.log(checkPrime(11));

// 🔢 8. Count vowels in a string

function countVowel(str) {
	let count = 0;
	let vowel = "aeiou";
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		if (vowel.includes(char)) {
			count++;
		}
	}
	return count;
}
console.log(countVowel("aeiou"));

// ⬆️ 9. Sort an array in ascending order (without sort())

function sortAsc(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
console.log(sortAsc([1, 26, 4, 5, 2, 9, 8]));

// 🕳️ 10. Find missing number in an array of 1 to N
function findMissing(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const numberSet = new Set(arr);
	const missing = [];
	for (let i = min; i < max; i++) {
		if (!numberSet.has(i)) {
			missing.push(i);
		}
	}
	return missing;
}
console.log(findMissing([1, 2, 5, 6, 8, 3, 20, 10]));

// 11. Check if two strings are anagrams

// 12. Find the GCD of two numbers

// 13. Find the longest word in a sentence

// 14. Flatten a nested array

// 15. Find all pairs in an array that sum to a target

// 16. Capitalize first letter of each word in a sentence

// 17. Count character frequency in a string

// 18. Move all zeros to the end of the array

// 19. Check if an array is sorted

// 20. Convert Roman numerals to integers
