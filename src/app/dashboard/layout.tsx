import DashLayout from "@/components/dashlayout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DashLayout>{children}</DashLayout>
		</>
	);
};

export default MainLayout;
