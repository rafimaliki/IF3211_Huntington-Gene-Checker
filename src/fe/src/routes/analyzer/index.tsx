import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analyzer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analyzer/"!</div>
}
