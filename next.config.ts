import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ["ui.shadcn.com"],
	},
};

export default nextConfig;
