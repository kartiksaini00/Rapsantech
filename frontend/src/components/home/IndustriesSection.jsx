import { motion } from 'framer-motion'
import { Truck, Building2, Ambulance, Bus, Package, Hammer, Users, Snowflake } from 'lucide-react'

const industries = [
  { icon: Truck, title: 'Logistics & Transport', desc: 'Real-time cargo tracking, route optimization, and delivery management.', count: '400+ clients' },
  { icon: Building2, title: 'Mining & Construction', desc: 'Heavy equipment tracking, utilization reports, and safety compliance.', count: '200+ clients' },
  { icon: Ambulance, title: 'Ambulance Services', desc: 'Emergency dispatch routing, response time tracking, and fleet compliance.', count: '80+ clients' },
  { icon: Bus, title: 'School Transport', desc: 'Parent alerts, live bus tracking, and student safety management.', count: '300+ schools' },
  { icon: Package, title: 'Delivery & E-Commerce', desc: 'Last-mile delivery tracking, customer notifications, and proof of delivery.', count: '500+ clients' },
  { icon: Hammer, title: 'Construction', desc: 'Equipment utilization, site management, and maintenance scheduling.', count: '150+ clients' },
  { icon: Users, title: 'Employee Transport', desc: 'Staff shuttle tracking, attendance logging, and route management.', count: '250+ clients' },
  { icon: Snowflake, title: 'Cold Chain Logistics', desc: 'Temperature monitoring, refrigeration alerts, and compliance reporting.', count: '100+ clients' },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-accent text-sm font-medium mb-4"
          >
            Industries We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Built for Every{' '}
            <span className="gradient-text">Industry</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            GPS Fleet Pro serves 8+ industry verticals with customized tracking solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="card p-5 text-center group cursor-default hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:from-primary/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 leading-snug">{ind.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-2">{ind.desc}</p>
                <span className="text-xs text-accent font-medium">{ind.count}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
