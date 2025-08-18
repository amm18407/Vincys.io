"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  type: 'testimonial' | 'case-study'
  caseStudyDetails?: {
    title: string
    savings?: string
  }
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
  headline?: string
  showCarousel?: boolean
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "Leading Bank",
    content: "Vincys transformed our loan approval process, cutting time by 50% and reducing errors.",
    rating: 5,
    type: 'testimonial'
  },
  {
    name: "Manufacturing Case Study",
    role: "Supply Chain Optimization",
    company: "Global Manufacturing Firm",
    content: "A manufacturing firm used Vincys to optimize supply chain workflows, saving $200K annually in inefficiencies.",
    rating: 5,
    type: 'case-study',
    caseStudyDetails: {
      title: "Supply Chain Transformation",
      savings: "$200K annually"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Consultant",
    company: "Global Consulting Firm",
    content: "The platform's AI analysis uncovered hidden risks we never saw before—game-changer for compliance.",
    rating: 5,
    type: 'testimonial'
  }
]

export function TestimonialsSection({ 
  testimonials = defaultTestimonials, 
  headline = "Real Results from Real Clients",
  showCarousel = true 
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-loop to next testimonial
  useEffect(() => {
    if (showCarousel && testimonials.length > 1) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [showCarousel, testimonials.length])

  return (
    <section id="case-studies" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-light dark:text-foreground-dark mb-4 md:mb-6 leading-tight">
            {headline.split(' ').slice(0, 3).join(' ')}
            <span className="block text-primary-500">{headline.split(' ').slice(3).join(' ')}</span>
          </h2>
        </motion.div>

        {showCarousel ? (
          /* Carousel Layout */
          <div className="relative max-w-4xl mx-auto mb-12 md:mb-16">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-end space-x-2 mt-8">
              {/* Current position text */}
              <span className="text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                {currentIndex + 1} / {testimonials.length}
              </span>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-500 w-6' 
                      : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Stacked Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-2xl border-2 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
          >
            View More Case Studies
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-neutral-800 overflow-hidden group">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-700/50 group-hover:text-primary-300 dark:group-hover:text-primary-600 transition-colors duration-300">
        <Quote className="h-8 w-8" />
      </div>

      <CardContent className="p-6 md:p-8">
        {/* Rating Stars */}
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Content */}
        <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-sm md:text-base">
          "{testimonial.content}"
        </p>

        {/* Case Study Details */}
        {testimonial.type === 'case-study' && testimonial.caseStudyDetails && (
          <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-primary-800 dark:text-primary-200 text-sm">
                  {testimonial.caseStudyDetails.title}
                </h4>
                {testimonial.caseStudyDetails.savings && (
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Savings: {testimonial.caseStudyDetails.savings}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Author Info */}
        <div>
          <div className="font-semibold text-foreground-light dark:text-foreground-dark text-sm md:text-base">
            {testimonial.name}
          </div>
          <div className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
            {testimonial.role}
            {testimonial.company && (
              <>
                <span className="mx-1">•</span>
                {testimonial.company}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
