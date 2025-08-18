"use client"

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, BarChart3, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced machine learning algorithms that adapt and learn from your business data to provide intelligent insights and recommendations.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Optimized infrastructure that delivers sub-second response times, ensuring your team never waits for critical information.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and role-based access controls to protect your sensitive data.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards and reports that update in real-time, giving you instant visibility into your business performance.',
    color: 'from-primary-500 to-secondary-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in collaboration tools that enable seamless teamwork, with real-time updates and shared workspaces.',
    color: 'from-accent-500 to-primary-600'
  },
  {
    icon: Globe,
    title: 'Global Scalability',
    description: 'Cloud-native architecture that scales automatically to handle millions of users and transactions worldwide.',
    color: 'from-secondary-500 to-accent-600'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Powerful Features That
            <span className="block gradient-text">Drive Results</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools designed to transform your business 
            operations and accelerate growth through intelligent automation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full hover:scale-105 transition-transform duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations 
              with Vincys AI-powered solutions.
            </p>
            <button className="btn-primary">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
