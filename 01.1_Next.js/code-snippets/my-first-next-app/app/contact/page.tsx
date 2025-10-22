import ButtonComponent from "./button";

export default async function Contact() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const post = await response.json();
	console.log(post);
	return (
		<div>
			Contact
			<ButtonComponent />
		</div>
	);
}
