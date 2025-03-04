import withPWA from "next-pwa";

const nextConfig = {
	reactStrictMode: true,
	...withPWA({
		dest: "public",
		register: true,
		skipWaiting: true,
	}),

	output: "standalone",

	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["ui.shadcn.com"],
	},
};

export default nextConfig;
