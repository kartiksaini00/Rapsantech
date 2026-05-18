import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { Link } from 'react-router-dom'
import { MapPin, Route, Bell, Shield, Activity, Clock, ArrowRight, CheckCircle } from 'lucide-react'

const pv = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }
const features = [
  { icon: MapPin, title: 'Live GPS Tracking', desc: '10-second location updates on interactive maps with satellite/street view toggle.', color: 'text-blue-400' },
  { icon: Route, title: 'Route History & Playback', desc: 'Full trip replay with speed graph, stop analysis, and mileage reports.', color: 'text-cyan-400' },
  { icon: Bell, title: 'Instant Alerts', desc: 'SMS/email alerts for overspeeding, harsh braking, idle time, and geofence violations.', color: 'text-yellow-400' },
  { icon: Shield, title: 'Geo-Fencing', desc: 'Draw unlimited virtual zones and get alerts when vehicles enter or exit.', color: 'text-green-400' },
  { icon: Activity, title: 'Fleet Analytics', desc: 'Daily, weekly, monthly reports on distance, fuel, and performance.', color: 'text-purple-400' },
  { icon: Clock, title: '24/7 Monitoring', desc: 'Round-the-clock tracking with 99.9% uptime and cloud-backed data storage.', color: 'text-pink-400' },
]
export default function VehicleTracking() {
  return (
    <motion.div variants={pv} initial="initial" animate="animate" exit="exit">
      <PageHero badge="Vehicle Tracking" title="Real-Time GPS" highlight="Vehicle Tracking" subtitle="Track every vehicle in your fleet with sub-10-second precision. Live maps, route history, alerts, and complete fleet visibility — all in one dashboard." >
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link to="/demo" className="btn-primary">Get Free Demo</Link>
          <Link to="/contact" className="btn-secondary">Contact Sales</Link>
        </div>
      </PageHero>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6 hover:border-primary/30 transition-all">
                <Icon className={`w-8 h-8 ${f.color} mb-4`} />
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
      <section className="py-12 bg-surface/20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to track your fleet?</h2>
          <p className="text-text-secondary mb-6">Install in 30 minutes. No downtime. Full support from Rapsan Tech.</p>
          <Link to="/demo" className="btn-primary">Book Free Installation Demo <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </motion.div>
  )
}
