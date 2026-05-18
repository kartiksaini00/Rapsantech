import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 5000, suffix: '+', label: 'Vehicles Tracked', desc: 'Across India & abroad' },
  { value: 2000, suffix: '+', label: 'Fleet Clients', desc: 'SME to Enterprise' },
  { value: 99, suffix: '.9%', label: 'Uptime SLA', desc: 'Industry-leading reliability' },
  { value: 5, suffix: '+', label: 'Years Experience', desc: 'GPS tracking expertise' },
  { value: 30, suffix: '%', label: 'Fuel Savings', desc: 'Average client reduction' },
  { value: 24, suffix: '/7', label: 'Support', desc: 'Round-the-clock assistance' },
]

export default function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="stat-card"
            >
              <div className="text-3xl font-bold font-poppins gradient-text mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-text-secondary">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
