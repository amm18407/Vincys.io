"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200 dark:bg-accent-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="h-4 w-4 text-accent-500" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            AI-Powered Business Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight"
        >
          Transform Your Business
          <span className="block gradient-text">with AI Magic</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Leverage cutting-edge artificial intelligence to streamline operations, 
          enhance productivity, and unlock unprecedented business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <button className="btn-primary group flex items-center">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="btn-secondary group flex items-center">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </button>
        </motion.div>

     
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-8"
      >
        <button
          onClick={() => {
            const ctaSection = document.querySelector('section[class*="bg-gradient-to-br from-primary-600"]');
            ctaSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center hover:border-primary-500 transition-colors duration-200 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 group-hover:bg-primary-500 transition-colors duration-200"
          />
        </button>
      </motion.div>
    </section>
  )
}
