import Link from "next/link";

export default async function Users() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	console.log(users);
	return (
		<div>
			{" "}
			<h3>Users list</h3>
			<ul>
				{users?.map((user: { id: number; name: string }) => (
					<li key={user.id}>
						{" "}
						<Link href={`/users/${user.id}`}>{user.name}</Link>
					</li>
				))}
			</ul>{" "}
		</div>
	);
}
