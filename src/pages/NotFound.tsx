import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon'
import PageIntro from '../components/PageIntro'
import { getRoutePath, normalizeLanguage } from '../utils/routes'

function NotFound() {
  const { t, i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)

  return (
    <section className="wrap py-12 lg:py-20">
      <PageIntro
        eyebrow="404"
        title={t('notFound.title')}
        description={t('notFound.description')}
      />
      <div className="mt-10">
        <NavLink to={getRoutePath('home', currentLanguage)} className="btn-signal w-full sm:w-auto">
          {t('notFound.backHome')}
          <ArrowIcon />
        </NavLink>
      </div>
    </section>
  )
}

export default NotFound
