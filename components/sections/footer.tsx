import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-background rounded-sm" />
              <span className="text-sm font-semibold tracking-wider">
                KEEN ARCHITECTURE
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Crafting exceptional spaces that endure and inspire. Global architectural excellence since 1998.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Company</h4>
            <div className="space-y-3">
              <Link href="#about" className="block text-background/70 hover:text-background transition-colors text-sm">
                About
              </Link>
              <Link href="#services" className="block text-background/70 hover:text-background transition-colors text-sm">
                Services
              </Link>
              <Link href="#history" className="block text-background/70 hover:text-background transition-colors text-sm">
                History
              </Link>
              <Link href="#contact" className="block text-background/70 hover:text-background transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Practice Areas</h4>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Residential
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Commercial
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Institutional
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Urban Planning
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Resources</h4>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Portfolio
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Publications
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Awards
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-background/60 text-sm">
              © {currentYear} Keen Architecture. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                Terms of Service
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
