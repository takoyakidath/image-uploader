"use client";

import { Check } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function PlanScreen() {
	return (
		<div className="container mx-auto py-10 px-4">
			<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
				<Card className="border-2">
					<CardHeader>
						<CardTitle className="text-xl">General</CardTitle>
						<CardDescription>For general users</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="mt-4 space-y-2">
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>Up to 10 GB storage</span>
							</li>
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>Access to basic functions</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card className="border-2 ">
					<CardHeader>
						<CardTitle className="text-xl">Student</CardTitle>
						<CardDescription>For N High School Group</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="mt-4 space-y-2">
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>Unlimited Storage</span>
							</li>

							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>Access to all functions</span>
							</li>

							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>
									Must register with the school&apos;s e-mail address.
								</span>
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
