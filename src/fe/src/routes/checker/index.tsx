import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checker/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/checker/"!</div>
}
