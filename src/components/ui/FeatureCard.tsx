import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Feature } from '../../types'

interface Props {
  feature: Feature
  index: number
}

export default function FeatureCard({ feature, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-8 group cursor-default border border-transparent hover:border-[#7c3aed]/50 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.12))' }}>
        <feature.icon className="text-[#7c3aed] group-hover:text-[#06b6d4] transition-colors" size={22} />
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  )
}
