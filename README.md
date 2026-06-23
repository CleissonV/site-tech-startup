<h1 align="center">NexusAI — Tech Startup</h1>

<p align="center">
  Site institucional para startup de inteligência artificial com canvas de partículas, efeito typewriter e seções de features, pricing e dashboard.
  <br /><br />
  <a href="https://site-tech-startup.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page completa para startup de IA. O hero combina um sistema de partículas feito com Canvas API puro, vídeo em loop e efeito de digitação customizado. Apresenta planos de preços, features da plataforma, parceiros e showcase do dashboard.

## Funcionalidades

- Sistema de partículas com Canvas API (80 partículas + linhas de conexão)
- Hook `useTypewriter` customizado com múltiplos textos
- Seção de features com 6 cards animados
- Marquee de logos de parceiros
- Showcase de dashboard com bloco de código
- Planos de preços com destaque no plano recomendado
- Seção de depoimentos de clientes

## Stack

- **React 18 + TypeScript** — componentes bem tipados
- **Tailwind CSS 3** — design utility-first
- **Framer Motion 11** — animações declarativas
- **Canvas API** — sistema de partículas sem biblioteca
- **Vite 5** — build ultrarrápido

## Instalação

```bash
git clone https://github.com/CleissonV/site-tech-startup
cd site-tech-startup
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # features, pricing, stats, partners
├── types/
│   └── index.ts         # Feature, PricingPlan, Stat, Partner
├── hooks/
│   └── useTypewriter.ts # hook de digitação
├── components/
│   └── ui/
│       ├── ParticleCanvas.tsx
│       ├── FeatureCard.tsx
│       └── PricingCard.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Partners.tsx
│   ├── Dashboard.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
