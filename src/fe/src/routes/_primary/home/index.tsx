import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/section-hero'
import Info from '@/components/home/section-info'
import Stats from '@/components/home/section-stats'
import Table from '@/components/home/section-table'

export const Route = createFileRoute('/_primary/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Hero />
      <Info />
      <Stats />
      <Table />
    </div>
  )
}
