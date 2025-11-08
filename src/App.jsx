// src/App.jsx
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import { Home, Briefcase, User, Phone, LayoutGrid } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Toaster } from '@/components/ui/toaster'

import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ContactPage from '@/pages/ContactPage'

// Navigation configuration
const navItems = [
  { name: "Home", url: "/home", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "Portfolio", url: "/portfolio", icon: LayoutGrid },
  { name: "Contact", url: "/contact", icon: Phone },
]

/**
 * Main application layout component.
 * It also contains the smooth scrolling logic for anchor links.
 */
const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const smoother = window.ScrollSmoother.get();
    if (!smoother) return; // Guard clause if smoother isn't ready

    // Check if there is a hash in the URL (e.g., #contact-form)
    if (location.hash) {
      // Use a minimal timeout to ensure the DOM is ready before scrolling.
      // This solves the race condition when navigating from another page.
      const C_scrollTo = setTimeout(() => {
        smoother.scrollTo(location.hash, true, "top top+=100"); // Scrolls to the element with a 100px top offset
      }, 100); // 100ms delay

      // Cleanup the timeout on component unmount or location change
      return () => clearTimeout(C_scrollTo);
    } else {
      // If no hash, scroll to the top of the page on normal navigation
      smoother.scrollTo(0, false);
    }
  }, [location]); // Reruns whenever the URL changes

  return (
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
}

function App() {
  useEffect(() => {
    // Initialize GSAP and ScrollSmoother
    const { gsap, ScrollSmoother, ScrollTrigger } = window
    if (!gsap || !ScrollSmoother) return

    gsap.registerPlugin(ScrollTrigger, ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2, // Slightly adjusted for better feel
      effects: true
    })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App