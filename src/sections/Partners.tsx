import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { partners } from '../constants/data'

export default function Partners() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1677442135136-760c813028c0?w=900&q=80&auto=format&fit=crop"
            alt="AI technology"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03040f] via-[#03040f]/30 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3 font-mono">Tecnologia de ponta</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Inteligência artificial<br /><span className="gradient-text">para o mundo real</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Nossa plataforma combina os modelos mais avançados do mercado com infraestrutura enterprise para entregar resultados mensuráveis. Da prototipagem à produção em minutos.
          </p>
          <ul className="space-y-3">
            {['Integração com GPT-4, Claude 3 e Gemini', 'Pipeline de dados totalmente gerenciado', 'Observabilidade e monitoramento em tempo real'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                <FaCheck size={12} className="text-[#7c3aed] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-[#1a1f3a] pt-12">
        <p className="text-center text-gray-600 text-xs tracking-[0.3em] uppercase font-mono mb-8">Compatível com os líderes do ecossistema</p>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={i}
                className="text-gray-500 font-display font-bold text-lg hover:text-[#7c3aed] transition-colors cursor-default flex-shrink-0"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
