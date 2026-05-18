import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

// Rapsan Tech SVG Logo Icon
function RapsanIcon({ className = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* GPS Pin shape */}
      <path d="M20 3C13.373 3 8 8.373 8 15c0 9 12 22 12 22s12-13 12-22C32 8.373 26.627 3 20 3z" fill="url(#pinGrad)" opacity="0.9"/>
      {/* Signal arcs */}
      <path d="M6 10 Q3 15 6 20" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M3 7 Q-1 15 3 23" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M34 10 Q37 15 34 20" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M37 7 Q41 15 37 23" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      {/* Arrow up inside pin */}
      <path d="M20 10 L16 17 h3 v5 h2 v-5 h3 L20 10z" fill="white"/>
      <defs>
        <linearGradient id="pinGrad" x1="8" y1="3" x2="32" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E40AF"/>
          <stop offset="1" stopColor="#2563EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

const services = [
  { label: 'Vehicle Tracking', href: '/vehicle-tracking' },
  { label: 'Fleet Management', href: '/fleet-management' },
  { label: 'School Bus Tracking', href: '/school-bus-tracking' },
  { label: 'Employee Tracking', href: '/employee-tracking' },
  { label: 'Fuel Monitoring', href: '/fuel-monitoring' },
  { label: 'Asset Tracking', href: '/asset-tracking' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: services },
  { label: 'GPS Devices', href: '/gps-devices' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <RapsanIcon className="w-10 h-10" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-dark animate-pulse" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-poppins font-black text-xl tracking-tight">
                <span className="text-white">RAP</span><span className="text-accent">SAN</span>
              </span>
              <span className="text-[10px] text-text-secondary font-semibold tracking-[0.2em] uppercase">TECH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-1 w-56 glass rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-white/10"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-primary/10 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/demo" className="btn-primary text-sm py-2.5">
              <Zap className="w-4 h-4" />
              Get Free Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg glass text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-accent bg-accent/10'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 rounded-lg text-xs text-text-secondary hover:text-accent transition-colors"
                        >
                          › {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1">
                <Link to="/demo" className="btn-primary w-full justify-center text-sm">
                  <Zap className="w-4 h-4" />
                  Get Free Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
