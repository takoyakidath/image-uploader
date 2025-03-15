import Gallerys from "@/components/gallerys";
import Search from "@/components/search";
import { Database, HardDrive, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatNumber(num: number) {
	const units = [
		"p",
		"n",
		"μ",
		"m",
		"",
		"k",
		"M",
		"G",
		"T",
		"P",
		"E",
		"Z",
		"Y",
		"B",
	];
	const exponent = Math.floor(Math.log10(Math.abs(num)));

	let unitIndex = Math.floor((exponent + 12) / 3);

	if (unitIndex < 0) {
		unitIndex = 0;
	}

	const formattedNum = num / 10 ** (3 * (unitIndex - 4));

	return Math.round(formattedNum) + units[unitIndex];
}

function convertToDecimalUnits(totalbytes: number): string {
	// バイト数を1024単位基準に変換
	const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "BB"];
	let index = 0;

	// 1024単位で繰り返して単位を上げていく
	let size = totalbytes;
	while (size >= 1024 && index < units.length - 1) {
		size /= 1024;
		index++;
	}
	// 小数点以下が0の場合は整数として表示
	return size % 1 === 0
		? `${size} ${units[index]}`
		: `${size.toFixed(2)} ${units[index]}`;
}

export default function Page() {
	const totalimages = 10000;
	const totalbytes = 101330991615836160;
	const currentrank = 1;
	return (
		<div>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<Search />
				<div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Images
								</CardTitle>
								<Database className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									{formatNumber(totalimages)}
								</div>
								<p className="text-xs text-muted-foreground">
									Your images stored
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Size
								</CardTitle>
								<HardDrive className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									{convertToDecimalUnits(totalbytes)}
								</div>
								<p className="text-xs text-muted-foreground">
									Your storage used
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Current Rank
								</CardTitle>
								<Users className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">
									{formatNumber(currentrank)}th
								</div>
								<p className="text-xs text-muted-foreground">
									Your rank position
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className="text-3xl">Recently uploaded</div>
				{/* Add overflow-auto to make the gallery scrollable */}
				<div className="overflow-auto max-h-[60vh]">
					<Gallerys />
				</div>
			</div>
		</div>
	);
}
