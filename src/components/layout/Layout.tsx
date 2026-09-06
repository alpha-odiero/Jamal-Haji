import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import SplashScreen from './SplashScreen'

export default function Layout() {
  const [booted, setBooted] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Keep the window from scrolling while the splash screen is visible.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = booted ? 'hidden' : prev
    return () => {
      document.body.style.overflow = prev
    }
  }, [booted])

  // Close the mobile menu and reset scroll state on navigation.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Track scroll for the sticky navbar appearance.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <AnimatePresence>{booted && <SplashScreen onDone={() => setBooted(false)} />}</AnimatePresence>
      <Navbar scrolled={scrolled} onMenuToggle={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
