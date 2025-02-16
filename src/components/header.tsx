import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Link from "next/link";

export default function Header() {
	return (
		<header className="p-4 flex justify-between items-center">
			<Link href="/" className="flex items-center space-x-2 text-primary">
				<Camera className="h-8 w-8" />
				<span className="text-2xl font-bold tracking-tight">ImageUploader</span>
			</Link>
			<div className="flex items-center space-x-4">
				<Link href="/login">
					<Button variant="ghost">Login</Button>
				</Link>
				<ModeToggle />
			</div>
		</header>
	);
}
