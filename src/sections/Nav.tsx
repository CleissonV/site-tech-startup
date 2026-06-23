import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#03040f]/90 backdrop-blur-xl border-b border-[#1a1f3a] py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 22V10l10 12V10" />
            </svg>
          </div>
          <span className="gradient-text">NexusAI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {['Produto', 'Features', 'Preços', 'Empresa'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-gray-200 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</a>
          <a
            href="#preços"
            className="px-5 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Começar Grátis
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-purple-400">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080c1a] border-t border-[#1a1f3a]"
          >
            <div className="flex flex-col gap-4 p-6">
              {['Produto', 'Features', 'Preços', 'Empresa'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
