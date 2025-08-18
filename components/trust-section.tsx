"use client"

import { motion } from 'framer-motion'
import { Shield, Award, Zap } from 'lucide-react'

const clientLogos = [
  { name: "Bank of America", logo: "/logos/boa.svg", placeholder: "BOA" },
  { name: "General Electric", logo: "/logos/ge.svg", placeholder: "GE" },
  { name: "Walmart", logo: "/logos/walmart.svg", placeholder: "WMT" },
  { name: "Microsoft", logo: "/logos/microsoft.svg", placeholder: "MSFT" },
  { name: "Amazon", logo: "/logos/amazon.svg", placeholder: "AMZN" },
  { name: "Goldman Sachs", logo: "/logos/gs.svg", placeholder: "GS" }
]

const trustBadges = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Full data protection compliance"
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Information security management"
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Enterprise-grade reliability"
  }
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
            Trusted by
            <span className="block text-primary-500">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center group"
              >
                <div className="w-32 h-16 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-bold text-lg grayscale group-hover:grayscale-0 hover:bg-neutral-50 dark:hover:bg-neutral-750 hover:border-primary-200 dark:hover:border-primary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md">
                  {logo.placeholder}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                  <badge.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-2">
                  {badge.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
