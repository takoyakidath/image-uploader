import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function Page() {
	return (
		<>
			<Card className="">
				<Card>
					<CardHeader>
						<CardTitle>Terms of service</CardTitle>
						<CardDescription>Last Modified: 11 Feb 2025</CardDescription>
						<CardDescription>
							Previous Version:{" "}
							<Link href="/terms/archive/first">
								First{/*普通は日付を入れる*/}
							</Link>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex-1 border-b border-gray-500" />
						<h3 className="font-3xl">Data Security</h3>
						<br />
						<p>
							We are not responsible for any data breaches involving personal
							information, including but not limited to unauthorized access,
							hacking, or unintended data exposure.
						</p>
						<div className="flex-1 border-b border-gray-500" />
						<h3 className="font-3xl">Image Management</h3>
						<br />
						<p>
							We are not responsible for any leakage of images uploaded by
							users, whether due to system vulnerabilities, third-party
							interference, or accidental disclosure. Additionally, we are not
							responsible for any loss of images uploaded by users, whether
							caused by system malfunctions, maintenance activities, or
							unforeseen technical issues.
						</p>
						<div className="flex-1 border-b border-gray-500" />
						<h3 className="font-3xl">Prohibited Content</h3>
						<br />
						<p>
							Users are strictly prohibited from uploading any sensitive,
							explicit, or illegal images. This includes, but is not limited to,
							images containing nudity, violence, or any content that violates
							applicable laws and regulations. Any violation of this policy may
							result in the removal of the uploaded content and possible account
							suspension.
						</p>
						<div className="flex-1 border-b border-gray-500" />
						<h3 className="font-3xl">Service Availability</h3>
						<br />
						<p>
							As this service is managed by a student, it may be discontinued at
							any time due to financial, academic, or personal reasons. We bear
							no responsibility for such termination or any resulting
							inconvenience to users.
						</p>
						<div className="flex-1 border-b border-gray-500" />
					</CardContent>
					<CardFooter>
						<p>Written by Takoyaki</p>
					</CardFooter>
				</Card>
			</Card>
		</>
	);
}
