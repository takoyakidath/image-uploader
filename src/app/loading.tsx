import { Loader2 } from "lucide-react";
export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-screen ">
			<div className="text-center">
				<Loader2 className="w-16 h-16 mx-auto mb-4  animate-spin" />
				<h2 className="text-2xl font-semibold ">読み込み中...</h2>
				<p className="mt-2 ">しばらくお待ちください</p>
			</div>
		</div>
	);
}
