"use client"

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Inc.',
    content: 'Vincys has completely transformed our business operations. The AI insights have helped us increase efficiency by 40% and reduce costs significantly.',
    avatar: '/avatars/sarah.jpg',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataSphere',
    content: 'The real-time analytics and predictive capabilities have given us a competitive edge. Our team can now make data-driven decisions instantly.',
    avatar: '/avatars/michael.jpg',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, GrowthCorp',
    content: 'Implementing Vincys was seamless and the results were immediate. Our productivity has skyrocketed and customer satisfaction is at an all-time high.',
    avatar: '/avatars/emily.jpg',
    rating: 5
  }
]

const metrics = [
  { number: '10,000+', label: 'Companies Worldwide' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '40%', label: 'Average Efficiency Gain' },
  { number: '24/7', label: 'Customer Support' }
]

export function SocialProof() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-12">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {metric.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card p-8 h-full relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-primary-200 dark:text-primary-700">
                    <Quote className="h-8 w-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  )
}
