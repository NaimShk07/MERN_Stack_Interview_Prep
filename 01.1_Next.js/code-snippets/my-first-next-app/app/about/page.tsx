import { Metadata } from "next";

async function makeRequest() {
	// for client
	const url = `/api/product`;
	// for server
	// const url = `${process.env.NEXT_URL}/api/product`;

	const response = await fetch(`${process.env.NEXT_URL}/api/product`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name: "naim" }),
	});
	return await response.json();
}

export const metadata: Metadata = {
	title: "about us",
	description: "this is about use",
};

export default async function About() {
	const data = await makeRequest();
	console.log(data);
	return <div>{data.message}</div>;
}
