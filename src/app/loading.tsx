import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <Loader2 className="w-16 h-16 mx-auto mb-4 text-gray-600 animate-spin" />
        <h2 className="text-2xl font-semibold text-gray-700">読み込み中...</h2>
        <p className="mt-2 text-gray-500">しばらくお待ちください</p>
      </div>
    </div>
  )
}

