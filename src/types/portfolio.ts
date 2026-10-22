import type { Language } from '../utils/routes'

export type LocalizedText = Record<Language, string>

// Texto que no necesita traducción (nombres propios, tecnologías) o que sí la necesita
export type TextValue = string | LocalizedText

export interface Profile {
  name: string
  role: LocalizedText
  headline: LocalizedText
  summary: LocalizedText
  location: LocalizedText
  email: string
  mailHref: string
  website: string
  github: string
  linkedin: string
  rustdesk: string
}

export interface OverviewItem {
  title: LocalizedText
  value: string
  description: LocalizedText
}

export interface FocusArea {
  title: LocalizedText
  description: LocalizedText
}

export interface Project {
  title: TextValue
  label: LocalizedText
  summary: LocalizedText
  stack: string[]
  liveUrl?: string
  repoUrl?: string
}

export interface Experience {
  period: LocalizedText
  role: LocalizedText
  company?: string
  location: LocalizedText
  detail: LocalizedText
}

export interface Education {
  date: string
  title: LocalizedText
  place: string
}

export interface Skill {
  category: LocalizedText
  items: TextValue[]
}
