"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Settings, Lightbulb, BarChart3, Brain, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows with intelligent automation",
    benefits: [
      "Reduce manual work by 80%",
      "Eliminate human errors",
      "Accelerate process execution",
      "24/7 automated operations"
    ]
  },
  {
    icon: Lightbulb,
    title: "Smart Optimization",
    description: "AI-driven insights to continuously improve your business processes",
    benefits: [
      "Identify bottlenecks automatically",
      "Optimize resource allocation",
      "Predict process improvements",
      "Real-time performance monitoring"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards and reporting for data-driven decisions",
    benefits: [
      "Real-time process metrics",
      "Custom KPI tracking",
      "Predictive analytics",
      "Executive reporting"
    ]
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Machine learning algorithms that adapt and learn from your data",
    benefits: [
      "Intelligent process recommendations",
      "Automated decision support",
      "Pattern recognition",
      "Continuous learning"
    ]
  },
  {
    icon: GraduationCap,
    title: "Knowledge Management",
    description: "Capture, organize, and share institutional knowledge effectively",
    benefits: [
      "Centralized knowledge base",
      "Intelligent search capabilities",
      "Knowledge transfer automation",
      "Expertise preservation"
    ]
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-4 md:mb-6">
            Why Choose Vincys?
            <span className="block text-primary-500">Powerful Features, Proven Benefits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
