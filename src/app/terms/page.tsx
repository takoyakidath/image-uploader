import { Footer } from "@/components/footer";

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
		<>
			<Card>
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
				<CardContent>
					<div className="space-y-8">
						<section>
							<h2 className="text-xl font-semibold mb-4">第1条（適用範囲）</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									本規約は、当サービスの利用に関するすべてのユーザーに適用されます。
								</li>
								<li>
									ユーザーは本サービスを利用することで、本規約のすべての内容に同意したものとみなされます。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">第2条（利用資格）</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									ユーザーは、本サービスを利用するにあたり、適用される法令を遵守するものとします。
								</li>
								<li>
									18歳未満のユーザーは、保護者または法定代理人の同意を得た上で、本サービスを利用するものとします。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第3条（データセキュリティ）
							</h2>
							<p className="text-muted-foreground">
								当サービスは、個人情報の不正アクセス、ハッキング、意図しないデータ流出などのデータ漏洩について、一切の責任を負いません。
							</p>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">第4条（画像管理）</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									ユーザーが本サービスにアップロードした画像の漏洩について、システムの脆弱性、第三者の干渉、または偶発的な開示による場合であっても、当サービスは一切の責任を負いません。
								</li>
								<li>
									システムの故障、メンテナンス作業、または予期せぬ技術的問題により、ユーザーがアップロードした画像が消失した場合も、当サービスは一切の責任を負いません。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第5条（禁止コンテンツおよび禁止行為）
							</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									ユーザーは、センシティブ、露骨、または違法な画像をアップロードすることを禁止します。
								</li>
								<li>
									これには、ヌード、暴力、または適用される法律や規制に違反する内容を含む画像が含まれますが、これらに限定されません。
								</li>
								<li>
									以下の行為を禁止します。
									<ul className="list-disc pl-5 mt-2 space-y-1">
										<li>違法行為、犯罪行為、またはそれらを助長する行為</li>
										<li>
											他者の権利を侵害する行為（著作権・プライバシーの侵害など）
										</li>
										<li>
											サービスの運営を妨げる行為（スパム、ハッキング、過度なアクセスなど）
										</li>
									</ul>
								</li>
								<li>
									本規約に違反した場合、当サービスは違反コンテンツの削除、またはアカウントの一時停止措置を講じることがあります。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第6条（著作権・知的財産権）
							</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									ユーザーは、本サービスを利用する際に、第三者の著作権、商標権、その他の知的財産権を侵害しないものとします。
								</li>
								<li>
									ユーザーが本サービスにアップロードしたコンテンツについて、当サービスはその内容の合法性や適法性を保証しません。
								</li>
								<li>
									著作権やその他の権利を侵害するコンテンツがアップロードされた場合、当サービスは該当コンテンツの削除、またはアカウントの一時停止措置を講じることがあります。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第7条（サービスの提供）
							</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									本サービスは学生によって管理されているため、財政的、学業的、または個人的な理由により、予告なく提供を中止する可能性があります。
								</li>
								<li>
									そのため、サービスの終了やそれに伴うユーザーへの不便について、当サービスは一切の責任を負いません。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第8条（サービス提供の継続性に関する免責事項）
							</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									本サービスはGoogle
									Workspaceをデータベースに使用しているため、提供者の都合や予期せぬ事情により、いついかなる時でも予告なく終了する場合があります。
								</li>
								<li>
									利用者はこれを了承の上で本サービスを利用するものとし、サービスの終了により生じた損害について、提供者は一切の責任を負いません。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">第9条（免責事項）</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									当サービスは、ユーザーが本サービスを利用することにより発生した損害について、一切の責任を負いません。
								</li>
								<li>
									ユーザー同士のトラブルについて、当サービスは関与せず、一切の責任を負いません。
								</li>
								<li>
									本サービスの利用により発生した直接的・間接的な損害について、当サービスは責任を負わないものとします。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第10条（規約の変更）
							</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>本規約は、必要に応じて変更されることがあります。</li>
								<li>
									規約変更は、当サービス内での通知、または適切な方法で告知するものとし、変更後も本サービスを利用する場合は、新規約に同意したものとみなします。
								</li>
							</ol>
						</section>

						<section>
							<h2 className="text-xl font-semibold mb-4">
								第11条（準拠法および裁判管轄）
							</h2>
							<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
								<li>
									本規約の解釈および適用は、日本法に準拠するものとします。
								</li>
								<li>
									本サービスに関する紛争が発生した場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
								</li>
							</ol>
						</section>
					</div>
				</CardContent>
			</Card>
			<Footer />
		</>
	);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
