import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Header() {
	return (
		<header className="container mx-auto p-4">
			<nav className="flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<div className="w-10·h-10·bg-primary·rounded-full" />
					<span className="text-2xl font-bold text-primary">
						<Link href="/">ImageShare</Link>
					</span>
				</div>
				<Button asChild>
					<Link href="/login">ログイン</Link>
				</Button>
			</nav>
		</header>
	);
}
export function HeaderDath() {
	return (
		<header className="container mx-auto p-4 ">
			<nav className="flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<div className="w-10·h-10·bg-primary·rounded-full" />
					<span className="text-2xl font-bold text-primary">
						<Button>
							<Link href="/">ImageShare</Link>
						</Button>
					</span>
				</div>
			</nav>
		</header>
	);
}
