"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Rocket, CheckCircle } from 'lucide-react'

const benefits = [
  'No credit card required',
  '14-day free trial',
  'Full access to all features',
  'Cancel anytime'
]

export function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
            <Rocket className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <span className="block">Your Business?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of forward-thinking companies that have already 
            revolutionized their operations with Vincys AI-powered solutions.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2"
              >
                <CheckCircle className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <button className="group bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="group bg-transparent text-white border-2 border-white/50 hover:bg-white/10 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg">
            Schedule Demo
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary-100 mb-4 text-sm">
            Already have an account?
          </p>
          <a 
            href="#" 
            className="text-white hover:text-primary-100 font-medium underline underline-offset-4 transition-colors duration-200"
          >
            Sign in to your dashboard
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-secondary-400/20 rounded-full blur-xl"
      />
    </section>
  )
}
