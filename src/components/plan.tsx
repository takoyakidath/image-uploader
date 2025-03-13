"use client";

import { Check } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function PlanScreen() {
	return (
		<div className="container mx-auto py-10 px-4">
			<div className="text-center mb-10">
				<h1 className="text-3xl font-bold tracking-tight">Plan</h1>
				<p className="text-muted-foreground mt-2">
					あなたに最適なプランをお選びください
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
				<Card className="border-2">
					<CardHeader>
						<CardTitle className="text-xl">一般</CardTitle>
						<CardDescription>一般ユーザー向け無料プラン</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="mt-4 space-y-2">
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>10GBまでのストレージ</span>
							</li>
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>基本機能へのアクセス</span>
							</li>
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>優先サポート</span>
							</li>
						</ul>
					</CardContent>
				</Card>

				<Card className="border-2 ">
					<CardHeader>
						<CardTitle className="text-xl">学園生</CardTitle>
						<CardDescription>学生向け無制限プラン</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="mt-4 space-y-2">
							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>無制限のストレージ</span>
							</li>

							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>すべての機能にアクセス</span>
							</li>

							<li className="flex items-start">
								<Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
								<span>学園のメアドで登録することが必須</span>
							</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
