import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import { CheckCircle, X, Zap, ArrowRight } from 'lucide-react'

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }

const plans = [
  {
    name: 'Basic',
    price: '299',
    period: '/vehicle/month',
    desc: 'Perfect for small fleets and individual owners getting started with GPS tracking.',
    color: 'border-white/10',
    badge: null,
    features: [
      { text: 'Real-time GPS tracking', included: true },
      { text: 'Route history (30 days)', included: true },
      { text: 'Overspeeding alerts', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'Basic reports', included: true },
      { text: 'Email support', included: true },
      { text: 'Geo-fencing', included: false },
      { text: 'Fuel monitoring', included: false },
      { text: 'Driver scorecards', included: false },
      { text: 'API access', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '599',
    period: '/vehicle/month',
    desc: 'For growing businesses that need advanced analytics and full fleet intelligence.',
    color: 'border-primary/50',
    badge: 'Most Popular',
    features: [
      { text: 'Real-time GPS tracking', included: true },
      { text: 'Route history (1 year)', included: true },
      { text: 'All alert types', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'Advanced reports', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Geo-fencing', included: true },
      { text: 'Fuel monitoring', included: true },
      { text: 'Driver scorecards', included: true },
      { text: 'API access', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    desc: 'For large enterprises needing custom integrations, SLAs, and dedicated support.',
    color: 'border-accent/30',
    badge: 'Best Value',
    features: [
      { text: 'Real-time GPS tracking', included: true },
      { text: 'Unlimited route history', included: true },
      { text: 'All alert types', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'Custom reports', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Geo-fencing (unlimited)', included: true },
      { text: 'Fuel monitoring', included: true },
      { text: 'Driver scorecards', included: true },
      { text: 'Full API access', included: true },
    ],
  },
]

const comparison = [
  { feature: 'Live Tracking Interval', basic: '30 sec', pro: '10 sec', ent: '5 sec' },
  { feature: 'Vehicles per Account', basic: 'Up to 10', pro: 'Up to 100', ent: 'Unlimited' },
  { feature: 'Data Retention', basic: '30 days', pro: '1 year', ent: 'Unlimited' },
  { feature: 'User Accounts', basic: '2 users', pro: '10 users', ent: 'Unlimited' },
  { feature: 'Support Level', basic: 'Email', pro: '24/7 Phone', ent: 'Dedicated Manager' },
  { feature: 'SLA Guarantee', basic: '99%', pro: '99.5%', ent: '99.9%' },
]

export default function Pricing() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero badge="Pricing" title="Simple, Transparent" highlight="Pricing" subtitle="No hidden fees. No long-term contracts. Pay only for the vehicles you track." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`card p-7 border-2 ${plan.color} relative ${plan.name === 'Professional' ? 'box-glow scale-105' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-bold text-white">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold font-poppins text-white mb-1">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold gradient-text font-poppins">
                      {plan.price === 'Custom' ? '' : '₹'}{plan.price}
                    </span>
                    <span className="text-text-secondary text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm">
                      {f.included
                        ? <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        : <X className="w-4 h-4 text-text-secondary flex-shrink-0" />}
                      <span className={f.included ? 'text-white' : 'text-text-secondary line-through'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/demo" className={plan.name === 'Professional' ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <h3 className="text-xl font-bold font-poppins text-white">Plan Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-text-secondary text-sm font-medium">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Basic</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-surface/30' : ''}`}>
                      <td className="px-6 py-3.5 text-text-secondary text-sm">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center text-sm text-white">{row.basic}</td>
                      <td className="px-6 py-3.5 text-center text-sm text-accent font-medium">{row.pro}</td>
                      <td className="px-6 py-3.5 text-center text-sm text-white">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-1">All plans include a 14-day free trial</h3>
          <p className="text-accent italic font-medium text-sm mb-2">"Smart Tracking, Strong Business"</p>
          <p className="text-text-secondary mb-6">No credit card required. Full access to all Rapsan Tech features.</p>
          <Link to="/demo" className="btn-primary text-base px-10 py-4">
            <Zap className="w-5 h-5" />
            Start Free Trial
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
