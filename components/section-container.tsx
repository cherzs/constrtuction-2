interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({
  children,
  className = '',
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
