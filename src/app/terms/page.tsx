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
				<CardHeader>
					<CardTitle>Terms of service</CardTitle>
					<CardDescription>Last Modified: 11 Feb 2025</CardDescription>
					<CardDescription>
						Previous Version:{" "}
						<Link href="/terms/archive/first">
							First{/*普通は日付を入れる*/}
						</Link>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="border-b border-gray-300 my-6" />
					<h3 className="text-2xl font-bold ">データセキュリティ</h3>
					<p className="mt-2 leading-relaxed">
						個人情報の不正アクセス、ハッキング、意図しないデータ流出などの
						データ漏洩について、当サービスは一切の責任を負いません。
					</p>

					<div className="border-b border-gray-300 my-6" />
					<h3 className="text-2xl font-bold ">画像管理</h3>
					<p className=" mt-2 leading-relaxed">
						ユーザーが本サービスにアップロードした画像の漏洩について、システムの脆弱性、
						第三者の干渉、または偶発的な開示による場合であっても、
						当サービスは一切の責任を負いません。
						<br />
						また、システムの故障、メンテナンス作業、または予期せぬ技術的問題による
						ユーザーがアップロードした画像の消失についても、一切の責任を負いません。
					</p>

					<div className="border-b border-gray-300 my-6" />
					<h3 className="text-2xl font-bold ">禁止コンテンツ</h3>
					<p className="mt-2 leading-relaxed">
						ユーザーは、センシティブ、露骨、または違法な画像をアップロードすることを
						厳しく禁じられています。
						<br />
						これには、ヌード、暴力、または適用される法律や
						規制に違反する内容を含む画像が含まれますが、これらに限定されません。
						<br />
						このポリシーに違反した場合、アップロードされたコンテンツの削除や
						アカウントの一時停止措置を講じる可能性があります。
					</p>

					<div className="border-b border-gray-300 my-6" />
					<h3 className="text-2xl font-bold ">サービスの提供</h3>
					<p className="mt-2 leading-relaxed">
						本サービスは学生によって管理されているため、財政的、学業的、または
						個人的な理由により、予告なく中止される可能性があります。
						<br />
						そのため、サービスの終了やそれに伴うユーザーへの不便については
						一切の責任を負いません。
					</p>
					<div className="border-b border-gray-300 my-6" />
				</CardContent>
			</Card>
			<Footer />
		</>
	);
}
