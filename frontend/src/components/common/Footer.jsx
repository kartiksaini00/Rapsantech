import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, Twitter, Linkedin, Youtube, Facebook, Globe } from 'lucide-react'

function RapsanIcon({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 3C13.373 3 8 8.373 8 15c0 9 12 22 12 22s12-13 12-22C32 8.373 26.627 3 20 3z" fill="url(#footerPinGrad)" opacity="0.9"/>
      <path d="M6 10 Q3 15 6 20" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M3 7 Q-1 15 3 23" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M34 10 Q37 15 34 20" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M37 7 Q41 15 37 23" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M20 10 L16 17 h3 v5 h2 v-5 h3 L20 10z" fill="white"/>
      <defs>
        <linearGradient id="footerPinGrad" x1="8" y1="3" x2="32" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E40AF"/><stop offset="1" stopColor="#2563EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

const footerLinks = {
  Services: [
    { label: 'Vehicle Tracking', href: '/vehicle-tracking' },
    { label: 'Fleet Management', href: '/fleet-management' },
    { label: 'School Bus Tracking', href: '/school-bus-tracking' },
    { label: 'Employee Tracking', href: '/employee-tracking' },
    { label: 'Fuel Monitoring', href: '/fuel-monitoring' },
    { label: 'Asset Tracking', href: '/asset-tracking' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'GPS Devices', href: '/gps-devices' },
    { label: 'Mobile App', href: '/mobile-app' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Get Demo', href: '/demo' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <RapsanIcon className="w-10 h-10" />
              <div>
                <div className="font-poppins font-black text-xl tracking-tight">
                  <span className="text-white">RAP</span><span className="text-accent">SAN</span>
                </div>
                <div className="text-[10px] text-text-secondary font-semibold tracking-[0.2em] uppercase">TECH</div>
              </div>
            </Link>
            <p className="text-text-secondary text-sm italic font-medium mb-3">"Smart Tracking, Strong Business"</p>
            <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-xs">
              India's most advanced GPS fleet management platform. Track vehicles, monitor drivers, and optimize operations with AI-powered intelligence.
            </p>
            <div className="space-y-2">
              <a href="tel:+917668698853" className="flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                +91 7668698853
              </a>
              <a href="mailto:rapsantechoffical@gmail.com" className="flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                rapsantechoffical@gmail.com
              </a>
              <a href="https://www.rapsantech.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors">
                <Globe className="w-4 h-4 text-accent" />
                www.rapsantech.com
              </a>
              <a href="https://wa.me/917668698853" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-green-400 text-sm transition-colors">
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp Support
              </a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Linkedin, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 font-poppins">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-text-secondary hover:text-accent text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-white mb-1">Stay Updated</h4>
              <p className="text-text-secondary text-sm">Get the latest GPS tracking insights and product updates.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1 md:w-64 text-sm py-2.5"
              />
              <button className="btn-primary text-sm py-2.5 whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 gap-4">
          <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Rapsan Tech. All rights reserved. | Parveen kumar, Owner
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-secondary hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-secondary hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-text-secondary hover:text-white text-xs transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
