import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const supabase = await createClient();
	const { data } = await supabase.auth.getUser();
	if (data?.user) {
		redirect("/dashboard");
	}
	return <>{children}</>;
}
