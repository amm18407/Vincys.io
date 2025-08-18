"use client"

import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme } = useTheme()

  const navigation = [
    { name: 'Features', href: '#features', description: 'Discover our powerful tools' },
    { name: 'Case Studies', href: '#case-studies', description: 'See real results' },
    { name: 'Pricing', href: '#pricing', description: 'Flexible plans for you' },
    { name: 'Contact', href: '#contact', description: 'Get in touch today' },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const headerHeight = 80 // Header height in pixels
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header when scrolling down (after 100px)
        setIsVisible(false)
        setIsMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Show header when scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <Image 
                src={theme === 'dark' ? "/Group 2.png" : "/Group 1.png"}
                alt="Vincys Logo" 
                width={144} 
                height={64} 
                className="h-12 w-32"
              />
            </motion.button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-200 px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center">
                Sign In
              </button>
              <button className="bg-[#448B70] hover:bg-[#3a7560] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-center">
                Get Started
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="flex flex-col space-y-1"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    className="w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    className="w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 rounded-full"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.4 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={theme === 'dark' ? "/Group 2.png" : "/Group 1.png"}
                      alt="Vincys Logo"
                      width={120}
                      height={48}
                      className="h-8 w-20"
                    />
                    <span className="text-lg font-bold text-primary-500">Vincys</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
                  >
                    <X className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => {
                          scrollToSection(item.href)
                          setIsMenuOpen(false)
                        }}
                        className="group w-full text-left p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200">
                              {item.name}
                            </div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-all duration-200 group-hover:translate-x-1" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* CTA Section */}
                <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <button className="w-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 px-6 py-4 rounded-2xl font-medium transition-all duration-200 text-center">
                      Sign In
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <button 
                      onClick={() => {
                        scrollToSection('#contact')
                        setIsMenuOpen(false)
                      }}
                      className="group w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-200 text-center flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
