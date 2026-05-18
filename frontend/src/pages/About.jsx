import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { Target, Eye, Award, Users, Truck, Globe, Heart, Zap } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 }
}

const timeline = [
  { year: '2020', event: 'Founded in Delhi with 3 employees and a vision to make GPS tracking affordable for Indian fleets.' },
  { year: '2022', event: 'Reached 500 clients milestone. Launched school bus tracking module serving 50 schools.' },
  { year: '2023', event: 'Expanded to 15 states. Launched mobile apps on iOS and Android. 5,000+ vehicles tracked.' },
  { year: '2024', event: 'Crossed 1,000 enterprise clients. Launched fuel monitoring and cold chain solutions.' },
  { year: '2025', event: '5,000+ vehicles, 2,000+ clients across 28 states. Expanding to Southeast India.' },
]

const values = [
  { icon: Heart, title: 'Customer First', desc: 'Every feature we build starts with a customer problem. Your success is our success.' },
  { icon: Award, title: 'Excellence', desc: '99.9% uptime, sub-second accuracy, and world-class support define our standard.' },
  { icon: Zap, title: 'Innovation', desc: 'Continuously investing in AI, ML, and IoT to keep your fleet ahead of the competition.' },
  { icon: Globe, title: 'Impact', desc: 'Reducing carbon emissions, improving safety, and making Indian roads smarter.' },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero
        badge="About Rapsan Tech"
        title="India's Most Trusted"
        highlight="Fleet Intelligence Platform"
        subtitle={`Founded in New Delhi, we've been on a mission to bring world-class GPS fleet management technology to Indian businesses of every size - "Smart Tracking, Strong Business."`}
      />

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8 border-l-4 border-l-primary">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold font-poppins text-white mb-3">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To empower every Indian business — from a 1-truck owner to a 10,000-vehicle enterprise — with affordable, powerful GPS fleet intelligence that drives profitability, safety, and efficiency.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8 border-l-4 border-l-accent">
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-bold font-poppins text-white mb-3">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To become the #1 GPS fleet management platform in india by 2030, helping 10,000 vehicles operate smarter, safer, and more sustainably through cutting-edge AI-powered tracking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Truck, value: '5,000+', label: 'Vehicles Tracked' },
              { icon: Users, value: '2,000+', label: 'Fleet Clients' },
              { icon: Globe, value: '15', label: 'States Covered' },
              { icon: Award, value: '5+', label: 'Years Experience' },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="stat-card">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold gradient-text font-poppins mb-1">{s.value}</div>
                  <div className="text-text-secondary text-sm">{s.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Our <span className="gradient-text">Core Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glow p-6 text-center hover:border-primary/30">
                  <div className="feature-icon mx-auto mb-4"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-surface/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Our <span className="gradient-text">Journey</span></h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="text-sm font-bold gradient-text font-poppins">{t.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent mt-0.5 relative z-10" />
                  <div className="card p-4 flex-1">
                    <p className="text-text-secondary text-sm leading-relaxed">{t.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
