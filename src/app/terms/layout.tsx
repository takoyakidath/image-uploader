import { Footer } from "@/components/footer";
import Header from "@/components/header";
type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<div className="">
				{children}
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
