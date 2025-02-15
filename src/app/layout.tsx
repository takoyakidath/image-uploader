import "./globals.css";
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
			<body>{children}</body>
		</html>
	);
}
