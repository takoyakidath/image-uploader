import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="overflow-hidden">
				<CardContent className="grid p-0 md:grid-cols-2">
					<form className="p-6 md:p-8">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Welcome back</h1>
								<p className="text-balance text-muted-foreground">
									Login to your Takoyaki&apos;s Accounts
								</p>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="/forgot-password"
										className="ml-auto text-sm underline-offset-2 hover:underline"
									>
										Forgot your password?
									</a>
								</div>
								<Input id="password" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								Login
							</Button>

							<div className="text-center text-sm">
								Don&apos;t have an account?{" "}
								<a href="register" className="underline underline-offset-4">
									register
								</a>
							</div>
						</div>
					</form>
					<div className="relative hidden bg-muted md:block">
						<Image
							src="https://ui.shadcn.com/placeholder.svg"
							alt="Image"
							layout="fill"
							objectFit="cover"
							className="absolute inset-0 dark:brightness-[0.2] dark:grayscale"
						/>
					</div>
				</CardContent>
			</Card>
			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
				By clicking continue, you agree to our{" "}
				<a href="/terms">Terms of service</a>.
			</div>
		</div>
	);
}
