"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CTABannerProps {
  variant?: 'mid' | 'bottom'
}

export function CTABanner({ variant = 'mid' }: CTABannerProps) {
  return (
    <section className={`py-20 ${variant === 'bottom' ? 'bg-background-light dark:bg-background-dark' : 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
            variant === 'bottom' 
              ? 'text-foreground-light dark:text-foreground-dark' 
              : 'text-white'
          }`}>
            Ready to Optimize
            <span className="block">Your Processes?</span>
          </h2>

          <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            variant === 'bottom' 
              ? 'text-neutral-600 dark:text-neutral-300' 
              : 'text-primary-100'
          }`}>
            Join leading enterprises in conquering inefficiency with Vincys.
          </p>

          <Button 
            size="lg" 
            variant={variant === 'bottom' ? 'default' : 'outline'}
            className={`group ${
              variant === 'bottom' 
                ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                : 'bg-white text-primary-600 hover:bg-primary-50'
            }`}
            asChild
          >
            <Link href="#contact">
              Book Your Free Demo Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
