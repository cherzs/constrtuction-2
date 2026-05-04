import { Divider } from './ui/divider'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <Divider />
      <div className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-light text-foreground mb-4">
                SHIN DONGAH
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium architectural design and construction solutions for distinguished projects across Asia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-light text-foreground mb-6 tracking-wide uppercase">
                Studio
              </h4>
              <ul className="space-y-3">
                {['About', 'Projects', 'Approach', 'Team'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-light text-foreground mb-6 tracking-wide uppercase">
                Services
              </h4>
              <ul className="space-y-3">
                {['Residential', 'Commercial', 'Interior Design', 'Consulting'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-light text-foreground mb-6 tracking-wide uppercase">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/6285161917939"
                    target="_blank"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +62 851-6191-7939
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:flowcreativconsultant@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    flowcreativconsultant@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Divider className="mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>© {currentYear} PT. Shin Dongah Construction. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.instagram.com/flowcreativconsultant/" target="_blank" className="hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/6285161917939" target="_blank" className="hover:text-foreground transition-colors">
                WhatsApp
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Dibuat oleh{" "}
            <a
              href="https://flowreativ.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Flow Creativ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
