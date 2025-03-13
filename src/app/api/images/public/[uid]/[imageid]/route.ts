import { type NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { uid: string; imageid: string } },
) {
	const { uid, imageid } = params;
	return NextResponse.json({ message: `UID: ${uid}, ImageID: ${imageid}` });
}
