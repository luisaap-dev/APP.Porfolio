import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import { getRoutePath, normalizeLanguage } from '../utils/routes'
import ArrowIcon from './ArrowIcon'

function ContactCta() {
  const { t, i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)

  return (
    <section aria-labelledby="contact-cta-title" className="bg-oxblood">
      <div className="wrap grid gap-8 py-14 lg:grid-cols-12 lg:items-end lg:py-20">
        <div className="lg:col-span-8">
          <h2 id="contact-cta-title" className="display text-h2 text-paper">
            {t('cta.title')}
          </h2>
          <p className="mt-5 max-w-[36rem] text-lead text-paper">{t('cta.description')}</p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
          <a href={profile.mailHref} className="btn-paper w-full sm:w-auto">
            {t('common.contactMe')}
            <ArrowIcon />
          </a>
          <NavLink to={getRoutePath('contact', currentLanguage)} className="text-link decoration-paper">
            {t('cta.allChannels')}
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
