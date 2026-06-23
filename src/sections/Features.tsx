import { motion } from 'framer-motion'
import FeatureCard from '../components/ui/FeatureCard'
import { features } from '../constants/data'

export default function Features() {
  return (
    <section id="features" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3 font-mono"
        >
          Funcionalidades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-6xl text-white mb-4"
        >
          Tudo que sua empresa precisa
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-20 h-0.5 mx-auto"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} />
        ))}
      </div>
    </section>
  )
}
