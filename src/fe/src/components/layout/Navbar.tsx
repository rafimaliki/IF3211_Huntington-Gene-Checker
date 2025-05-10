import { Link, useLocation } from '@tanstack/react-router'

export default function Navbar() {
  const location = useLocation()
  const activePath = location.pathname

  interface LinkClassProps {
    to: string
  }

  const linkClass = (to: LinkClassProps['to']): string =>
    `pb-1 border-b-2 transition-colors ${
      activePath === to
        ? 'text-blue-900 border-blue-900'
        : 'text-slate-700 border-transparent hover:text-blue-900 hover:border-blue-900'
    }`

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/home" className="text-xl font-bold text-blue-900">
          DNA Analyzer
        </Link>
        <nav className="flex space-x-8">
          <Link to="/home" className={linkClass('/home')}>
            Home
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            About
          </Link>
          <Link to="/analyzer" className={linkClass('/analyzer')}>
            Analyzer
          </Link>
          <Link to="/team" className={linkClass('/team')}>
            Our Team
          </Link>
        </nav>
      </div>
    </header>
  )
}
