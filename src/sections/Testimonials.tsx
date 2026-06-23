import { motion } from 'framer-motion'
import { testimonials } from '../constants/data'

export default function Testimonials() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3 font-mono"
        >
          Clientes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-white"
        >
          O que dizem sobre nós
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-[#7c3aed] text-xs">★</span>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="text-white text-sm font-medium">{t.name}</div>
              <div className="text-gray-600 text-xs mt-0.5">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
