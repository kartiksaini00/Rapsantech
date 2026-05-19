import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { Zap, CheckCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import axios from 'axios'

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }

const benefits = [
  'See live GPS tracking in action',
  'Custom demo for your industry',
  'Pricing consultation included',
  'No obligation, no credit card',
  'Onboarding walkthrough',
  '30-minute focused session',
]

export default function Demo() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', fleetSize: '', industry: '', requirements: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/demo', form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', fleetSize: '', industry: '', requirements: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero badge="Free Demo" title="See GPS Fleet Pro" highlight="in Action" subtitle="Book a 30-minute live demo with our fleet experts. We'll show you exactly how our platform can transform your operations." />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-white mb-6">What You'll Get</h2>
              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-white">Or reach us directly</h3>
                {[
                  { icon: Phone, label: 'Call us', value: '+91 7668698853', href: 'tel:+917668698853' },
                  { icon: Mail, label: 'Email us', value: 'rapsantechoffical@gmail.com', href: 'mailto:rapsantechoffical@gmail.com' },
                  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us now', href: 'https://wa.me/917668698853' },
                ].map((c) => {
                  const Icon = c.icon
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-text-secondary">{c.label}</div>
                        <div className="text-sm font-medium">{c.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right - Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="card p-8">
              <h2 className="text-xl font-bold font-poppins text-white mb-6">Request a Free Demo</h2>

              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
                  <p className="text-text-secondary">Our team will contact you within 24 hours to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="input-field" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                    <input className="input-field" type="email" placeholder="Email Address *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="input-field" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                    <input className="input-field" placeholder="Company Name *" value={form.company} onChange={e => setForm({...form, company: e.target.value})} required />
                  </div>
                  <select className="input-field" value={form.fleetSize} onChange={e => setForm({...form, fleetSize: e.target.value})} required>
                    <option value="">Fleet Size *</option>
                    <option value="1-10">1–10 Vehicles</option>
                    <option value="11-50">11–50 Vehicles</option>
                    <option value="51-200">51–200 Vehicles</option>
                    <option value="200+">200+ Vehicles</option>
                  </select>
                  <select className="input-field" value={form.industry} onChange={e => setForm({...form, industry: e.target.value})}>
                    <option value="">Industry (Optional)</option>
                    <option>Logistics & Transport</option>
                    <option>School Transport</option>
                    <option>Employee Transport</option>
                    <option>Construction & Mining</option>
                    <option>Delivery & E-Commerce</option>
                    <option>Ambulance Services</option>
                    <option>Cold Chain Logistics</option>
                    <option>Other</option>
                  </select>
                  <textarea className="input-field resize-none" rows={3} placeholder="Any specific requirements? (Optional)" value={form.requirements} onChange={e => setForm({...form, requirements: e.target.value})} />

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or contact us directly.</p>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base py-4">
                    {loading ? <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" /> : <Zap className="w-5 h-5" />}
                    {loading ? 'Submitting...' : 'Book My Free Demo'}
                  </button>

                  <p className="text-text-secondary text-xs text-center">No credit card required. We respond within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
