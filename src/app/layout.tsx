import "./globals.css";
import Hello from "@/components/Hello";
import { ThemeProvider } from "@/components/theme-provider";
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
		<html lang="en" suppressHydrationWarning>
			<meta property="og:image" content="@/app/public/ogp/image-uploader.png" />
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
