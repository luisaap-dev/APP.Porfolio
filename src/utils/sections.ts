import type { RouteKey } from './routes'

// Numeración editorial de las secciones, en el mismo orden que la navegación
export const sectionNumbers: Record<RouteKey, string> = {
  home: '00',
  projects: '01',
  experience: '02',
  education: '03',
  remoteSupport: '04',
  contact: '05',
}
