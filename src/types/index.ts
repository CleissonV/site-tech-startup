import type { IconType } from 'react-icons'

export interface Feature {
  icon: IconType
  title: string
  desc: string
  tag?: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  desc: string
  features: string[]
  cta: string
  highlighted: boolean
  color: string
  border: string
  highlight: boolean
}

export interface Stat {
  n: string
  l: string
}

export interface Partner {
  name: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
}
