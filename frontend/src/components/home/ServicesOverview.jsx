import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, BarChart2, Bus, Users, Fuel, Package, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Vehicle Tracking',
    desc: 'Real-time GPS tracking with live maps, route history, and instant alerts for your entire fleet.',
    href: '/vehicle-tracking',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'hover:border-blue-500/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: BarChart2,
    title: 'Fleet Management',
    desc: 'Comprehensive fleet analytics, maintenance scheduling, driver scorecards, and performance reporting.',
    href: '/fleet-management',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'hover:border-purple-500/40',
    iconColor: 'text-purple-400',
  },
  {
    icon: Bus,
    title: 'School Bus Tracking',
    desc: 'Keep parents informed with live bus tracking, stop alerts, and student safety notifications.',
    href: '/school-bus-tracking',
    color: 'from-yellow-500/20 to-orange-500/10',
    border: 'hover:border-yellow-500/40',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Users,
    title: 'Employee Tracking',
    desc: 'Monitor field staff, track attendance, manage routes, and boost mobile workforce productivity.',
    href: '/employee-tracking',
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'hover:border-green-500/40',
    iconColor: 'text-green-400',
  },
  {
    icon: Fuel,
    title: 'Fuel Monitoring',
    desc: 'Detect fuel theft, analyze consumption, and generate detailed mileage & cost reports.',
    href: '/fuel-monitoring',
    color: 'from-red-500/20 to-orange-500/10',
    border: 'hover:border-red-500/40',
    iconColor: 'text-red-400',
  },
  {
    icon: Package,
    title: 'Asset Tracking',
    desc: 'Protect high-value assets with GPS trackers, geo-fencing, and theft prevention alerts.',
    href: '/asset-tracking',
    color: 'from-cyan-500/20 to-teal-500/10',
    border: 'hover:border-cyan-500/40',
    iconColor: 'text-cyan-400',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-surface/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/30 text-accent text-sm font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Complete GPS Tracking{' '}
            <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            From single-vehicle tracking to enterprise fleet management, we have the right solution for every business size.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative card ${svc.border} transition-all duration-300 overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-60`} />
                <div className="relative p-7">
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center mb-5">
                    <Icon className={`w-6 h-6 ${svc.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-white mb-3">{svc.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <Link
                    to={svc.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${svc.iconColor} hover:gap-2.5 transition-all duration-200 group`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
