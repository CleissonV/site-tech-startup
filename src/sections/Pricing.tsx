import { motion } from 'framer-motion'
import PricingCard from '../components/ui/PricingCard'
import { pricing } from '../constants/data'

export default function Pricing() {
  return (
    <section id="preços" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3 font-mono"
        >
          Planos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-6xl text-white"
        >
          Simples e Transparente
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricing.map((plan, i) => (
          <PricingCard key={i} plan={plan} index={i} />
        ))}
      </div>
    </section>
  )
}
