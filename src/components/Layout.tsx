import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation } from 'react-router-dom'
import { getLocalizedValue, profile } from '../data/profile'
import { getRouteKey, getRoutePath, normalizeLanguage } from '../utils/routes'
import ContactCta from './ContactCta'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)
  const routeKey = getRouteKey(location.pathname)

  useEffect(() => {
    document.documentElement.lang = currentLanguage
  }, [currentLanguage])

  useEffect(() => {
    const title =
      routeKey && routeKey !== 'home'
        ? `${t(`nav.${routeKey}`)} · ${profile.name}`
        : `${profile.name} · ${getLocalizedValue(profile.role, currentLanguage)}`
    const description = t(`seo.${routeKey ?? 'home'}`)

    document.title = title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute(
      'content',
      new URL(getRoutePath(routeKey ?? 'home', currentLanguage), profile.website).href,
    )
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', description)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute(
      'href',
      new URL(getRoutePath(routeKey ?? 'home', currentLanguage), profile.website).href,
    )
  }, [routeKey, currentLanguage, t])

  return (
    <div className="flex min-h-screen flex-col bg-ink text-paper">
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      {routeKey === 'contact' ? null : <ContactCta />}
      <Footer />
    </div>
  )
}

export default Layout
