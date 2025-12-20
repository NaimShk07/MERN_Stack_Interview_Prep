// ! Question 1 — setTimeout vs Promise

// console.log("Start");

// setTimeout(() => {
// 	console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
// 	console.log("Promise");
// });

// console.log("End");

// ! Question 2 — Multiple Promises

// console.log("A");

// Promise.resolve()
// 	.then(() => {
// 		console.log("B");
// 	})
// 	.then(() => {
// 		console.log("C");
// 	});

// console.log("D");

// ! Question 3 — async function + setTimeout

// console.log("1");

// async function asyncFunc() {
// 	console.log("2");
// 	await Promise.resolve();
// 	console.log("3");
// }

// asyncFunc();

// setTimeout(() => {
// 	console.log("4");
// }, 0);

// console.log("5");

// ! Question 4 — Nested async-await

// async function foo() {
// 	console.log("foo start");
// 	await bar();
// 	console.log("foo end");
// }

// async function bar() {
// 	console.log("bar");
// }

// console.log("script start");
// foo();
// console.log("script end");

// ! Question 5 — setTimeout + Promise + async

// setTimeout(() => {
// 	console.log("timeout 1");
// }, 0);

// Promise.resolve()
// 	.then(() => {
// 		console.log("promise 1");
// 	})
// 	.then(() => {
// 		console.log("promise 2");
// 	});

// (async () => {
// 	console.log("async start");
// 	await null;
// 	console.log("async end");
// })();

// ! Q3 — IIFE to fix var

// for (var i = 1; i <= 3; i++) {
// 	(function (x) {
// 		setTimeout(() => console.log(x), 1000);
// 	})(i);
// }

// ! Q4 — closure capturing outer variable

// let count = 0;

// function inc() {
// 	return function () {
// 		count++;
// 		console.log(count);
// 	};
// }

// const a = inc();
// const b = inc();

// a();
// a();
// b();
// a();
// b();

// ! Q5 — Nested closures

function outer() {
	let x = 10;

	function middle() {
		let y = 20;

		function inner() {
			console.log(x, y);
		}

		x++; // x = 11
		return inner;
	}

	return middle();
}

const result = outer();
result();
