"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send } from 'lucide-react'

export function ContactForm() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
            Get in Touch –
            <span className="block text-primary-500">Let's Discuss Your Needs</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                  Inquiry Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Demo Request</SelectItem>
                    <SelectItem value="pricing">Pricing Information</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your process optimization needs..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button className="w-full group" size="lg">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </Button>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                We respect your privacy and will never share your information with third parties.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
