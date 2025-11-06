// src/App.jsx

import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Toaster } from '@/components/ui/toaster'
import { Home, Briefcase, User, Phone, LayoutGrid } from 'lucide-react'

// Pages
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage' // 1. CONTACT PAGE IMPORT KIYA

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "Portfolio", url: "/portfolio", icon: LayoutGrid },
  { name: "Contact", url: "/contact", icon: Phone },
]

const AppLayout = () => (
  <div id="smooth-wrapper">
    <Header items={navItems} />

    <div id="smooth-content">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>

    <Toaster />
  </div>
)

function App() {
  useEffect(() => {
    const gsap = window.gsap
    const ScrollSmoother = window.ScrollSmoother

    if (gsap && ScrollSmoother) {
      gsap.registerPlugin(window.ScrollTrigger, ScrollSmoother)

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true
      })
    } else {
      console.warn("GSAP or ScrollSmoother not available")
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} /> {/* 2. CONTACT ROUTE ADD KIYA */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App