import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import { Truck, BarChart2, Bus, Users, Fuel, Package, MapPin, Bell, Wrench, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react'

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }

const services = [
  { icon: Truck, title: 'Vehicle Tracking', href: '/vehicle-tracking', color: 'text-blue-400', bg: 'from-blue-500/20 to-cyan-500/10', desc: 'Real-time GPS tracking with live maps, 10-second update intervals, route history, playback, and instant driver alerts.', features: ['Live map tracking', 'Route playback', 'Overspeeding alerts', 'Geo-fencing'] },
  { icon: BarChart2, title: 'Fleet Management', href: '/fleet-management', color: 'text-purple-400', bg: 'from-purple-500/20 to-pink-500/10', desc: 'Full fleet command center with analytics, maintenance scheduling, fuel reports, and multi-vehicle management.', features: ['Fleet analytics', 'Maintenance alerts', 'Driver scorecards', 'Fuel reports'] },
  { icon: Fuel, title: 'Fuel Monitoring', href: '/fuel-monitoring', color: 'text-red-400', bg: 'from-red-500/20 to-orange-500/10', desc: 'Detect fuel theft, analyze consumption patterns, and reduce fuel costs with sensor-based real-time monitoring.', features: ['Theft detection', 'Consumption reports', 'Cost analytics', 'Mileage tracking'] },
  { icon: Users, title: 'Driver Monitoring', href: '/fleet-management', color: 'text-green-400', bg: 'from-green-500/20 to-emerald-500/10', desc: 'Monitor harsh events, overspeeding, idle time, night driving, and generate driver behavior scorecards.', features: ['Behavior scoring', 'Harsh event alerts', 'Night driving reports', 'Performance ranking'] },
  { icon: Bus, title: 'School Bus Tracking', href: '/school-bus-tracking', color: 'text-yellow-400', bg: 'from-yellow-500/20 to-orange-500/10', desc: 'Keep students safe with live bus tracking, parent SMS notifications, stop alerts, and attendance integration.', features: ['Parent notifications', 'Live tracking', 'Stop alerts', 'Attendance logs'] },
  { icon: Users, title: 'Employee Tracking', href: '/employee-tracking', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-blue-500/10', desc: 'Track field staff in real time, auto-log attendance, manage routes, and analyze mobile workforce productivity.', features: ['Field staff tracking', 'Auto attendance', 'Route management', 'Productivity reports'] },
  { icon: Package, title: 'Asset Tracking', href: '/asset-tracking', color: 'text-indigo-400', bg: 'from-indigo-500/20 to-purple-500/10', desc: 'Protect high-value assets with GPS trackers, geo-fencing, tamper alerts, and warehouse logistics integration.', features: ['Geo-fencing', 'Tamper alerts', 'Location history', 'Multi-asset dashboard'] },
  { icon: MapPin, title: 'Route Optimization', href: '/fleet-management', color: 'text-pink-400', bg: 'from-pink-500/20 to-rose-500/10', desc: 'AI-powered routing that reduces travel time, fuel costs, and improves on-time delivery performance.', features: ['AI routing', 'Delivery planning', 'Traffic avoidance', 'Cost reduction'] },
  { icon: Wrench, title: 'GPS Installation', href: '/gps-devices', color: 'text-orange-400', bg: 'from-orange-500/20 to-red-500/10', desc: 'Professional device installation by certified technicians at your location. Covers all vehicle types.', features: ['Certified technicians', 'All vehicle types', '30-min install', 'Post-install support'] },
  { icon: AlertTriangle, title: 'SOS Emergency Alerts', href: '/vehicle-tracking', color: 'text-red-400', bg: 'from-red-500/20 to-pink-500/10', desc: 'One-touch SOS button for drivers. Instant alerts to fleet managers with live location and emergency protocol.', features: ['One-touch SOS', 'Instant alerts', 'Live location', 'Emergency protocols'] },
]

export default function Services() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero badge="Our Services" title="GPS Tracking Solutions" highlight="for Every Need" subtitle="10 specialized services designed to optimize every aspect of your fleet operations, from vehicle tracking to emergency management." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ y: -6 }} className="card overflow-hidden hover:border-primary/30 transition-all duration-300">
                  <div className={`bg-gradient-to-br ${svc.bg} p-6`}>
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-4">
                      <Icon className={`w-6 h-6 ${svc.color}`} />
                    </div>
                    <h3 className="text-xl font-bold font-poppins text-white mb-2">{svc.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={svc.href} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${svc.color} hover:gap-2.5 transition-all duration-200`}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-poppins text-white mb-4">Not sure which service you need?</h2>
          <p className="text-text-secondary mb-8">Talk to our fleet experts. We'll design a custom solution for your specific business needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary">Get Free Consultation</Link>
            <Link to="/contact" className="btn-secondary">Contact Sales</Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
