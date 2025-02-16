import type * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { Folder, House, Images, Upload } from "lucide-react";
import Link from "next/link";

const data = {
	navMain: [
		{
			title: "",
			url: "#",
			items: [
				{
					title: "Home",
					id: "home",
					url: "/dashboard",
					icon: <House />,
				},
				{
					title: "Upload",
					id: "upload",
					url: "/dashboard/upload",
					icon: <Upload />,
				},
				{
					title: "gallery",
					id: "gallery",
					url: "/dashboard/gallery",
					icon: <Images />,
				},
			],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
						<Folder className="size-4" />
					</div>
					<div className="flex flex-col gap-0.5 leading-none">
						<span className="font-semibold">
							<Link href="/">image-uploader</Link>
						</span>
					</div>
				</SidebarMenuButton>
			</SidebarHeader>
			<SidebarContent>
				{/* We create a SidebarGroup for each parent. */}
				{data.navMain.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild isActive={item.id === "upload"}>
											<a href={item.url}>
												{item.icon} {item.title}
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
//このitem.id === "upload"にidを入れればいいらしい
