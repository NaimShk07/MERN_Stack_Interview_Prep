// promist without new keyword

async function myPromise() {
	return "resolved";
}

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
	myPromise().then((value) => console.log(value));
});
