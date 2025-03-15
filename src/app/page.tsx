import { Footer } from "@/components/footer";
import Header from "@/components/header";
import PlanScreen from "@/components/plan";
import { Button } from "@/components/ui/button";
import { ExternalLink, Image, Upload } from "lucide-react";
import Link from "next/link";
export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="grow flex flex-col items-center justify-center space-y-12 px-4 py-12">
				<section className="text-center space-y-4 max-w-2xl">
					<h2 className="text-4xl font-bold">Welcome to ImageUploader</h2>
					<p className="text-xl text-muted-foreground">
						The easiest way to upload, manage, and share your images online.
					</p>
				</section>

				<section className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						icon={<Upload className="h-12 w-12" />}
						title="Easy Upload"
						description="Drag and drop or click to upload your images in seconds."
					/>
					<FeatureCard
						// eslint-disable-next-line jsx-a11y/alt-text
						icon={<Image className="h-12 w-12" />}
						title="Image Management"
						description="manage your images with powerful tools."
					/>
					<FeatureCard
						icon={<ExternalLink className="h-12 w-12" />}
						title="Instant Sharing"
						description="Share your images with anyone, anywhere, anytime."
					/>
				</section>
				<Link href="/register">
					<Button size="lg" className="px-8 py-6 text-lg">
						Register
					</Button>
				</Link>
				<PlanScreen />
			</main>

			<Footer />
		</div>
	);
}

interface FeatureCardProps {
	icon: React.ReactNode; // アイコンの型
	title: string; // タイトルの型
	description: string; // 説明の型
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-xs">
			{icon}
			<h2 className="text-lg font-semibold">{title}</h2>
			<p className="text-sm">{description}</p>
		</div>
	);
}
