import { useTranslation } from 'react-i18next'
import ArrowIcon from '../components/ArrowIcon'
import PageIntro from '../components/PageIntro'
import ProjectRow from '../components/ProjectRow'
import { getLocalizedValue, profile, publishedProjects } from '../data/profile'
import { sectionNumbers } from '../utils/sections'

function Projects() {
  const { t, i18n } = useTranslation()

  return (
    <section className="wrap py-12 lg:py-20">
      <PageIntro
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        description={t('projects.description')}
        index={sectionNumbers.projects}
      />

      <ol className="mt-12 border-t border-line lg:mt-16">
        {publishedProjects.map((project, index) => (
          <li key={getLocalizedValue(project.title, 'es')}>
            <ProjectRow
              index={String(index + 1).padStart(2, '0')}
              project={{
                ...project,
                title: getLocalizedValue(project.title, i18n.language),
                label: getLocalizedValue(project.label, i18n.language),
                summary: getLocalizedValue(project.summary, i18n.language),
              }}
            />
          </li>
        ))}
      </ol>

      <div className="grid gap-4 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <h2 className="display text-h3 text-paper lg:col-span-6 lg:text-[clamp(1.75rem,1rem+1.5vw,2.5rem)] lg:leading-none">
          {t('projects.moreTitle')}
        </h2>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="max-w-[36rem] text-muted">{t('projects.moreDescription')}</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-link mt-4">
            {t('common.goToGithub')}
            <ArrowIcon direction="out" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
