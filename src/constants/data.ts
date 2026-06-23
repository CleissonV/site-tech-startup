import { MdAutoAwesome, MdSpeed, MdSecurity, MdAnalytics } from 'react-icons/md'
import { FaCode, FaCog } from 'react-icons/fa'
import type { Feature, PricingPlan, Stat, Partner, Testimonial } from '../types'

export const features: Feature[] = [
  { icon: MdAutoAwesome, title: 'IA Generativa', desc: 'Modelos de linguagem de última geração treinados para o seu setor. Automatize processos complexos com precisão.' },
  { icon: MdSpeed, title: 'Performance 10x', desc: 'Infraestrutura distribuída em 12 regiões globais. Latência < 50ms garantida por SLA.' },
  { icon: MdSecurity, title: 'Segurança Enterprise', desc: 'SOC2 Type II, ISO 27001, LGPD compliant. Criptografia end-to-end em todos os dados.' },
  { icon: MdAnalytics, title: 'Analytics em Tempo Real', desc: 'Dashboards inteligentes com insights automáticos. Decida com dados, não com suposições.' },
  { icon: FaCode, title: 'API First', desc: 'REST e GraphQL com SDKs em 12 linguagens. Integre em minutos, não em semanas.' },
  { icon: FaCog, title: 'Automação Total', desc: 'Workflows visuais sem código. Conecte 200+ aplicações e automatize qualquer processo.' },
]

export const pricing: PricingPlan[] = [
  {
    name: 'Starter', price: 'R$ 297', period: '/mês', desc: 'Perfeito para startups',
    features: ['5 usuários', '10k requisições/mês', 'API básica', 'Suporte por e-mail', '1 workspace'],
    cta: 'Começar Agora', highlighted: false, highlight: false,
    color: '#0d1129', border: '#2a2f5a',
  },
  {
    name: 'Pro', price: 'R$ 897', period: '/mês', desc: 'Para equipes em crescimento',
    features: ['25 usuários', '100k requisições/mês', 'API completa + webhooks', 'Suporte prioritário 24/7', '5 workspaces', 'Analytics avançado'],
    cta: 'Começar Agora', highlighted: true, highlight: true,
    color: '#120a2e', border: '#7c3aed',
  },
  {
    name: 'Enterprise', price: 'Custom', period: '', desc: 'Para grandes organizações',
    features: ['Usuários ilimitados', 'Requisições ilimitadas', 'API dedicada + SLA 99.99%', 'CSM dedicado', 'Workspaces ilimitados', 'On-premise disponível'],
    cta: 'Falar com Vendas', highlighted: false, highlight: false,
    color: '#031a1f', border: '#06b6d4',
  },
]

export const stats: Stat[] = [
  { n: '3.2M+', l: 'Requisições/dia' },
  { n: '99.99%', l: 'Uptime SLA' },
  { n: '500+', l: 'Empresas' },
  { n: '< 50ms', l: 'Latência média' },
]

export const partners: Partner[] = [
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'Mistral' },
  { name: 'Meta AI' },
  { name: 'DeepMind' },
  { name: 'Cohere' },
  { name: 'Stability' },
  { name: 'Runway' },
]

export const testimonials: Testimonial[] = [
  { name: 'Carlos M.', role: 'CTO · Fintech Brasil', text: 'NexusAI reduziu nosso tempo de análise de dados em 80%. A API é absurdamente simples de integrar e o suporte é excepcional.' },
  { name: 'Beatriz R.', role: 'Head of Ops · E-commerce XP', text: 'Automatizamos 90% do nosso atendimento ao cliente sem perder qualidade. O ROI foi visível no primeiro mês.' },
  { name: 'André T.', role: 'CEO · SaaS Factory', text: 'A melhor plataforma de IA enterprise que testamos. Performance, segurança e facilidade de uso em um só lugar.' },
]
