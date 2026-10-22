interface ArrowIconProps {
  // "out" para enlaces externos (↗), "right" para navegación interna (→)
  direction?: 'out' | 'right'
}

function ArrowIcon({ direction = 'right' }: ArrowIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-[0.9em] w-[0.9em] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
      {direction === 'out' ? <path d="M4.5 11.5l7-7M5.5 4.5h6v6" /> : <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" />}
    </svg>
  )
}

export default ArrowIcon
