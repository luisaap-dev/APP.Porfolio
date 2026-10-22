import { useTranslation } from 'react-i18next'
import type { Project } from '../types/portfolio'
import ArrowIcon from './ArrowIcon'

type LocalizedProjectFields = 'title' | 'label' | 'summary'

interface ProjectRowProps {
  // Proyecto con los textos ya resueltos al idioma activo
  project: Omit<Project, LocalizedProjectFields> & Record<LocalizedProjectFields, string>
  // Posición en el listado (01, 02…), decorativa
  index: string
}

function ProjectRow({ project, index }: ProjectRowProps) {
  const { t } = useTranslation()

  return (
    <article className="grid gap-4 border-b border-line py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
      <div className="lg:col-span-6">
        <p className="eyebrow flex gap-3">
          <span aria-hidden="true" className="text-paper">{index}</span>
          <span>{project.label}</span>
        </p>
        <h2 className="display mt-3 text-[clamp(2.25rem,1.3rem+4.5vw,5rem)] leading-[0.92] text-paper [overflow-wrap:anywhere]">
          {project.title}
        </h2>
      </div>

      <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
        <p className="max-w-[36rem] text-paper">{project.summary}</p>

        {project.stack.length > 0 ? (
          <p className="mt-4 font-mono text-label text-muted">{project.stack.join(' / ')}</p>
        ) : null}

        {project.liveUrl || project.repoUrl ? (
          <div className="mt-5 flex flex-wrap gap-x-8">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">
                {t('common.viewSite')}
                <ArrowIcon direction="out" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link">
                {t('common.viewCode')}
                <ArrowIcon direction="out" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectRow
