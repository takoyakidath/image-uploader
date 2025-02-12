import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Image } from "lucide-react";
import { House } from "lucide-react";
import Link from "next/link";

export default function SideBar() {
	return (
		<div className="bg-gray-500 h-full w-[256px] fixed">
			<ul>
				<li>
					<Button>
						<House />
						<Link href="/dashboard/">Dashboard</Link>
					</Button>
				</li>
				<br />
				<li>
					<Button>
						<Upload />
						<Link href="/dashboard/upload">Upload</Link>
					</Button>
				</li>
				<br />
				<li>
					<Button>
						<Image />
						<Link href="/dashboard/gallery">Gallery</Link>
					</Button>
				</li>
			</ul>
		</div>
	);
}
