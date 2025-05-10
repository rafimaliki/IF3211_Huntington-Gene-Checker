import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/Hero'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 pt-18">
      <Hero />
    </div>
  )
}
