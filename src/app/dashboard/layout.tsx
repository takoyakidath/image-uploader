import Header from "@/components/header";
import SideBar from "@/components/sidebar";
type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<div className="bg-slate-500 ">
				<Header />
			</div>

			<SideBar />
			<main className="pl-[256px] h-full">
				<div className="h-full bg-white">{children}</div>
			</main>
		</>
	);
};

export default MainLayout;
