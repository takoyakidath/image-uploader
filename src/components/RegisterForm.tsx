import { signup } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/legacy/image";

export function RegisterForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="overflow-hidden">
				<CardContent className="grid p-0 md:grid-cols-2">
					<div className="relative hidden bg-muted md:block">
						<Image
							src="https://ui.shadcn.com/placeholder.svg"
							alt="Image"
							layout="fill"
							objectFit="cover"
							className="dark:brightness-[0.2] dark:grayscale"
						/>
					</div>

					<form className="p-6 md:p-8">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Create an account</h1>
								<p className="text-balance text-muted-foreground">
									Sigin to your Takoyaki&apos;s Accounts
								</p>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									name="email"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" type="password" name="password" required />
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="invite">Invite Code</Label>
								</div>
								<Input
									id="invite"
									type="text"
									pattern="\d{3}\d{3}\d{3}"
									placeholder="xxxxxxxxx"
									required
									maxLength={11}
								/>
							</div>
							<Button type="submit" formAction={signup} className="w-full ">
								register
							</Button>

							<div className="text-center text-sm">
								Don&apos;t have an account?{" "}
								<a href="login" className="underline underline-offset-4">
									Login
								</a>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
				By clicking continue, you agree to our{" "}
				<a href="/terms">Terms of service</a>.
			</div>
		</div>
	);
}
