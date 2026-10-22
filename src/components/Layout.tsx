import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation } from 'react-router-dom'
import { getLocalizedValue, profile } from '../data/profile'
import { getRouteKey, normalizeLanguage } from '../utils/routes'
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
    document.title =
      routeKey && routeKey !== 'home'
        ? `${t(`nav.${routeKey}`)} · ${profile.name}`
        : `${profile.name} · ${getLocalizedValue(profile.role, currentLanguage)}`
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
