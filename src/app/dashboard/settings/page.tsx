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
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Userdata from "@/components/userdata";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Accounts() {
	const data = {
		user: Userdata(),
	};
	const [username, setUsername] = useState(data.user.name || "");
	const [email, setEmail] = useState(data.user.email || "");
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// ここでバックエンドAPIを呼び出す代わりに、単純に遅延を追加
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsLoading(false);
		toast({
			title: "Your settings saved",
			description: "Your profile has been updated successfully.",
		});
	};

	return (
		<div className="">
			<form onSubmit={handleSubmit}>
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
							<Input
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Enter your username"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">MailAdress</Label>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email address"
							/>
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
						<Button type="submit" disabled={isLoading} className="w-full">
							{isLoading && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							{isLoading ? "Saving..." : "Save Changes"}
						</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
