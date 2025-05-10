import { Link, useLocation } from '@tanstack/react-router'

export default function Navbar() {
  const location = useLocation()
  const activePath = location.pathname

  const linkClass = (to: string): string =>
    `pb-1 border-b-2 transition-colors ${
      activePath === to
        ? 'text-blue-900 border-blue-900'
        : 'text-slate-700 border-transparent hover:text-blue-900 hover:border-blue-900'
    }`

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex flex-col md:flex-row h-fit md:h-16 items-center justify-center md:justify-between px-4 py-2">
        <Link
          to="/home"
          className="text-xl font-bold text-blue-900 hidden md:block"
        >
          Huntington Gene Checker
        </Link>

        <nav className="flex flex-row  space-x-8 items-center">
          <Link to="/home" className={linkClass('/home')}>
            Home
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            About
          </Link>
          <Link to="/checker" className={linkClass('/checker')}>
            Checker
          </Link>
          <Link to="/team" className={linkClass('/team')}>
            Our Team
          </Link>
        </nav>
      </div>
    </header>
  )
}
