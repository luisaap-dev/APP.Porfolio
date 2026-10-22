interface PageIntroProps {
  eyebrow: string
  title: string
  description?: string
  // h2 cuando la página ya tiene su propio h1 (por ejemplo, Inicio)
  headingLevel?: 'h1' | 'h2'
  // Número de sección (01, 02…), decorativo
  index?: string
}

function PageIntro({ eyebrow, title, description, headingLevel: Heading = 'h1', index }: PageIntroProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      {index ? (
        <p aria-hidden="true" className="display text-index text-signal lg:col-span-2">
          {index}
        </p>
      ) : null}
      <div className={index ? 'lg:col-span-10' : 'lg:col-span-12'}>
        <p className="eyebrow">{eyebrow}</p>
        <Heading className={`display mt-4 text-paper ${Heading === 'h1' ? 'text-h1' : 'text-h2'}`}>
          {title}
        </Heading>
        {description ? (
          <p className="mt-6 max-w-[40rem] text-lead text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

export default PageIntro
