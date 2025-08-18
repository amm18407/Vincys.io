"use client"

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-background-dark text-foreground-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <img 
                src="/Group 2.png"
                alt="Vincys Logo" 
                width={144} 
                height={64} 
                className="h-12 w-32 mb-2"
              />
              <p className="text-neutral-300">
                Empowering Efficiency Since 2025
              </p>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Transform your business with AI-powered process optimization. 
              Streamline workflows, capture knowledge, and drive efficiency 
              for enterprises and consulting firms.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:hello@vincys.io"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-xl text-neutral-300 hover:text-primary-400 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-xl text-neutral-300 hover:text-primary-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="text-neutral-300">
                <div className="font-medium">Email</div>
                <a 
                  href="mailto:hello@vincys.io"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  hello@vincys.io
                </a>
              </div>
              <div className="text-neutral-300">
                <div className="font-medium">Phone</div>
                <a 
                  href="tel:+1-555-123-4567"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2024 Vincys. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
