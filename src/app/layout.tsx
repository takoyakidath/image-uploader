import "./globals.css";
import Hello from "@/components/Hello";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Image Uploader",
	description: "The Image Uploader",
	metadataBase: new URL("https://image.pkopko.jp"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://image.pkopko.jp",
		title: "Image Uploader",
		description: "The Image Uploader",
		images: {
			url: "/ogp/image-uploader.png",
			alt: "image uploader",
			width: 1200,
			height: 630,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="manifest" href="/PWA/manifest.json" />
			<link rel="apple-touch-icon" href="/PWA/icon.png" />
			<meta name="theme-color" content="#b8e986" />
			<meta property="og:image" content="/ogp/image-uploader.png" />
			<meta property="og:image:alt" content="image uploader" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Hello />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
