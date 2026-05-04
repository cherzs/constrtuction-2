'use client'

import { CTAButton } from './ui/cta-button'
import { Divider } from './ui/divider'
import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Studio', href: '#studio' },
    { label: 'Approach', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background">
        <Divider />
        <div className="px-4 md:px-8 lg:px-16 py-4 md:py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-lg font-light tracking-tight text-foreground">
              SHIN DONGAH
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CTAButton variant="primary">Start a Project</CTAButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-px w-full bg-foreground transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`h-px w-full bg-foreground transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`h-px w-full bg-foreground transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
        <Divider />
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 bg-background border-b border-border md:hidden">
          <nav className="flex flex-col py-6 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 text-sm font-light text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <CTAButton variant="primary" className="w-full">
                Start a Project
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
