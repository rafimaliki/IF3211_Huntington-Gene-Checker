import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_secondary/checker/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/checker/"!</div>
}
