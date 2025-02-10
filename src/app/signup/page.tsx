import { SiginupForm } from "@/components/sigin-form"

export default function Siginup() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SiginupForm />
      </div>
    </div>
  )
}
