import { NavLink, Link } from 'react-router'

export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/" className="logo">Email Agent</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
