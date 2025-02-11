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
						<CardTitle>Privacy Policy</CardTitle>
						<CardDescription>11 Feb 2025</CardDescription>
						<CardDescription>
							Previous Version:{" "}
							<Link href="/privacy/archive/first">
								First{/*普通は日付を入れる*/}
							</Link>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>
			</Card>
		</>
	);
}
