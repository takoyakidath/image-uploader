import DashLayout from "@/components/dashlayout";
//import { redirect } from "next/navigation";

//import { createClient } from "@/utils/supabase/server";
//const supabase = await createClient();
//const { data, error } = await supabase.auth.getUser();
//if (error || !data?.user) {
//	redirect("/login");
//}
const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DashLayout>{children}</DashLayout>
		</>
	);
};

export default MainLayout;
