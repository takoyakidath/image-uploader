import "./globals.css";
import Header from "@/components/header";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Image Uploader",
	description: "The Image Uploader",
	metadataBase: new URL("https://image.pkopko.jp"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<footer className="container mx-auto p-4 text-center text-muted-foreground">
					<p>&copy; 2023 ImageShare. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}
