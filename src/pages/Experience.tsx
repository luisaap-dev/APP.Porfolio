import { useTranslation } from 'react-i18next'
import ExperienceItem from '../components/ExperienceItem'
import PageIntro from '../components/PageIntro'
import { experience, getLocalizedValue, skills } from '../data/profile'
import { sectionNumbers } from '../utils/sections'

function Experience() {
  const { t, i18n } = useTranslation()

  return (
    <section className="wrap py-12 lg:py-20">
      <PageIntro
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        description={t('experience.description')}
        index={sectionNumbers.experience}
      />

      <div className="mt-12 lg:mt-16">
        <h2 className="eyebrow">{t('experience.timelineTitle')}</h2>
        <ol className="mt-4 border-t border-line">
          {experience.map((item) => (
            <li key={`${item.period.es}-${item.role.es}`}>
              <ExperienceItem
                item={{
                  period: getLocalizedValue(item.period, i18n.language),
                  title: item.company
                    ? `${getLocalizedValue(item.role, i18n.language)} · ${item.company}`
                    : getLocalizedValue(item.role, i18n.language),
                  location: getLocalizedValue(item.location, i18n.language),
                  detail: getLocalizedValue(item.detail, i18n.language),
                }}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 lg:mt-24">
        <h2 className="display text-h2 text-paper">{t('experience.skillsTitle')}</h2>
        <dl className="mt-8 border-t border-line">
          {skills.map((skill) => (
            <div key={skill.category.es} className="grid gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-8">
              <dt className="eyebrow md:col-span-3 md:pt-0.5">{getLocalizedValue(skill.category, i18n.language)}</dt>
              <dd className="md:col-span-9">
                <ul className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-sm text-paper">
                  {skill.items.map((item, index) => (
                    <li key={getLocalizedValue(item, 'es')}>
                      {getLocalizedValue(item, i18n.language)}
                      {index < skill.items.length - 1 ? <span aria-hidden="true" className="pl-2 text-muted">/</span> : null}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Experience
