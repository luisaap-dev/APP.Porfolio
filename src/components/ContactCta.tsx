import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import { getRoutePath, normalizeLanguage } from '../utils/routes'
import ArrowIcon from './ArrowIcon'

function ContactCta() {
  const { t, i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)
  const contactPath = getRoutePath('contact', currentLanguage)

  return (
    <section aria-label={t('common.contact')} className="bg-oxblood">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="flex flex-col items-start">
          <h2 className="display text-h3 text-paper">{t('cta.employmentTitle')}</h2>
          <p className="mt-4 max-w-[36rem] text-paper">{t('cta.employmentDescription')}</p>
          <a
            href={`${profile.mailHref}?subject=${encodeURIComponent(t('cta.employmentSubject'))}`}
            className="btn-paper mt-6 w-full sm:mt-auto sm:w-auto"
          >
            {t('cta.employmentAction')}
            <ArrowIcon />
          </a>
          <NavLink to={contactPath} className="text-link mt-4 decoration-paper">
            {t('cta.allChannels')}
          </NavLink>
        </div>
        <div className="flex flex-col items-start border-t border-paper/30 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 lg:pl-12">
          <h2 className="display text-h3 text-paper">{t('cta.freelanceTitle')}</h2>
          <p className="mt-4 max-w-[36rem] text-paper">{t('cta.freelanceDescription')}</p>
          <a
            href={`${profile.mailHref}?subject=${encodeURIComponent(t('cta.freelanceSubject'))}`}
            className="btn-paper mt-6 w-full sm:mt-auto sm:w-auto"
          >
            {t('cta.freelanceAction')}
            <ArrowIcon />
          </a>
          <NavLink to={contactPath} className="text-link mt-4 decoration-paper">
            {t('cta.allChannels')}
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
