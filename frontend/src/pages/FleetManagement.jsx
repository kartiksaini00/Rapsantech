import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { Link } from 'react-router-dom'
import { BarChart3, Fuel, Users, Wrench, ArrowRight } from 'lucide-react'
const pv = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }
const features = [
  { icon: BarChart3, title: 'Fleet Analytics Dashboard', desc: 'Real-time overview of your entire fleet — distance, fuel, alerts, driver scores, and KPIs on one screen.', color: 'text-blue-400' },
  { icon: Fuel, title: 'Fuel Cost Management', desc: 'Monitor fuel consumption, detect theft, and reduce fuel expenses by up to 30%.', color: 'text-red-400' },
  { icon: Users, title: 'Driver Behavior Monitoring', desc: 'Score drivers on harsh braking, overspeeding, night driving and generate actionable reports.', color: 'text-green-400' },
  { icon: Wrench, title: 'Maintenance Scheduling', desc: 'Set alerts for oil changes, tyre rotation, service due dates and track vehicle health.', color: 'text-yellow-400' },
]
export default function FleetManagement() {
  return (
    <motion.div variants={pv} initial="initial" animate="animate" exit="exit">
      <PageHero badge="Fleet Management" title="Complete Fleet" highlight="Command Center" subtitle="Manage your entire fleet from one intelligent dashboard. Analytics, maintenance, fuel, drivers — everything in one place." >
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link to="/demo" className="btn-primary">Request Demo</Link>
          <Link to="/pricing" className="btn-secondary">View Pricing</Link>
        </div>
      </PageHero>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-7 hover:border-primary/30 transition-all flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center flex-shrink-0"><Icon className={`w-6 h-6 ${f.color}`} /></div>
                <div><h3 className="font-bold text-white mb-1">{f.title}</h3><p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p></div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
