import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
const pv = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }
const META = {
  SchoolBusTracking: { badge: 'School Bus Tracking', title: 'Student Safety &', highlight: 'Bus Tracking', sub: 'Live bus tracking with parent SMS alerts, stop notifications, attendance integration, and school transport management.' },
  EmployeeTracking: { badge: 'Employee Tracking', title: 'Smart Employee', highlight: 'Field Tracking', sub: 'Track field staff in real time, auto-log attendance, manage routes, and boost mobile workforce productivity.' },
  FuelMonitoring: { badge: 'Fuel Monitoring', title: 'Fuel Theft Detection &', highlight: 'Monitoring', sub: 'Detect fuel theft, analyze consumption patterns, and reduce fuel costs with sensor-based real-time monitoring.' },
  AssetTracking: { badge: 'Asset Tracking', title: 'High-Value', highlight: 'Asset Tracking', sub: 'Protect equipment and containers with GPS trackers, geo-fencing, tamper alerts, and theft prevention.' },
  GpsDevices: { badge: 'GPS Devices', title: 'Premium GPS', highlight: 'Trackers & Devices', sub: 'OBD trackers, hardwired GPS devices, portable units, and vehicle immobilizers — all backed by Rapsan Tech support.' },
  Industries: { badge: 'Industries', title: 'GPS Tracking for', highlight: 'Every Industry', sub: 'Customized fleet solutions for logistics, mining, schools, construction, delivery, ambulances, and more.' },
  MobileApp: { badge: 'Mobile App', title: 'Track Your Fleet from', highlight: 'Your Phone', sub: 'Android & iOS app with live GPS maps, real-time alerts, driver communication, and full fleet analytics.' },
  Blog: { badge: 'Blog', title: 'GPS & Fleet', highlight: 'Insights', sub: 'Expert articles on fleet management, GPS tracking, fuel savings, driver safety, and Indian logistics industry.' },
  FAQ: { badge: 'FAQ', title: 'Frequently Asked', highlight: 'Questions', sub: 'Everything you need to know about Rapsan Tech GPS tracking services, devices, installation, and pricing.' },
  Careers: { badge: 'Careers', title: 'Join the', highlight: 'Rapsan Tech Team', sub: 'We\'re building India\'s best GPS fleet platform. Come work with passionate people on impactful technology.' },
  Testimonials: { badge: 'Testimonials', title: 'What Our', highlight: 'Clients Say', sub: '2,000+ businesses trust Rapsan Tech for GPS tracking, fleet management, and driver monitoring across India.' },
}['Testimonials']
export default function Testimonials() {
  return (
    <motion.div variants={pv} initial="initial" animate="animate" exit="exit">
      <PageHero badge={META.badge} title={META.title} highlight={META.highlight} subtitle={META.sub}>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link to="/demo" className="btn-primary">Get Free Demo <ArrowRight className="w-4 h-4" /></Link>
          <Link to="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </PageHero>
      <section className="py-20 text-center">
        <div className="max-w-lg mx-auto px-4">
          <div className="glass rounded-2xl p-10">
            <p className="text-text-secondary text-lg mb-6">Full content for this page is ready to be populated. The routing, layout, and branding are all in place.</p>
            <Link to="/services" className="btn-primary">← View All Services</Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
