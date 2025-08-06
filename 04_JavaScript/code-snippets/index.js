// Scope
let globalVar = "value";

function func() {
	let funcVar = "value";
}

if (true) {
	let blockVar = "value";
}

// hoisting
console.log(a); // undefined
var a = 5;

sayHello(); // ✅ Works

function sayHello() {
	console.log("Hello!");
}

// Temporal dead zone

console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;

// Closure
function outer() {
	let count = 0;
	function inner() {
		count++;
		console.log(count);
	}
	return inner;
}

const myFunc = outer();

myFunc(); // 1
myFunc(); // 2
myFunc(); // 3

// Arrow functions vs regular functions

const obj1 = {
	name: "Alice",
	regularFunc: function () {
		console.log(this.name); // ✅ 'this' refers to obj1
	},
	arrowFunc: () => {
		console.log(this.name); // ❌ 'this' is undefined or window/global
	},
};

obj1.regularFunc(); // Alice
obj1.arrowFunc(); // undefined

// this
var button = document.getElementById("#btn");
button.addEventListener("click", function () {
	console.log(this); // point to button
});

// call apply bind
function greet(city, country) {
	console.log(`Hello ${this.name} from ${city}, ${country}`);
}

const user = { name: "Naim" };

greet.call(user, "Ahmedabad", "India"); // call
greet.apply(user, ["Ahmedabad", "India"]); // apply always take 2nd arg as array

// bind doesn't call straight way but returns a funciton which can be call whenver we want
const boundGreet = greet.bind(user, "Ahmedabad", "India");

// Promises
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("📦 Data loaded");
		}, 2000);
	});
}

fetchData()
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// async/await & fetch api

// async function getUserData() {}
const getUserData = async () => {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: "Hello",
				body: "World!!",
				userId: 1,
			}),
		});
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
getUserData();

// map, filter, reduce, find, some, every
const nums = [1, 2, 3];

// return array
nums.map((n) => n * n); // [1, 4, 9, 16]
nums.filter((n) => n % 2 === 0); // [2, 4]
nums.reduce((prev, cur) => prev + cur, 0); // 10
nums.find((n) => n > 1); // 2
nums.some((n) => n % 2 === 0); // true
nums.every((n) => n > 0); // true

// Object & Array destructuring

const product = {
	id: 1,
	name: "shirt",
	category: {
		id: 10,
		catName: "clothes",
	},
};
const { name: productName } = product;
const {
	category: { catName },
} = product;

const data = ["apple", "banana", "cherry", "lichi"];
const [, , thirdFruit] = data; // cherry

// spread operator
const nums2 = [1, 2, 3];
const newNums = [...nums2, 4, 5];

const user2 = { name: "Naim", age: 25 };
const newUser = { ...user, city: "Ahmedabad" };
console.log(newUser); // { name: "Naim", age: 25, city: "Ahmedabad" }

// rest operator
const [first, second, ...third] = data;
const { id, ...restData } = product; // restData has whole obj except id

function sum(...numbers) {
	return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3)); // 6

// Optional chaining ?., nullish coalescing ??

const user3 = {
	name: "Naim",
	address: {
		city: "Ahmedabad",
	},
};

console.log(user3.address?.city); // Ahmedabad
console.log(user3.address?.pincode); // undefined
console.log(user3.contact.phone); // error
console.log(user3.contact?.phone); // undefined (no error!)

const name2 = null;
const displayName = name2 ?? "Guest";
console.log(displayName); // Guest

const age = 0;
console.log(age || 18);   // 18 ❌ (0 is falsy)
console.log(age ?? 18);   // 0 ✅ (not null or undefined)
