import { type NextRequest, NextResponse } from "next/server";

const postScriptUrl = process.env.NEXT_PUBLIC_IMAGE_POST_SCRIPT_URL;
const deleteScriptUrl = process.env.IMAGE_DELETE_SCRIPT_URL;

async function fetchFromApi(url: string, options: RequestInit) {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(
			`HTTP error! status: ${response.status}, message: ${response.statusText}`,
		);
	}
	return response.json();
}

async function uploadFile(fileName: string, base64Data: string) {
	return fetchFromApi(postScriptUrl as string, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ filename: fileName, body: base64Data }),
	});
}

async function getFileUrl(uid: string, fileName: string) {
	return fetchFromApi(`${postScriptUrl}?filename=${uid}_${fileName}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST(request: NextRequest) {
	try {
		const { uid, fileName, base64Data } = await request.json();
		await uploadFile(`${uid}_${fileName}`, base64Data);
		const { url } = await getFileUrl(uid, fileName);
		return NextResponse.json(
			{ message: "File uploaded", url },
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error uploading file" },
			{ status: 500 },
		);
	}
}

export async function GET(request: NextRequest) {
	try {
		const uid = request.nextUrl.searchParams.get("uid");
		const fileName = request.nextUrl.searchParams.get("filename");
		if (!uid || !fileName) throw new Error("Missing parameters");
		const { url } = await getFileUrl(uid, fileName);
		return NextResponse.json({ url }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error retrieving file URL" },
			{ status: 500 },
		);
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const uid = request.nextUrl.searchParams.get("uid");
		const fileName = request.nextUrl.searchParams.get("filename");
		if (!uid || !fileName) throw new Error("Missing parameters");
		await fetchFromApi(`${deleteScriptUrl}?filename=${uid}_${fileName}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});
		return NextResponse.json({ message: "File deleted" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error deleting file" },
			{ status: 500 },
		);
	}
}
