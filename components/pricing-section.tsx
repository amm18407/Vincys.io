"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups",
    price: "$499",
    features: [
      "Process documentation tools",
      "Basic automation workflows",
      "Team collaboration features",
      "Email support",
      "Up to 10 team members"
    ],
    popular: false
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses",
    price: "$799",
    features: [
      "Everything in Starter",
      "Advanced AI optimization",
      "Custom integrations",
      "Priority support",
      "Unlimited team members",
      "Advanced analytics",
      "Compliance templates"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "$1299",
    features: [
      "Everything in Pro",
      "Custom AI models",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom security features",
      "On-premise deployment",
      "Advanced reporting",
      "Training & certification"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-light dark:text-foreground-dark mb-4 md:mb-6 leading-tight">
            Flexible Plans Tailored to
            <span className="block text-primary-500">Your Needs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:order-none order-first lg:-mt-8' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-6 md:-top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center whitespace-nowrap">
                    <Star className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary-500 shadow-xl lg:shadow-2xl lg:scale-105 ring-2 ring-primary-500/20 pt-4' : 'shadow-md hover:shadow-lg transition-shadow duration-300'}`}>
                <CardHeader className="text-center p-6 md:p-8">
                  <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground-light dark:text-foreground-dark">
                      {plan.price}{plan.price !== "Custom" && "/month"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full text-sm md:text-base font-semibold mt-auto" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
