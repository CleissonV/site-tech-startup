import { motion } from 'framer-motion'
import { FaArrowRight, FaRocket, FaChevronDown } from 'react-icons/fa'
import ParticleCanvas from '../components/ui/ParticleCanvas'
import { useTypewriter } from '../hooks/useTypewriter'
import { stats } from '../constants/data'

export default function Hero() {
  const text = useTypewriter(['transforma dados', 'acelera negócios', 'automatiza tudo', 'gera receita'])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1677442135136-760c813028c0?w=1920&q=80&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#03040f]/70" />
      <ParticleCanvas />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(124,58,237,0.15) 0%, transparent 60%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 50%)' }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
          <span className="text-xs text-gray-400 font-mono">v2.0 · Agora com GPT-4 Turbo + Claude 3</span>
          <span className="text-xs text-[#10b981] font-medium">Novo →</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none mb-6"
        >
          <span className="text-white">IA que</span>
          <br />
          <span className="text-purple-400 cursor-blink">{text}</span>
          <br />
          <span className="gradient-text">de verdade</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Plataforma de inteligência artificial enterprise. Automatize processos, extraia insights e escale sua operação com os modelos mais avançados do mercado.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#preços"
            className="group px-8 py-4 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-medium rounded-xl hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
          >
            Começar Gratuitamente <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#produto"
            className="px-8 py-4 glass-card text-gray-300 font-medium rounded-xl hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <FaRocket size={14} /> Ver Demo
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-4 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="block font-display font-bold text-2xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent mb-1"
              >
                {s.n}
              </motion.span>
              <div className="text-gray-600 text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-purple-500 animate-bounce" size={16} />
      </motion.div>
    </section>
  )
}
