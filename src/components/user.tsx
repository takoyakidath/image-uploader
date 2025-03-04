"use client";
import { NavUser } from "@/components/nav-user";
import Userdata from "@/components/userdata";

export default function User() {
	const data = {
		user: Userdata(),
	};
	return (
		<div>
			<NavUser user={data.user} />
		</div>
	);
}
