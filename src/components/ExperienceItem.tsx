interface ExperienceItemProps {
  item: {
    period: string
    title: string
    location: string
    detail: string
  }
}

function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
      <div className="font-mono text-label md:col-span-3">
        <p className="text-paper">{item.period}</p>
        <p className="mt-1 text-muted">{item.location}</p>
      </div>
      <div className="md:col-span-9 lg:col-span-8">
        <h3 className="text-h3 font-bold text-paper">{item.title}</h3>
        <p className="mt-3 max-w-[44rem] text-muted">{item.detail}</p>
      </div>
    </article>
  )
}

export default ExperienceItem
