import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="container mx-auto p-4 text-center text-muted-foreground">
        <p>&copy; 2023 ImageShare. All rights reserved.</p>
      </footer>
      </body>
    </html>
  );
}
