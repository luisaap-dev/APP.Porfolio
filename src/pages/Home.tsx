import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon'
import PageIntro from '../components/PageIntro'
import { focusAreas, getLocalizedValue, overview, profile } from '../data/profile'
import { getRoutePath, normalizeLanguage } from '../utils/routes'

// Separa la última palabra del titular para destacarla en rojo
function splitLastWord(text: string): [string, string] {
  const index = text.lastIndexOf(' ')
  return index === -1 ? ['', text] : [text.slice(0, index + 1), text.slice(index + 1)]
}

function Home() {
  const { t, i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)
  const [titleStart, titleEnd] = splitLastWord(t('home.title'))
  const roles = getLocalizedValue(profile.headline, i18n.language).split(' · ')

  return (
    <>
      <section className="wrap pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
        <p className="eyebrow flex flex-wrap gap-x-3">
          <span className="text-paper">{profile.name}</span>
          <span aria-hidden="true">—</span>
          <span>{getLocalizedValue(profile.location, i18n.language)}</span>
        </p>

        <h1 className="display mt-6 text-hero text-paper [overflow-wrap:anywhere] lg:max-w-[17ch]">
          {titleStart}
          <span className="text-signal">{titleEnd}</span>
        </h1>

        <div className="mt-10 grid gap-12 border-t border-line pt-8 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="max-w-[38rem] text-lead text-paper">
              {getLocalizedValue(profile.summary, i18n.language)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <a href={profile.mailHref} className="btn-signal w-full sm:w-auto">
                {t('common.contactMe')}
                <ArrowIcon />
              </a>
              <div className="flex flex-wrap gap-x-8">
                <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-link">
                  {t('common.downloadCv')}
                  <ArrowIcon direction="out" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">
                  {t('common.linkedin')}
                  <ArrowIcon direction="out" />
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow">{t('common.profile')}</p>
            <h2 className="mt-4 border-t border-line">
              {roles.map((role) => (
                <span key={role} className="block border-b border-line py-3 text-h3 font-bold text-paper">
                  {role}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-sm text-muted">{t('home.profileText')}</p>

            <dl className="mt-8 grid gap-5">
              <div>
                <dt className="eyebrow">{t('common.email')}</dt>
                <dd className="mt-1">
                  <a href={profile.mailHref} className="text-link font-mono text-sm [overflow-wrap:anywhere]">
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t('common.location')}</dt>
                <dd className="mt-1 font-mono text-sm text-paper">
                  {getLocalizedValue(profile.location, i18n.language)}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t('common.nextSteps')}</dt>
                <dd className="mt-1">
                  <ul className="flex flex-wrap gap-x-6">
                    <li>
                      <NavLink to={getRoutePath('projects', currentLanguage)} className="text-link">
                        {t('nav.projects')}
                        <ArrowIcon />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={getRoutePath('experience', currentLanguage)} className="text-link">
                        {t('nav.experience')}
                        <ArrowIcon />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={getRoutePath('contact', currentLanguage)} className="text-link">
                        {t('common.contact')}
                        <ArrowIcon />
                      </NavLink>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Cifras: tipografía grande en rojo, sin tarjetas */}
      <section aria-label={t('common.profile')} className="border-y border-line">
        <ul className="wrap grid lg:grid-cols-3">
          {overview.map((item) => (
            <li
              key={item.title.es}
              className="border-b border-line py-8 last:border-b-0 lg:border-b-0 lg:border-l lg:px-8 lg:py-12 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="eyebrow">{getLocalizedValue(item.title, i18n.language)}</p>
              <p className="display mt-3 whitespace-nowrap text-[clamp(3.5rem,2.2rem+3.4vw,6.5rem)] leading-[0.85] text-signal">{item.value}</p>
              <p className="mt-4 max-w-[22rem] text-sm text-muted">{getLocalizedValue(item.description, i18n.language)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap py-16 lg:py-24">
        <PageIntro
          eyebrow={t('home.pageIntroEyebrow')}
          title={t('home.pageIntroTitle')}
          description={t('home.pageIntroDescription')}
          headingLevel="h2"
        />

        <ul className="mt-12 border-t border-line">
          {focusAreas.map((area) => (
            <li key={area.title.es} className="grid gap-3 border-b border-line py-8 lg:grid-cols-12 lg:gap-8">
              <h3 className="display text-h3 text-paper lg:col-span-4 lg:text-[clamp(1.75rem,1rem+1.5vw,2.5rem)] lg:leading-none">
                {getLocalizedValue(area.title, i18n.language)}
              </h3>
              <p className="max-w-[40rem] text-muted lg:col-span-7 lg:col-start-6">
                {getLocalizedValue(area.description, i18n.language)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
