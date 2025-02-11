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
			<Card>
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
						<h3>Data Security</h3>
						<p>
							We are not responsible for any data breaches involving personal
							information, including but not limited to unauthorized access,
							hacking, or unintended data exposure.
						</p>
						<h3>mage Management</h3>
						<p>
							We are not responsible for any leakage of images uploaded by
							users, whether due to system vulnerabilities, third-party
							interference, or accidental disclosure. Additionally, we are not
							responsible for any loss of images uploaded by users, whether
							caused by system malfunctions, maintenance activities, or
							unforeseen technical issues.
						</p>
						<h3>Service Availability</h3>
						<p>
							As this service is managed by a student, it may be discontinued at
							any time due to financial, academic, or personal reasons. We bear
							no responsibility for such termination or any resulting
							inconvenience to users.
						</p>
					</CardContent>
					<CardFooter>
						<p>Written by Takoyaki</p>
					</CardFooter>
				</Card>
			</Card>
		</>
	);
}
