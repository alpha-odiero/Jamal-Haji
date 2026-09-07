import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import SplashScreen from './SplashScreen'
import { useTheme } from '../../hooks/useTheme'

export default function Layout() {
  const [booted, setBooted] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={booted ? { visibility: 'hidden' } : undefined}
      >
        <Navbar
          scrolled={scrolled}
          onMenuToggle={() => setMenuOpen((v) => !v)}
          menuOpen={menuOpen}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <main>
          <Outlet />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}
