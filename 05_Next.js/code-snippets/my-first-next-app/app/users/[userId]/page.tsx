import { notFound } from "next/navigation";

export default async function UserDetail({
	params,
}: {
	params: Promise<{ userId: string }>;
}) {
	const { userId } = await params;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	const users = await response.json();
	console.log(users);

	// if (Object.keys(users).length < 1) return <p>User not found</p>;
	// if (!users) return <p>User not found</p>;
	// if (!users) {
	// 	notFound();
	// }
	if (Object.keys(users).length < 1) {
		notFound();
	}

	return (
		<div>
			{" "}
			<h3>Users list</h3>
			<ul>{users.name}</ul> <ul>{users.email}</ul> <ul>{users.phone}</ul>{" "}
			<ul>{users.website}</ul>{" "}
		</div>
	);
}
