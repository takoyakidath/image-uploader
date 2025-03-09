"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function ForgotPassword() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Just show the success state without any API calls
		console.log("Email submitted:", values.email);
		setIsSubmitted(true);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl">Reset password</CardTitle>
					<CardDescription>
						Enter your email address and we&apos;ll send you a link to reset
						your password.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{!isSubmitted ? (
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="name@example.com" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit" className="w-full">
									Send reset link
								</Button>
							</form>
						</Form>
					) : (
						<div className="space-y-4">
							<div className="rounded-lg bg-muted p-4 text-center">
								<p className="text-sm">
									If an account exists for{" "}
									<span className="font-medium">{form.getValues().email}</span>,
									you will receive a password reset email shortly.
								</p>
							</div>
							<Button
								variant="outline"
								className="w-full"
								onClick={() => setIsSubmitted(false)}
							>
								Try another email
							</Button>
						</div>
					)}
				</CardContent>
				<CardFooter className="flex justify-center border-t p-4">
					<Link
						href="/login"
						className="flex items-center text-sm text-muted-foreground hover:text-primary"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to login
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
