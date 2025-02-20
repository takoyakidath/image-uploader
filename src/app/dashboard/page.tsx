import Gallerys from "@/components/gallerys";
import Search from "@/components/search";
import { Database, HardDrive, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Page() {
	const totalimages = "10k";
	const totalsize = "90PB";
	const totalusers = "10k";
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
								<div className="text-2xl font-bold">{totalimages}</div>
								<p className="text-xs text-muted-foreground">Images stored</p>
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
								<div className="text-2xl font-bold">{totalsize}</div>
								<p className="text-xs text-muted-foreground">Storage used</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Users
								</CardTitle>
								<Users className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{totalusers}</div>
								<p className="text-xs text-muted-foreground">
									Registered users
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
				<div className="text-3xl">Recently uploaded</div>
				{/* Add overflow-auto to make the gallery scrollable */}
				<div className="overflow-auto max-h-[60vh]">
					<Gallerys />
				</div>
				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
			</div>
		</div>
	);
}
