"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-background-light to-primary-500/5 dark:from-primary-500/20 dark:via-background-dark dark:to-primary-500/10"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23448B72' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground-light dark:text-foreground-dark mb-6 leading-tight">
            Conquer Business Complexity
            <span className="block text-primary-500">with Vincys</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Intelligent Process Optimization Platform – Streamline workflows, capture knowledge, and drive efficiency for enterprises and consulting firms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <Button 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Demo Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-neutral-500 dark:text-neutral-400"
        >
          Serving banking, manufacturing, retail, and more.
        </motion.p>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8 cursor-pointer"
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-12 sm:w-12 sm:h-16 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-300">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
