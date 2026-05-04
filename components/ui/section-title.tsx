interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: React.ReactNode
  centered?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function SectionTitle({
  children,
  subtitle,
  centered = false,
  size = 'lg',
}: SectionTitleProps) {
  const sizeClasses = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl',
  }

  return (
    <div className={centered ? 'text-center' : ''}>
      <h2
        className={`${sizeClasses[size]} font-light leading-tight text-foreground mb-6`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
