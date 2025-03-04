"use client";
import type React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Userdata from "@/components/userdata";

export default function Accounts() {
	const data = {
		user: Userdata(),
	};

	return (
		<div className="">
			<form>
				<Card className="mb-6">
					<CardHeader>
						<CardTitle className="text-2xl">Settings</CardTitle>
						<CardDescription>
							Account settings and profile management
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="username">username</Label>
							<Input id="username" type="text" placeholder={data.user.name} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">MailAdress</Label>
							<Input id="email" type="email" placeholder={data.user.email} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">New Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Enter your new password"
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full">
							Sumbit
						</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
