import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react'
import axios from 'axios'

const pageVariants = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.4 } }, exit: { opacity: 0 } }

const contactInfo = [
  { icon: Phone, title: 'Phone', value: '+91 7668698853', sub: 'Mon–Sat, 9am–7pm IST', href: 'tel:+917668698853', color: 'text-blue-400' },
  { icon: MessageCircle, title: 'WhatsApp', value: '+91 7668698853', sub: 'Available 24/7', href: 'https://wa.me/917668698853', color: 'text-green-400' },
  { icon: Mail, title: 'Email', value: 'rapsantechoffical@gmail.com', sub: 'Reply within 4 hours', href: 'mailto:rapsantechoffical@gmail.com', color: 'text-accent' },
  { icon: MapPin, title: 'Office', value: 'truck market sharanpur road Yamunanager', sub: 'Haryana, India', href: '#', color: 'text-purple-400' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <PageHero badge="Contact Us" title="Get in Touch" highlight="with Our Team" subtitle="Have questions about GPS tracking? Need a quote? Our fleet experts are ready to help." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.a key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="card p-5 text-center hover:border-primary/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mx-auto mb-3 ${c.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-white text-sm mb-0.5">{c.title}</div>
                  <div className={`text-sm font-medium ${c.color} mb-1`}>{c.value}</div>
                  <div className="text-text-secondary text-xs">{c.sub}</div>
                </motion.a>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8">
              <h2 className="text-xl font-bold font-poppins text-white mb-6">Send Us a Message</h2>
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">We'll get back to you within 4 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="input-field" placeholder="Full Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                    <input className="input-field" type="email" placeholder="Email *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="input-field" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    <input className="input-field" placeholder="Company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                  </div>
                  <input className="input-field" placeholder="Subject *" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required />
                  <textarea className="input-field resize-none" rows={5} placeholder="Your message *" value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
                  {status === 'error' && <p className="text-red-400 text-sm">Failed to send. Please try again.</p>}
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> : <Send className="w-4 h-4" />}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map placeholder */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card overflow-hidden">
              <div className="h-full min-h-[400px] relative bg-surface flex items-center justify-center">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(6,182,212,0.05) 100%)', backgroundImage: 'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Rapsan Tech HQ</h3>
                  <p className="text-text-secondary text-sm">truck market sharanpur road Yamunanager</p>
                  <p className="text-text-secondary text-sm">Haryana, India</p>
                  <a href="https://www.google.com/maps/place/Saharanpur+Rd,+Old+Hamida,+Yamuna+Nagar,+Haryana+135001/@30.115555,77.2818762,15.69z/data=!4m6!3m5!1s0x390efa2073c41717:0x395b2e6dfacbd75!8m2!3d30.1168337!4d77.2847372!16s%2Fg%2F11sk8_gx0h?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="inline-block mt-4 text-accent text-sm hover:underline">Open in Google Maps →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
