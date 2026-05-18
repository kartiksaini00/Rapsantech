import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How does GPS Fleet Pro work?', a: 'We install a compact GPS device in your vehicle. It sends real-time location, speed, and diagnostic data to our cloud servers every 10 seconds. You can view everything on our web dashboard or mobile app instantly.' },
  { q: 'How long does installation take?', a: 'Professional installation takes 30–45 minutes per vehicle. Our certified technicians visit your location. No downtime is required — your vehicles can be tracked immediately after installation.' },
  { q: 'Is there a minimum fleet size requirement?', a: 'No minimum! We serve single-vehicle owners as well as enterprises with 10,000+ vehicles. All plans scale seamlessly.' },
  { q: 'What happens if GPS signal is lost?', a: 'Our devices store up to 72 hours of data locally and sync automatically when signal is restored. You never lose historical trip data.' },
  { q: 'Can I track vehicles from my mobile phone?', a: 'Yes! Our iOS and Android apps offer full-featured tracking including live maps, alerts, reports, and driver communication.' },
  { q: 'What is the accuracy of GPS tracking?', a: 'Our devices achieve 2–5 meter accuracy under open sky conditions, with enhanced performance using GLONASS + GPS dual satellite systems.' },
  { q: 'Do you offer a free trial?', a: 'Yes! All plans include a 14-day free trial with full access to all features. No credit card required to start.' },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-white pr-4 text-sm">{q}</span>
        <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-4"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary"
          >
            Everything you need to know about GPS Fleet Pro.
          </motion.p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
