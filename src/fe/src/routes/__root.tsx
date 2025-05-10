import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/layout/Navbar'

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Outlet />
    </div>
  ),
})
