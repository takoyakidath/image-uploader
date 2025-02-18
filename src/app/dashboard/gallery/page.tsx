import Gallerys from "@/components/gallerys";
import Search from "@/components/search";

export default function gallery() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<Search />
			<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
				<div className="flex flex-1 flex-col gap-4 p-4">
					<Gallerys />
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
			</div>
		</div>
	);
}
