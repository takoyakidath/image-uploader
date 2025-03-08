import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b  to-slate-100 py-12">
			<div className="container max-w-3xl mx-auto px-4">
				<Card className="border-none shadow-lg mb-8">
					<CardHeader className="text-center border-b pb-6">
						<CardTitle className="text-3xl font-bold mb-4">
							Terms of service
						</CardTitle>
						<div className="h-1 w-20 bg-primary mx-auto mb-4" />
						<CardDescription>Last Modified: 11 Feb 2025</CardDescription>
						<CardDescription>
							Previous Version:{" "}
							<Link
								href="/terms/archive/first"
								className="text-primary hover:underline"
							>
								First{/*普通は日付を入れる*/}
							</Link>
						</CardDescription>
					</CardHeader>
					<CardContent className="pt-8">
						<div className="space-y-8">
							{sections.map((section) => (
								<section
									key={section.title}
									className=" rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
								>
									<h2 className="text-xl font-semibold mb-6 text-center border-b pb-3">
										{section.title}
									</h2>
									{section.type === "paragraph" ? (
										<p className="text-muted-foreground text-center">
											{section.content}
										</p>
									) : (
										<ol className="list-decimal pl-8 space-y-3 text-muted-foreground">
											{section.items?.map((item) => (
												<li
													key={typeof item === "string" ? item : item.text}
													className="pl-2"
												>
													{typeof item === "string" ? (
														<p>{item}</p>
													) : (
														<>
															<p>{item.text}</p>
															{item.subItems && (
																<ul className="list-disc pl-5 mt-2 space-y-1">
																	{item.subItems.map((subItem) => (
																		<li key={subItem}>{subItem}</li>
																	))}
																</ul>
															)}
														</>
													)}
												</li>
											))}
										</ol>
									)}
								</section>
							))}
						</div>

						<div className="text-center mt-12 text-sm text-muted-foreground">
							<p>以上</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

// 利用規約のセクションデータ
const sections = [
	{
		title: "第1条（適用範囲）",
		type: "list",
		items: [
			"本規約は、当サービスの利用に関するすべてのユーザーに適用されます。",
			"ユーザーは本サービスを利用することで、本規約のすべての内容に同意したものとみなされます。",
		],
	},
	{
		title: "第2条（利用資格）",
		type: "list",
		items: [
			"ユーザーは、本サービスを利用するにあたり、適用される法令を遵守するものとします。",
			"18歳未満のユーザーは、保護者または法定代理人の同意を得た上で、本サービスを利用するものとします。",
		],
	},
	{
		title: "第3条（データセキュリティ）",
		type: "paragraph",
		content:
			"当サービスは、個人情報の不正アクセス、ハッキング、意図しないデータ流出などのデータ漏洩について、一切の責任を負いません。",
	},
	{
		title: "第4条（画像管理）",
		type: "list",
		items: [
			"ユーザーが本サービスにアップロードした画像の漏洩について、システムの脆弱性、第三者の干渉、または偶発的な開示による場合であっても、当サービスは一切の責任を負いません。",
			"システムの故障、メンテナンス作業、または予期せぬ技術的問題により、ユーザーがアップロードした画像が消失した場合も、当サービスは一切の責任を負いません。",
		],
	},
	{
		title: "第5条（禁止コンテンツおよび禁止行為）",
		type: "list",
		items: [
			"ユーザーは、センシティブ、露骨、または違法な画像をアップロードすることを禁止します。",
			"これには、ヌード、暴力、または適用される法律や規制に違反する内容を含む画像が含まれますが、これらに限定されません。",
			{
				text: "以下の行為を禁止します。",
				subItems: [
					"違法行為、犯罪行為、またはそれらを助長する行為",
					"他者の権利を侵害する行為（著作権・プライバシーの侵害など）",
					"サービスの運営を妨げる行為（スパム、ハッキング、過度なアクセスなど）",
				],
			},
			"本規約に違反した場合、当サービスは違反コンテンツの削除、またはアカウントの一時停止措置を講じることがあります。",
		],
	},
	{
		title: "第6条（著作権・知的財産権）",
		type: "list",
		items: [
			"ユーザーは、本サービスを利用する際に、第三者の著作権、商標権、その他の知的財産権を侵害しないものとします。",
			"ユーザーが本サービスにアップロードしたコンテンツについて、当サービスはその内容の合法性や適法性を保証しません。",
			"著作権やその他の権利を侵害するコンテンツがアップロードされた場合、当サービスは該当コンテンツの削除、またはアカウントの一時停止措置を講じることがあります。",
		],
	},
	{
		title: "第7条（サービスの提供）",
		type: "list",
		items: [
			"本サービスは学生によって管理されているため、財政的、学業的、または個人的な理由により、予告なく提供を中止する可能性があります。",
			"そのため、サービスの終了やそれに伴うユーザーへの不便について、当サービスは一切の責任を負いません。",
		],
	},
	{
		title: "第8条（サービス提供の継続性に関する免責事項）",
		type: "list",
		items: [
			"本サービスはGoogle Workspaceをデータベースに使用しているため、提供者の都合や予期せぬ事情により、いついかなる時でも予告なく終了する場合があります。",
			"利用者はこれを了承の上で本サービスを利用するものとし、サービスの終了により生じた損害について、提供者は一切の責任を負いません。",
		],
	},
	{
		title: "第9条（免責事項）",
		type: "list",
		items: [
			"当サービスは、ユーザーが本サービスを利用することにより発生した損害について、一切の責任を負いません。",
			"ユーザー同士のトラブルについて、当サービスは関与せず、一切の責任を負いません。",
			"本サービスの利用により発生した直接的・間接的な損害について、当サービスは責任を負わないものとします。",
		],
	},
	{
		title: "第10条（規約の変更）",
		type: "list",
		items: [
			"本規約は、必要に応じて変更されることがあります。",
			"規約変更は、当サービス内での通知、または適切な方法で告知するものとし、変更後も本サービスを利用する場合は、新規約に同意したものとみなします。",
		],
	},
	{
		title: "第11条（準拠法および裁判管轄）",
		type: "list",
		items: [
			"本規約の解釈および適用は、日本法に準拠するものとします。",
			"本サービスに関する紛争が発生した場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
		],
	},
];
