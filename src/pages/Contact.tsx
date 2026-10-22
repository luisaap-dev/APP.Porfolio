import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon'
import PageIntro from '../components/PageIntro'
import { profile } from '../data/profile'
import { getRoutePath, normalizeLanguage } from '../utils/routes'
import { sectionNumbers } from '../utils/sections'

function Contact() {
  const { t, i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)

  return (
    <section className="wrap py-12 lg:py-20">
      <PageIntro
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        description={t('contact.description')}
        index={sectionNumbers.contact}
      />

      {/* El correo es la pieza principal de la página */}
      <div className="mt-12 border-t border-line pt-8 lg:mt-16">
        <p className="eyebrow">{t('common.email')}</p>
        <a
          href={profile.mailHref}
          className="display mt-3 inline-block min-h-tap py-1 normal-case text-[clamp(1.75rem,0.6rem+6.4vw,6.5rem)] leading-[1.05] text-paper underline decoration-signal decoration-[0.06em] underline-offset-[0.12em] [overflow-wrap:anywhere] hover:text-signal"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <a href={profile.mailHref} className="btn-signal w-full sm:w-auto">
            {t('common.sendEmail')}
            <ArrowIcon />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-link">
            {t('common.downloadCv')}
            <ArrowIcon direction="out" />
          </a>
        </div>
      </div>

      <ul className="mt-14 border-t border-line">
        <li className="grid gap-1 border-b border-line py-5 md:grid-cols-12 md:items-center md:gap-8">
          <p className="eyebrow md:col-span-3">{t('common.linkedin')}</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link md:col-span-9 md:justify-self-start">
            {t('contact.linkedinText')}
            <ArrowIcon direction="out" />
          </a>
        </li>
        <li className="grid gap-1 border-b border-line py-5 md:grid-cols-12 md:items-center md:gap-8">
          <p className="eyebrow md:col-span-3">GitHub</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-link md:col-span-9 md:justify-self-start">
            {t('contact.githubText')}
            <ArrowIcon direction="out" />
          </a>
        </li>
        <li className="grid gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-8">
          <p className="eyebrow md:col-span-3 md:pt-1">{t('contact.remoteTitle')}</p>
          <div className="md:col-span-9 lg:col-span-7">
            <p className="max-w-[40rem] text-muted">{t('contact.remoteDescription')}</p>
            <NavLink to={getRoutePath('remoteSupport', currentLanguage)} className="text-link mt-2">
              {t('contact.remoteInstructions')}
              <ArrowIcon />
            </NavLink>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Contact
