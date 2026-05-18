import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Zap, MapPin, Truck, Activity, Shield, ChevronRight, Navigation } from 'lucide-react'

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

const vehicles = [
  { id: 'TN01-AB1234', lat: '28.6°N', lng: '77.2°E', speed: '62', status: 'Moving' },
  { id: 'MH02-CD5678', lat: '19.1°N', lng: '72.9°E', speed: '0', status: 'Parked' },
  { id: 'KA03-EF9012', lat: '12.9°N', lng: '77.6°E', speed: '48', status: 'Moving' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/40 text-accent text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Rapsan Tech — Live Tracking for 5,000+ Vehicles
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-poppins text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6"
            >
              Smart GPS Tracking for{' '}
              <span className="gradient-text">Modern Fleet</span>{' '}
              Businesses
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="text-accent font-semibold italic text-lg">"Smart Tracking, Strong Business"</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-text-secondary text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Rapsan Tech — track vehicles in real time, optimize operations, reduce fuel costs, and monitor your fleet using AI-powered GPS intelligence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/demo" className="btn-primary text-base px-8 py-4">
                <Zap className="w-5 h-5" />
                Get Free Demo
              </Link>
              <button className="btn-secondary text-base px-8 py-4 group">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <Play className="w-4 h-4 text-accent fill-accent ml-0.5" />
                </div>
                Watch Live Tracking
              </button>
            </motion.div>

            {/* Micro stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { value: '50K+', label: 'Vehicles Tracked' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '2,000+', label: 'Fleet Clients' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold font-poppins gradient-text">{stat.value}</div>
                  <div className="text-text-secondary text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative glass rounded-3xl p-5 border border-white/10 box-glow"
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">Fleet Dashboard — Live</span>
                </div>
                <div className="text-xs text-text-secondary font-mono">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>

              {/* Fake map */}
              <div className="relative bg-surface rounded-2xl overflow-hidden h-48 mb-4">
                <div className="absolute inset-0 bg-dots opacity-50" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(6,182,212,0.05) 100%)',
                    backgroundImage: `
                      linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />
                {/* Route line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                  <path
                    d="M 60,160 C 100,140 150,80 200,90 S 280,120 340,60"
                    stroke="url(#routeGrad)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="6 3"
                    opacity="0.7"
                  />
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Pins */}
                {[
                  { x: '15%', y: '80%', active: true },
                  { x: '50%', y: '45%', active: true },
                  { x: '80%', y: '30%', active: false },
                ].map((pin, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: pin.x, top: pin.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${pin.active ? 'bg-accent' : 'bg-text-secondary'}`}>
                      <Truck className="w-3 h-3 text-white" />
                    </div>
                    {pin.active && (
                      <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                    )}
                  </div>
                ))}
                <div className="absolute bottom-3 left-3 text-xs text-text-secondary font-mono bg-dark/60 px-2 py-1 rounded-lg">
                  NCR Region • Zoom 12x
                </div>
              </div>

              {/* Vehicle list */}
              <div className="space-y-2.5">
                {vehicles.map((v, i) => (
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between bg-surface rounded-xl px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${v.status === 'Moving' ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                        <Truck className={`w-3.5 h-3.5 ${v.status === 'Moving' ? 'text-green-400' : 'text-yellow-400'}`} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white font-mono">{v.id}</div>
                        <div className="text-[10px] text-text-secondary">{v.lat}, {v.lng}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-white">{v.speed} km/h</div>
                      <div className={`text-[10px] ${v.status === 'Moving' ? 'text-green-400' : 'text-yellow-400'}`}>{v.status}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-6 -right-8 glass rounded-2xl p-4 border border-white/10 animate-float-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary">Fleet Health</div>
                  <div className="text-lg font-bold gradient-text">98.2%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-8 glass rounded-2xl p-4 border border-white/10 animate-float-slow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary">Geofence Alerts</div>
                  <div className="text-base font-bold text-white">3 Active</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute top-1/2 -left-12 glass rounded-2xl p-3 border border-accent/20 animate-float"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-accent" />
                <div className="text-xs">
                  <div className="text-text-secondary">ETA Update</div>
                  <div className="text-white font-medium">12 mins</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
