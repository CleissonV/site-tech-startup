import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown, FaCheck, FaRocket, FaBolt, FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdAutoAwesome, MdSpeed, MdSecurity, MdAnalytics } from 'react-icons/md'
import { FaCode, FaCog } from 'react-icons/fa'

const ParticleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, (_, i) => ({
      x: ((i * 137.5) % 100) / 100 * window.innerWidth,
      y: ((i * 97.3) % 100) / 100 * window.innerHeight,
      vx: (((i * 31) % 10) / 10 - 0.5) * 0.4,
      vy: (((i * 53) % 10) / 10 - 0.5) * 0.4,
      radius: ((i % 3) * 0.5) + 0.5,
      opacity: ((i % 5) * 0.1) + 0.1,
      color: ['#7c3aed', '#06b6d4', '#10b981'][i % 3]
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex(i => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText(prev => deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1))
      }, deleting ? 50 : 100)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return <span className="text-purple-400 cursor-blink">{text}</span>
}

const partners = ['OpenAI', 'Anthropic', 'Mistral', 'Meta AI', 'DeepMind', 'Cohere', 'Stability', 'Runway']

const features = [
  { icon: MdAutoAwesome, title: 'IA Generativa', desc: 'Modelos de linguagem de última geração treinados para o seu setor. Automatize processos complexos com precisão.' },
  { icon: MdSpeed, title: 'Performance 10x', desc: 'Infraestrutura distribuída em 12 regiões globais. Latência < 50ms garantida por SLA.' },
  { icon: MdSecurity, title: 'Segurança Enterprise', desc: 'SOC2 Type II, ISO 27001, LGPD compliant. Criptografia end-to-end em todos os dados.' },
  { icon: MdAnalytics, title: 'Analytics em Tempo Real', desc: 'Dashboards inteligentes com insights automáticos. Decida com dados, não com suposições.' },
  { icon: FaCode, title: 'API First', desc: 'REST e GraphQL com SDKs em 12 linguagens. Integre em minutos, não em semanas.' },
  { icon: FaCog, title: 'Automação Total', desc: 'Workflows visuais sem código. Conecte 200+ aplicações e automatize qualquer processo.' },
]

const pricing = [
  {
    name: 'Starter', price: 'R$ 297', period: '/mês', desc: 'Perfeito para startups',
    features: ['5 usuários', '10k requisições/mês', 'API básica', 'Suporte por e-mail', '1 workspace'],
    color: '#0d1129', border: '#2a2f5a', highlight: false
  },
  {
    name: 'Pro', price: 'R$ 897', period: '/mês', desc: 'Para equipes em crescimento',
    features: ['25 usuários', '100k requisições/mês', 'API completa + webhooks', 'Suporte prioritário 24/7', '5 workspaces', 'Analytics avançado'],
    color: '#120a2e', border: '#7c3aed', highlight: true
  },
  {
    name: 'Enterprise', price: 'Custom', period: '', desc: 'Para grandes organizações',
    features: ['Usuários ilimitados', 'Requisições ilimitadas', 'API dedicada + SLA 99.99%', 'CSM dedicado', 'Workspaces ilimitados', 'On-premise disponível'],
    color: '#031a1f', border: '#06b6d4', highlight: false
  },
]

const stats = [
  { n: '3.2M+', l: 'Requisições/dia' },
  { n: '99.99%', l: 'Uptime SLA' },
  { n: '500+', l: 'Empresas' },
  { n: '< 50ms', l: 'Latência média' },
]

const FeatureCard = ({ f, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="glass-card rounded-2xl p-8 group cursor-default border border-transparent hover:border-[#7c3aed]/50 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.12))' }}>
        <f.icon className="text-[#7c3aed] group-hover:text-[#06b6d4] transition-colors" size={22} />
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-2">{f.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
    </motion.div>
  )
}

const PricingCard = ({ plan, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15 }}
      className="relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2"
      style={{
        background: plan.color,
        borderColor: plan.border,
        boxShadow: plan.highlight ? '0 0 40px rgba(124,58,237,0.15)' : 'none'
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
        {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
      </a>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#03040f]">
      <div className="scan-line" />
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
      />

      {/* Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#03040f]/90 backdrop-blur-xl border-b border-[#1a1f3a] py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 22V10l10 12V10" /></svg>
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

      {/* Hero */}
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
            <TypeWriter words={['transforma dados', 'acelera negócios', 'automatiza tudo', 'gera receita']} />
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

      {/* Features */}
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
            <FeatureCard key={i} f={f} i={i} />
          ))}
        </div>
      </section>

      {/* AI Image + Partners */}
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

        {/* Partners marquee */}
        <div className="border-t border-[#1a1f3a] pt-12">
          <p className="text-center text-gray-600 text-xs tracking-[0.3em] uppercase font-mono mb-8">Compatível com os líderes do ecossistema</p>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={i}
                  className="text-gray-500 font-display font-bold text-lg hover:text-[#7c3aed] transition-colors cursor-default flex-shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product showcase */}
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
              {[
                { label: 'Req/segundo', value: '47.3k', change: '+12.4%', color: '#10b981' },
                { label: 'Custo por req', value: '$0.0012', change: '-8.2%', color: '#06b6d4' },
                { label: 'Precisão modelo', value: '99.2%', change: '+0.4%', color: '#7c3aed' }
              ].map((metric, i) => (
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

      {/* Pricing */}
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
            <PricingCard key={i} plan={plan} i={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
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
          {[
            { name: 'Carlos M.', role: 'CTO · Fintech Brasil', text: 'NexusAI reduziu nosso tempo de análise de dados em 80%. A API é absurdamente simples de integrar e o suporte é excepcional.' },
            { name: 'Beatriz R.', role: 'Head of Ops · E-commerce XP', text: 'Automatizamos 90% do nosso atendimento ao cliente sem perder qualidade. O ROI foi visível no primeiro mês.' },
            { name: 'André T.', role: 'CEO · SaaS Factory', text: 'A melhor plataforma de IA enterprise que testamos. Performance, segurança e facilidade de uso em um só lugar.' },
          ].map((t, i) => (
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

      {/* CTA */}
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

      <footer className="py-10 border-t border-[#1a1f3a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center">
                <FaBolt className="text-white" size={10} />
              </div>
              <span className="font-display font-bold gradient-text text-lg">NexusAI</span>
            </div>
            <div className="flex gap-8 text-xs text-gray-600">
              {['Produto', 'Preços', 'Documentação', 'Blog', 'Termos', 'Privacidade'].map(l => (
                <a key={l} href="#" className="hover:text-gray-400 transition-colors">{l}</a>
              ))}
            </div>
            <div className="flex gap-4">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-700 hover:text-[#7c3aed] transition-colors"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1a1f3a] pt-6 text-center">
            <p className="text-gray-700 text-xs">© 2024 NexusAI Technologies Ltda. CNPJ 00.000.000/0001-00. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
