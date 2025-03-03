import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen ">
			<div className="text-center">
				<AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
				<h1 className="text-4xl font-bold  mb-2">404</h1>
				<h2 className="text-2xl font-semibold  mb-4">ページが見つかりません</h2>
				<p className=" mb-8">
					お探しのページは存在しないか、移動した可能性があります。
				</p>
				<Link
					href="/"
					className="px-4 py-2  rounded hover:bg-gray-600 transition-colors"
				>
					ホームに戻る
				</Link>
			</div>
		</div>
	);
}
