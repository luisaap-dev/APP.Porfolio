import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import ArrowIcon from './ArrowIcon'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
        <p className="font-mono text-label text-muted lg:col-span-4">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-col gap-1 sm:items-end lg:col-span-8 lg:flex-row lg:justify-end lg:gap-8">
          <li>
            <a href={profile.mailHref} className="text-link font-mono text-label">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link font-mono text-label">
              {t('common.linkedin')}
              <ArrowIcon direction="out" />
            </a>
          </li>
          <li>
            <a href={profile.website} target="_blank" rel="noreferrer" className="text-link font-mono text-label">
              luisaap.es
              <ArrowIcon direction="out" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
