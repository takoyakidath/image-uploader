import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuUpload } from "react-icons/lu";
export default function SideBar() {
	return (
		<div className="bg-gray-500 h-full w-[256px] fixed">
			<ul>
				<li>
					<Button>
						<Link href="/">Dashboard</Link>
					</Button>
				</li>
				<br />
				<li>
					<Button>
						<Link href="/dashboard/upload">Upload</Link>
						<LuUpload />
					</Button>
				</li>
			</ul>
		</div>
	);
}
