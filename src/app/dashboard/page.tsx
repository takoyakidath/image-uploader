import Gallerys from "@/components/gallerys";
import Search from "@/components/search";
export default function Page() {
	const totalimages = "10k";
	const totalsize = "90pb";
	const totalusers = "10k";
	return (
		<div>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<Search />
				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-sm bg-muted/50">
							<div className="text-6xl">
								total Images : <br />
								<div className="text-9xl">{totalimages}</div>
							</div>
						</div>
						<div className="aspect-video rounded-sm bg-muted/50">
							<div className="text-6xl">
								total size : <br /> <div className="text-9xl">{totalsize}</div>
							</div>
						</div>
						<div className="aspect-video rounded-sm bg-muted/50">
							<div className="text-6xl">
								total users : <br />{" "}
								<div className="text-9xl">{totalusers}</div>
							</div>
						</div>
					</div>
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
				<div className="text-6xl">Recently uploaded</div>
				{/* Add overflow-auto to make the gallery scrollable */}
				<div className="overflow-auto max-h-[50vh]">
					<Gallerys />
				</div>
				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
			</div>
		</div>
	);
}
