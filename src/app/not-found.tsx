import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center">
				<AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
				<h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
				<h2 className="text-2xl font-semibold text-gray-700 mb-4">
					ページが見つかりません
				</h2>
				<p className="text-gray-500 mb-8">
					お探しのページは存在しないか、移動した可能性があります。
				</p>
				<Link
					href="/"
					className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
				>
					ホームに戻る
				</Link>
			</div>
		</div>
	);
}
