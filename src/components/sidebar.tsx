import Link from "next/link";
export default function SideBar() {
	return (
		<div className="bg-gray-500 h-full w-[256px] fixed">
			<ul>
				<li>
					<Link href="/">Dashboard</Link>
				</li>
				<li>
					<Link href="/dashboard/upload">Upload</Link>
				</li>
			</ul>
		</div>
	);
}
