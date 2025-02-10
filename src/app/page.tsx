import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TypographyH1, TypographyP } from "@/components/ui/typography"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-full"></div>
            <span className="text-2xl font-bold text-primary">ImageShare</span>
          </div>
          <Button asChild>
            <Link href="/login">ログイン</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 text-center">
        <TypographyH1 className="mb-6 text-primary">画像共有の新しいカタチ</TypographyH1>

        <TypographyP className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          あなたの思い出や創造性を世界中と共有しましょう。 高品質な画像アップロード、簡単な共有機能、
          そしてインスピレーションを得られるコミュニティがあなたを待っています。
        </TypographyP>

        <div className="mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/signup">今すぐ始める</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="📸"
            title="簡単アップロード"
            description="ドラッグ＆ドロップで簡単に画像をアップロード。複数の画像も一度に処理できます。"
          />
          <FeatureCard
            icon="🖼️"
            title="美しいギャラリー"
            description="あなたの作品を最高の形で展示。レスポンシブデザインで、どのデバイスでも美しく表示されます。"
          />
          <FeatureCard
            icon="🔒"
            title="安全な共有"
            description="プライバシー設定を完全にコントロール。公開範囲を自由に設定できます。"
          />
        </div>
      </main>

      <footer className="container mx-auto p-4 text-center text-muted-foreground">
        <p>&copy; 2023 ImageShare. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="text-4xl mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

