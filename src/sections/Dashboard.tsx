import { motion } from 'framer-motion'

const metrics = [
  { label: 'Req/segundo', value: '47.3k', change: '+12.4%', color: '#10b981' },
  { label: 'Custo por req', value: '$0.0012', change: '-8.2%', color: '#06b6d4' },
  { label: 'Precisão modelo', value: '99.2%', change: '+0.4%', color: '#7c3aed' },
]

export default function Dashboard() {
  return (
    <section id="produto" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#7c3aed] text-xs tracking-[0.3em] uppercase mb-3 font-mono"
          >
            Dashboard
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-6xl text-white"
          >
            Visibilidade total em tempo real
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-600 text-xs font-mono ml-2">nexus-dashboard.app</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-[#080c1a] rounded-xl p-6 border border-[#1a1f3a]">
                <p className="text-gray-600 text-xs mb-2 font-mono">{metric.label}</p>
                <p className="font-display font-bold text-3xl text-white mb-1">{metric.value}</p>
                <p className="text-xs font-medium" style={{ color: metric.color }}>{metric.change} vs ontem</p>
              </div>
            ))}
          </div>
          <div className="bg-[#080c1a] rounded-xl p-6 border border-[#1a1f3a]">
            <p className="text-gray-600 text-xs mb-4 font-mono">{'// Integração em 3 linhas'}</p>
            <pre className="text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed">
              <span className="text-[#7c3aed]">import</span>{' NexusAI '}
              <span className="text-[#7c3aed]">from</span>{' '}
              <span className="text-[#10b981]">'@nexus/sdk'</span>{'\n'}
              <span className="text-[#7c3aed]">const</span>{' nexus = '}
              <span className="text-[#7c3aed]">new</span>{' '}
              <span className="text-[#06b6d4]">NexusAI</span>
              {'({ apiKey: process.env.NEXUS_KEY })'}
              {'\n'}
              <span className="text-[#7c3aed]">const</span>{' result = '}
              <span className="text-yellow-400">await</span>
              {' nexus.'}
              <span className="text-[#06b6d4]">analyze</span>
              <span className="text-gray-400">{'(data)'}</span>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
