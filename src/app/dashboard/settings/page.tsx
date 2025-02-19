import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Accounts() {
	const currentuser = "emxaple";
	const currentemail = "emxaple@emxaple.com";
	return (
		<div>
			<div className="text-2xl">Profile</div> <br />
			<div className="text-1xl">Username</div> <br />
			<Input placeholder={currentuser} /> <br />
			<div className="text-1xl">Email</div> <br />
			<Input placeholder={currentemail} /> <br />
			<div className="text-2xl">Accounts</div> <br />
			<div className="text-1xl">Password</div> <br />
			<Input placeholder="Password" type="password" /> <br />
			<Button type="submit">Submit</Button>
		</div>
	);
}
