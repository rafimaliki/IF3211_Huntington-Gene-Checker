import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_primary')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
