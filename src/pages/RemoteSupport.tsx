import { useTranslation } from 'react-i18next'
import ArrowIcon from '../components/ArrowIcon'
import PageIntro from '../components/PageIntro'
import { profile } from '../data/profile'
import { sectionNumbers } from '../utils/sections'

function RemoteSupport() {
  const { t } = useTranslation()
  const steps = t('remoteSupport.steps', { returnObjects: true })

  return (
    <section className="wrap py-12 lg:py-20">
      <PageIntro
        eyebrow={t('remoteSupport.eyebrow')}
        title={t('remoteSupport.title')}
        description={t('remoteSupport.description')}
        index={sectionNumbers.remoteSupport}
      />

      <ol className="mt-12 border-t border-line lg:mt-16">
        {steps.map((step, index) => (
          <li key={step.title} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8">
            <p aria-hidden="true" className="display text-[clamp(2.5rem,1.8rem+3vw,4.5rem)] leading-none text-signal md:col-span-2">
              {index + 1}
            </p>
            <div className="md:col-span-10 lg:col-span-8">
              <h2 className="text-h3 font-bold text-paper">{step.title}</h2>
              <p className="mt-2 max-w-[40rem] text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <h2 className="display text-h3 text-paper lg:col-span-4 lg:text-[clamp(1.75rem,1rem+1.5vw,2.5rem)] lg:leading-none">
          {t('remoteSupport.downloadTitle')}
        </h2>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="max-w-[40rem] text-muted">
            {t('remoteSupport.downloadDescription')}{' '}
            <a href={profile.mailHref} className="font-semibold text-paper underline decoration-signal decoration-2 underline-offset-4 [overflow-wrap:anywhere]">
              {profile.email}
            </a>
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a href={profile.rustdesk} target="_blank" rel="noreferrer" className="btn-signal w-full sm:w-auto">
              {t('common.downloadRustdesk')}
              <ArrowIcon direction="out" />
            </a>
            <a href={profile.mailHref} className="text-link">
              {t('common.sendEmail')}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RemoteSupport
