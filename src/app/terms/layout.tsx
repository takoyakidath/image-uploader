import Header from "@/components/header";
type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<div className="">{children}</div>
		</>
	);
};

export default MainLayout;
