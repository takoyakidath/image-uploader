import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import DashLayout from "@/components/dashlayout";
const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect("/login");
	}
	return (
		<>
			<DashLayout>{children}</DashLayout>
		</>
	);
};

export default MainLayout;
