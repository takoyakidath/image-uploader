import HeaderDath from "@/components/dashheader";
import { AppSidebar } from "@/components/sidebar";
type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<div className="bg-slate-500 ">
				<HeaderDath />
			</div>

			<AppSidebar />
			<main className="pl-[256px] h-full">
				<div className="h-full bg-white">{children}</div>
			</main>
		</>
	);
};

export default MainLayout;
