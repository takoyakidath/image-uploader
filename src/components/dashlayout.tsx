"use client";

import { AppSidebar } from "@/components/sidebar";
import { ModeToggle } from "@/components/theme-toggle";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
const data = {
	navMain: [
		{
			title: "",
			url: "#",
			items: [
				{ title: "Home", id: "home", url: "/dashboard", page: "home" },
				{
					title: "Upload",
					id: "upload",
					url: "/dashboard/upload",
					page: "upload",
				},
				{
					title: "Gallery",
					id: "gallery",
					url: "/dashboard/gallery",
					page: "gallery",
				},
				{
					title: "Accounts",
					id: "accounts",
					url: "/dashboard/accounts",
					page: "accounts",
				},
			],
		},
	],
};

const DashLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const currentItem = data.navMain[0].items.find(
		(item) => item.url === pathname,
	);
	const page = currentItem ? currentItem.page : "Unknown";

	return (
		<div>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
						<div className="flex items-center gap-2">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className="hidden md:block">
										<BreadcrumbLink href="/dashboard">dashboard</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>{page}</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
						<div className="flex items-center gap-2">
							<ModeToggle />
						</div>
					</header>
					<main>
						<div className="flex flex-1 flex-col gap-4 p-4">
							<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
								{children}
							</div>
						</div>
					</main>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
};

export default DashLayout;
