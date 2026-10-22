export const supportedLanguages = ['es', 'en', 'gl'] as const

export type Language = (typeof supportedLanguages)[number]

export type RouteKey = 'home' | 'projects' | 'experience' | 'education' | 'remoteSupport' | 'contact'

const routeSlugs: Record<RouteKey, Record<Language, string>> = {
  home: {
    es: '',
    en: '',
    gl: '',
  },
  projects: {
    es: 'proyectos',
    en: 'projects',
    gl: 'proxectos',
  },
  experience: {
    es: 'experiencia',
    en: 'experience',
    gl: 'experiencia',
  },
  education: {
    es: 'formacion',
    en: 'education',
    gl: 'formacion',
  },
  remoteSupport: {
    es: 'soporte-remoto',
    en: 'remote-support',
    gl: 'soporte-remoto',
  },
  contact: {
    es: 'contacto',
    en: 'contact',
    gl: 'contacto',
  },
}

export function isLanguage(value: string | undefined): value is Language {
  return supportedLanguages.some((language) => language === value)
}

export function normalizeLanguage(language: string | undefined): Language {
  const locale = language?.split('-')[0]
  return isLanguage(locale) ? locale : 'es'
}

export function getRoutePath(routeKey: RouteKey, language: string | undefined): string {
  const locale = normalizeLanguage(language)
  const slug = routeSlugs[routeKey][locale]
  return slug ? `/${slug}` : '/'
}

export function getRouteKey(pathname: string): RouteKey | undefined {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '')

  for (const [routeKey, translations] of Object.entries(routeSlugs) as [RouteKey, Record<Language, string>][]) {
    if (Object.values(translations).includes(cleanPath)) {
      return routeKey
    }
  }

  return undefined
}

export function localizePath(pathname: string, language: string | undefined): string {
  if (!pathname || pathname === '/') {
    return '/'
  }

  const routeKey = getRouteKey(pathname)
  return routeKey ? getRoutePath(routeKey, language) : pathname
}

export { routeSlugs }
