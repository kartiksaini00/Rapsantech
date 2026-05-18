import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Fleet Manager',
    company: 'TransLogix India',
    review: 'Rapsan tech gps service transformed our operations. We reduced fuel costs by 28% in the first 3 months and eliminated unauthorized vehicle use entirely.',
    rating: 5,
    avatar: 'RK',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    company: 'SwiftCargo Pvt Ltd',
    review: 'The real-time tracking and driver behavior reports have been game-changers. Our on-time delivery rate jumped from 78% to 96% within two months.',
    rating: 5,
    avatar: 'PS',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Amit Patel',
    role: 'School Principal',
    company: 'Delhi Public School',
    review: "Parents love the live bus tracking feature. We've received zero complaints about bus delays since installing Rapsan tech gps service across our 45 school buses.",
    rating: 5,
    avatar: 'AP',
    color: 'from-green-500 to-teal-500',
  },
  {
    name: 'Sunita Reddy',
    role: 'CEO',
    company: 'FastTrack Logistics',
    review: 'Switched from a competitor and the difference is night and day. The UI is clean, support is amazing, and the analytics dashboard is world-class.',
    rating: 5,
    avatar: 'SR',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Mohammed Ali',
    role: 'Transport Manager',
    company: 'GreenLine Ambulance',
    review: 'Critical for our emergency operations. The real-time dispatch and route optimization helped us cut average response time by 4 minutes.',
    rating: 5,
    avatar: 'MA',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Kavita Singh',
    role: 'HR Manager',
    company: 'TechPark Facilities',
    review: 'Employee tracking has become seamless. Attendance is auto-logged, managers get daily reports, and our employees feel safer with live tracking.',
    rating: 5,
    avatar: 'KS',
    color: 'from-pink-500 to-purple-500',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/30 text-accent text-sm font-medium mb-4"
          >
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Trusted by{' '}
            <span className="gradient-text">2,000+ Businesses</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-6 hover:border-primary/20 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-text-secondary text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
