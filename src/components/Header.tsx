import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { getLocalizedValue, profile } from '../data/profile'
import { type Language, type RouteKey, getRoutePath, localizePath, normalizeLanguage, supportedLanguages } from '../utils/routes'
import { sectionNumbers } from '../utils/sections'
import ArrowIcon from './ArrowIcon'

// Cada idioma se nombra en su propia lengua, como recomienda WCAG
const languageNames: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  gl: 'Galego',
}

const navKeys: RouteKey[] = ['home', 'projects', 'experience', 'education', 'remoteSupport', 'contact']

const focusableSelector = 'a[href], button:not([disabled])'

function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const links = navKeys.map((key) => ({
    key,
    to: getRoutePath(key, currentLanguage),
    label: t(`nav.${key}`),
    end: key === 'home',
  }))

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', i18n.language)
  }, [i18n.language])

  // Al abrir: bloquea el scroll de fondo y lleva el foco al primer enlace
  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLElement>('nav a')?.focus()

    // Si la ventana pasa a escritorio con el menú abierto, se cierra
    const desktop = window.matchMedia('(min-width: 1280px)')
    function handleDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }
    desktop.addEventListener('change', handleDesktop)

    return () => {
      document.body.style.overflow = previousOverflow
      desktop.removeEventListener('change', handleDesktop)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  // Escape cierra; Tab no sale del diálogo mientras está abierto
  function handleDialogKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeMenu()
      return
    }

    if (event.key !== 'Tab' || !dialogRef.current) {
      return
    }

    const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector))
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  function handleLanguageChange(language: Language) {
    const localizedPath = localizePath(location.pathname, language)
    i18n.changeLanguage(language)

    if (localizedPath !== location.pathname) {
      navigate(localizedPath)
    }
  }

  const brand = (
    <NavLink to="/" className="flex min-h-tap items-center gap-3" onClick={isMenuOpen ? () => setIsMenuOpen(false) : undefined}>
      <span aria-hidden="true" className="display flex h-10 w-10 items-center justify-center bg-signal pt-0.5 text-[1.375rem] text-paper">
        LA
      </span>
      <span className="leading-tight">
        <span className="block font-bold text-paper">{profile.name}</span>
        <span className="hidden font-mono text-label text-muted sm:block">
          {getLocalizedValue(profile.role, i18n.language)}
        </span>
      </span>
    </NavLink>
  )

  const languageSwitch = (
    <div role="group" aria-label={t('language.label')} className="flex border border-line">
      {supportedLanguages.map((language) => (
        <button
          key={language}
          type="button"
          lang={language}
          aria-label={languageNames[language]}
          aria-pressed={currentLanguage === language}
          onClick={() => handleLanguageChange(language)}
          className={
            currentLanguage === language
              ? 'min-h-tap min-w-tap bg-paper px-2 font-mono text-label font-bold uppercase text-ink'
              : 'min-h-tap min-w-tap px-2 font-mono text-label uppercase text-muted transition-colors hover:text-paper'
          }
        >
          {t(`language.${language}`)}
        </button>
      ))}
    </div>
  )

  const cvLink = (
    <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-link font-mono text-label uppercase">
      {t('nav.cv')}
      <ArrowIcon direction="out" />
    </a>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:inline-flex focus:min-h-tap focus:items-center focus:bg-paper focus:px-5 focus:font-bold focus:text-ink"
      >
        {t('nav.skipToContent')}
      </a>

      <div className="wrap flex min-h-16 items-center justify-between gap-4 py-2">
        {brand}

        <nav aria-label={t('nav.label')} className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.key}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `inline-flex min-h-tap items-center font-mono text-label uppercase underline-offset-[6px] ${
                      isActive ? 'text-paper underline decoration-signal decoration-2' : 'text-muted transition-colors hover:text-paper'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          {languageSwitch}
          {cvLink}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex min-h-tap items-center gap-3 border border-muted px-4 font-mono text-label uppercase text-paper xl:hidden"
        >
          {t('nav.menu')}
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M2 6h16M2 14h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.label')}
          onKeyDown={handleDialogKeyDown}
          className="fixed inset-0 z-50 flex animate-menu-in flex-col overflow-y-auto bg-ink xl:hidden"
        >
          <div className="wrap flex min-h-16 items-center justify-between gap-4 border-b border-line py-2">
            {brand}
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex min-h-tap items-center gap-3 border border-muted px-4 font-mono text-label uppercase text-paper"
            >
              {t('nav.closeMenu')}
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>

          {/* Los enlaces se apilan abajo, al alcance del pulgar */}
          <nav aria-label={t('nav.label')} className="wrap mt-auto pt-10">
            <ol className="border-t border-line">
              {links.map((link) => (
                <li key={link.key} className="border-b border-line">
                  <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-[3.5rem] items-baseline gap-4 py-2 ${
                        isActive ? 'text-signal underline decoration-2 underline-offset-[6px]' : 'text-paper'
                      }`
                    }
                  >
                    <span aria-hidden="true" className="w-6 font-mono text-label text-muted">
                      {sectionNumbers[link.key]}
                    </span>
                    <span className="display text-[clamp(2rem,9vw,3rem)] leading-none">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ol>
          </nav>

          <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {languageSwitch}
            {cvLink}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
