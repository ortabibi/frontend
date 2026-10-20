import { Routes, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ChatPage } from './pages/ChatPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'

function App() {
  return (
    <section className="app">
      <AppHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
