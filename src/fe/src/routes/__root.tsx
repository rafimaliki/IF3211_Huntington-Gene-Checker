import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: () => {
    useEffect(() => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname)
      }
    }, [])

    return (
      <div className="h-screen flex flex-col">
        <div className="h-16 shrink-0 border-b border-slate-200 flex items-center pb-1">
          <Navbar />
        </div>

        <div className="flex flex-col overflow-y-auto bg-slate-100 min-h-[calc(100vh-64px)] scroll-smooth">
          <Outlet />
          <Footer />
        </div>
      </div>
    )
  },
})
