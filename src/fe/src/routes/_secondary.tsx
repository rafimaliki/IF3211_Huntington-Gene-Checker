import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/_secondary')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container mx-auto px-4 py-16 pt-4">
      <Link
        to="/home"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-900 mb-6"
      >
        <ArrowLeft size={16} /> Kembali ke Beranda
      </Link>
      <Outlet />
    </div>
  )
}
