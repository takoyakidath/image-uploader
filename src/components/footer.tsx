import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-secondary">
			<div className="container mx-auto py-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center md:text-left">
						<h3 className="font-semibold mb-2">Terms of Service</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/terms"
									className="text-muted-foreground hover:text-primary"
								>
									Terms and Conditions
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-center md:text-left">
						<h3 className="font-semibold mb-2">Contact</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="mailto:takoyaki@pkopko.jp"
									className="text-muted-foreground hover:text-primary"
								>
									takoyaki@pkopko.jp
								</a>
							</li>
						</ul>
					</div>
					<div className="text-center md:text-left">
						<h3 className="font-semibold mb-2">Legal</h3>
						<p className="text-muted-foreground">
							&copy; {new Date().getFullYear()} ImageShare. All rights reserved.
							reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
