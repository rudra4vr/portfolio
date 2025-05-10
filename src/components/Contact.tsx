'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // FormSubmit will handle the submission automatically
      // The form will redirect to the specified URL after submission
      // No need for additional JavaScript handling
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-gray-600 dark:text-gray-300">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/ravalrudrap@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect after submission */}
          <input type="hidden" name="_next" value="https://www.rudraraval.com" />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white dark:bg-gray-700"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white dark:bg-gray-700"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white dark:bg-gray-700"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium ${
              isSubmitting
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-purple-500 hover:bg-purple-600'
            } transition-colors`}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <FiSend className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact 