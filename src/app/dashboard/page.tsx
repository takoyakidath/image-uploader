import Gallerys from "@/components/gallerys";
import Search from "@/components/search";
export default function Page() {
	return (
		<div>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<Search />
				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-sm bg-muted/50">
							<div className="text-6xl">total Images : 900k</div>
						</div>
						<div className="aspect-video rounded-sm bg-muted/50">
							<div className="text-6xl">total size : 1PB</div>
						</div>
						<div className="aspect-video rounded-sm bg-muted/50">a</div>
					</div>
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
				<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
					<div className="flex flex-1 flex-col gap-4 p-4">
						<div className="text-6xl">Recently uploaded</div>
						<Gallerys />
						<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
					</div>
				</div>
			</div>
		</div>
	);
}
