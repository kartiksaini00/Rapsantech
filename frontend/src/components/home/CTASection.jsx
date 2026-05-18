import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  'No setup fees', 'Free onboarding', '14-day free trial', '24/7 support', 'Cancel anytime'
]

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-primary/20 box-glow"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-accent text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Limited Time Offer — First 3 Months Free
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-4xl md:text-5xl font-bold mb-4"
          >
            Start Tracking Your Fleet{' '}
            <span className="gradient-text">Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto"
          >
            Join 2,000+ businesses saving time, fuel, and money with Rapsan Tech. Get up and running in under 30 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {benefits.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm text-text-secondary">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/demo" className="btn-primary text-base px-10 py-4">
              <Zap className="w-5 h-5" />
              Get Free Demo
            </Link>
            <Link to="/pricing" className="btn-secondary text-base px-10 py-4">
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
