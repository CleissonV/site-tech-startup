import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import type { PricingPlan } from '../../types'

interface Props {
  plan: PricingPlan
  index: number
}

export default function PricingCard({ plan, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2"
      style={{
        background: plan.color,
        borderColor: plan.border,
        boxShadow: plan.highlight ? '0 0 40px rgba(124,58,237,0.15)' : 'none',
      }}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white text-xs font-medium rounded-full whitespace-nowrap">
          Mais Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-display font-bold text-2xl text-white mb-1">{plan.name}</h3>
        <p className="text-gray-500 text-sm">{plan.desc}</p>
      </div>
      <div className="mb-6">
        <span className="font-display font-bold text-4xl text-white">{plan.price}</span>
        <span className="text-gray-500 text-sm">{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((f, j) => (
          <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
            <FaCheck size={12} style={{ color: plan.highlight ? '#7c3aed' : '#06b6d4', flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`block text-center py-3 rounded-xl text-sm font-medium transition-all ${plan.highlight ? 'bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white hover:opacity-90' : 'border text-gray-300 hover:text-white hover:border-gray-400'}`}
        style={!plan.highlight ? { borderColor: plan.border } : {}}
      >
        {plan.cta}
      </a>
    </motion.div>
  )
}
