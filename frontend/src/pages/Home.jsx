import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import ServicesOverview from '../components/home/ServicesOverview'
import IndustriesSection from '../components/home/IndustriesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'
import FAQSection from '../components/home/FAQSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesOverview />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </motion.div>
  )
}
