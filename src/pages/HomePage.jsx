import { Link } from 'react-router'

export function HomePage() {
  return (
    <section className="home-page">
      <h1>Email Agent</h1>
      <p>Ask questions about your Gmail and get answers from your emails.</p>
      <Link to="/chat" className="btn">Get started</Link>
    </section>
  )
}
