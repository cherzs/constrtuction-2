'use client'

import { useState } from 'react'
import { SectionTitle } from '../ui/section-title'
import { SectionContainer } from '../section-container'
import { Divider } from '../ui/divider'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', project: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <SectionContainer id="contact" className="border-t border-border">
      <SectionTitle size="md" centered>
        Let&apos;s Talk
      </SectionTitle>
      <p className="text-center text-lg text-muted-foreground leading-relaxed mb-20 max-w-2xl mx-auto">
        We&apos;d love to hear about your project and discuss how we can contribute to your vision. Reach out to start the conversation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-light text-foreground mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-light text-foreground mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-light text-foreground mb-3">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              placeholder="Company name"
            />
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-light text-foreground mb-3">
              Project Type
            </label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-0 py-2 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              placeholder="e.g., Residential, Commercial"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-light text-foreground mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-0 py-2 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              placeholder="Tell us about your vision..."
            />
          </div>

          <button
            type="submit"
            className="inline-block text-foreground text-sm font-light hover:text-muted-foreground transition-colors pt-4"
          >
            Send Message →
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-light text-muted-foreground tracking-wide uppercase mb-3">
                Headquarters
              </p>
              <p className="text-lg text-foreground font-light mb-2">
                Seoul, South Korea
              </p>
              <p className="text-sm text-muted-foreground">
                Gangnam-gu District
              </p>
            </div>

            <Divider />

            <div>
              <p className="text-xs font-light text-muted-foreground tracking-wide uppercase mb-3">
                International Offices
              </p>
              <p className="text-sm text-foreground font-light">
                Tokyo, Japan<br/>
                Shanghai, China<br/>
                Singapore
              </p>
            </div>

            <Divider />

            <div>
              <p className="text-xs font-light text-muted-foreground tracking-wide uppercase mb-3">
                Contact
              </p>
              <a
                href="mailto:flowcreativconsultant@gmail.com"
                className="text-sm text-foreground font-light hover:text-muted-foreground transition-colors"
              >
                flowcreativconsultant@gmail.com
              </a>
              <a
                href="https://wa.me/6285161917939"
                target="_blank"
                className="text-sm text-foreground font-light hover:text-muted-foreground transition-colors mt-3 block"
              >
                +62 851-6191-7939
              </a>
              <a
                href="https://www.instagram.com/flowcreativconsultant/"
                target="_blank"
                className="text-sm text-foreground font-light hover:text-muted-foreground transition-colors mt-3 block"
              >
                @flowcreativconsultant
              </a>
            </div>

            <Divider />

            <div>
              <p className="text-xs font-light text-muted-foreground tracking-wide uppercase mb-3">
                Hours
              </p>
              <div className="space-y-1 text-sm text-foreground font-light">
                <p>Mon—Fri: 9:00—18:00</p>
                <p>Sat: 10:00—16:00</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
