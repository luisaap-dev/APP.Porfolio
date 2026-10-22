import { useTranslation } from 'react-i18next'
import PageIntro from '../components/PageIntro'
import { education, getLocalizedValue } from '../data/profile'
import { sectionNumbers } from '../utils/sections'

function Education() {
  const { t, i18n } = useTranslation()

  return (
    <section className="wrap py-12 lg:py-20">
      <PageIntro
        eyebrow={t('education.eyebrow')}
        title={t('education.title')}
        description={t('education.description')}
        index={sectionNumbers.education}
      />

      <ol className="mt-12 border-t border-line lg:mt-16">
        {education.map((item) => (
          <li key={`${item.date}-${item.title.es}`} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8">
            <p className="display text-[clamp(2.5rem,1.8rem+3vw,4.5rem)] leading-none text-signal md:col-span-3">{item.date}</p>
            <div className="md:col-span-9 lg:col-span-8">
              <h2 className="text-h3 font-bold text-paper">{getLocalizedValue(item.title, i18n.language)}</h2>
              <p className="mt-2 font-mono text-label text-muted">{item.place}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Education
