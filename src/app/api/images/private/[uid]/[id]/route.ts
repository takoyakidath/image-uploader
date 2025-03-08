import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { imageid } = req.query;
	const { uid } = req.query;
	res.status(200).json({ message: `Hello, ${uid}/${imageid}` });
}
