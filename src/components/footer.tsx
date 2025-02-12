import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-gray-100 dark:bg-gray-800 py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="flex items-center space-x-4">
						<Link
							href="/terms"
							className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
						>
							利用規約
						</Link>
						<span className="text-gray-300 dark:text-gray-600">|</span>
						<div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
							<Mail size={16} className="mr-2" />
							<a
								href="mailto:takoyaki@pkopko.jp"
								className="hover:text-primary"
							>
								takoyaki@pkopko.jp
							</a>
						</div>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						&copy; {new Date().getFullYear()} ImageShare. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
