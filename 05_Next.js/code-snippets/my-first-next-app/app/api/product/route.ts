import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const data = await req.json();
	const { name } = data;
	return NextResponse.json({
		success: true,
		message: `hello ${name} from the next api`,
	});
}

export async function GET() {
	const product = [
		{ id: 1, name: "shirt", category: "clothes" },
		{ id: 1, name: "shirt", category: "clothes" },
		{ id: 1, name: "shirt", category: "clothes" },
		{ id: 1, name: "shirt", category: "clothes" },
	];
	return NextResponse.json({
		success: true,
		data: {
			product,
		},
	});
}
