import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1), rgba(16,185,129,0.05))' }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6"
        >
          Pronto para escalar<br />com <span className="gradient-text">inteligência</span>?
        </motion.h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Junte-se a 500+ empresas que já transformaram seus processos com NexusAI. Setup em minutos, resultados imediatos.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-medium rounded-xl text-lg hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
        >
          <FaRocket size={18} /> Criar Conta Grátis
        </a>
        <p className="text-gray-600 text-sm mt-4">Sem cartão de crédito · 14 dias grátis · Cancele quando quiser</p>
      </div>
    </section>
  )
}
