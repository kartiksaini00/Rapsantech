import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import ScrollToTop from './components/common/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import VehicleTracking from './pages/VehicleTracking'
import FleetManagement from './pages/FleetManagement'
import SchoolBusTracking from './pages/SchoolBusTracking'
import EmployeeTracking from './pages/EmployeeTracking'
import FuelMonitoring from './pages/FuelMonitoring'
import AssetTracking from './pages/AssetTracking'
import GpsDevices from './pages/GpsDevices'
import Industries from './pages/Industries'
import MobileApp from './pages/MobileApp'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Careers from './pages/Careers'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark text-text-primary font-inter">
      <ScrollReset />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vehicle-tracking" element={<VehicleTracking />} />
          <Route path="/fleet-management" element={<FleetManagement />} />
          <Route path="/school-bus-tracking" element={<SchoolBusTracking />} />
          <Route path="/employee-tracking" element={<EmployeeTracking />} />
          <Route path="/fuel-monitoring" element={<FuelMonitoring />} />
          <Route path="/asset-tracking" element={<AssetTracking />} />
          <Route path="/gps-devices" element={<GpsDevices />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
