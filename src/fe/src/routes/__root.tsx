// layout.tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex flex-col">
      <div className="h-16 shrink-0">
        <Navbar />
      </div>

      <div className="flex flex-col overflow-y-auto bg-slate-100 min-h-[calc(100vh-64px)]">
        <Outlet />
        <Footer />
      </div>
    </div>
  ),
})
