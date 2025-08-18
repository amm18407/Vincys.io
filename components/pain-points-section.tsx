"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, Check, Phone } from 'lucide-react'

const painPoints = [
  {
    pain: "Manual process documentation takes weeks and becomes outdated quickly",
    solution: "AI-powered process capture that documents workflows in real-time and keeps them current automatically"
  },
  {
    pain: "Knowledge silos prevent teams from accessing critical information when needed",
    solution: "Centralized knowledge base with intelligent search and contextual recommendations"
  },
  {
    pain: "Inconsistent processes lead to errors, delays, and compliance risks",
    solution: "Standardized process templates with built-in compliance checks and automated validation"
  },
  {
    pain: "Difficulty scaling process improvements across departments and locations",
    solution: "Enterprise-wide process management with role-based access and automated rollouts"
  }
]

export function PainPointsSection() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
            Tired of Process Inefficiencies?
            <span className="block text-primary-500">Vincys Has the Answer</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Pain Point */}
              <div className="flex-1 bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
                    <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                      The Problem
                    </h3>
                    <p className="text-red-700 dark:text-red-300 leading-relaxed">
                      {item.pain}
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="flex-1 bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                      The Vincys Solution
                    </h3>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="tel:+1-555-0123">
              <Phone className="mr-2 h-5 w-5" />
              See How Vincys Solves Your Challenges – Schedule a Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
