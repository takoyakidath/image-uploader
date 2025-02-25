import nextPWA from "next-pwa";

const withPWA = nextPWA({
	dest: "public",
	register: true,
	skipWaiting: true,
});

const nextConfig = withPWA({
	reactStrictMode: true,
	output: "standalone",
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["ui.shadcn.com"],
	},
});

export default nextConfig;
