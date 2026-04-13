import { redirect } from "next/navigation"

export default function VisitClientPage() {
  const consultationBase = process.env.NEXT_PUBLIC_LARAVEL_ASSET_URL ?? "http://127.0.0.1:8000"
  redirect(consultationBase)
}
