import { motion } from 'framer-motion'
import { MapPin, Zap, Shield, BarChart3, Bell, Route, Fuel, Clock, Navigation, Lock } from 'lucide-react'

const features = [
  { icon: MapPin, title: 'Real-Time Tracking', desc: 'Track your entire fleet with sub-second accuracy on live maps with detailed route visualization.', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, title: 'AI Route Optimization', desc: 'Smart algorithms reduce travel time and fuel consumption by up to 30% automatically.', color: 'from-purple-500 to-pink-500' },
  { icon: Shield, title: 'Geo-Fence Alerts', desc: 'Set virtual boundaries and get instant alerts when vehicles enter or exit defined zones.', color: 'from-green-500 to-emerald-500' },
  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Comprehensive reports on fleet performance, driver behavior, and operational efficiency.', color: 'from-orange-500 to-red-500' },
  { icon: Bell, title: 'Smart Notifications', desc: 'Instant SMS, email, and push alerts for overspeeding, harsh braking, idle time, and more.', color: 'from-yellow-500 to-orange-500' },
  { icon: Fuel, title: 'Fuel Monitoring', desc: 'Detect fuel theft, monitor consumption patterns, and generate detailed fuel reports.', color: 'from-cyan-500 to-blue-500' },
  { icon: Route, title: 'Route History', desc: 'Access full trip playback, stop duration, and detailed journey history for all vehicles.', color: 'from-indigo-500 to-purple-500' },
  { icon: Clock, title: 'Driver Behavior', desc: 'Monitor harsh events, overspeeding, night driving, and generate driver scorecards.', color: 'from-pink-500 to-rose-500' },
  { icon: Navigation, title: 'Live Navigation', desc: 'Two-way integration with driver apps for live navigation and real-time task updates.', color: 'from-teal-500 to-green-500' },
  { icon: Lock, title: 'Remote Immobilizer', desc: 'Remotely cut engine power to stop unauthorized vehicle movement instantly.', color: 'from-red-500 to-orange-500' },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-accent text-sm font-medium mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            Platform Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Everything You Need to{' '}
            <span className="gradient-text">Run a Smarter Fleet</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            A complete GPS intelligence platform with 50+ features designed for modern fleet operations in India and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-glow p-5 group cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm leading-snug">{feature.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
