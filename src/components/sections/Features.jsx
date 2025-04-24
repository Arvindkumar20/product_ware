import { motion } from 'framer-motion';
import { FaBolt, FaMagic, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt className="text-blue-600 w-10 h-10" />, 
    title: 'Fast & Accurate',
    description: 'Lightning-fast AI analysis providing highly accurate skin assessments in seconds.',
  },
  {
    icon: <FaMagic className="text-purple-600 w-10 h-10" />, 
    title: 'Personalized Solutions',
    description: 'Get beauty recommendations tailored to your unique skin type and goals.',
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-10 h-10" />, 
    title: 'Secure & Private',
    description: 'Your data stays safe with our industry-leading security protocols and privacy standards.',
  },
];

const testimonials = [
  {
    name: 'Ananya S.',
    feedback: 'Absolutely love how accurate and easy the analysis was! My skin has never felt better.',
  },
  {
    name: 'Rahul M.',
    feedback: 'Fast service and very secure. Got personalized products that actually work!',
  },
  {
    name: 'Priya K.',
    feedback: 'I finally understand my skin needs. Highly recommend this for everyone serious about skincare.',
  },
];

export default function Features() {
  return (
    <>
      <section className="py-20 px-6 md:px-12 bg-blue-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Our Features
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Testimonials
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-blue-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.feedback}"</p>
              <div className="text-blue-600 dark:text-blue-400 font-semibold">- {testimonial.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Skin?</h2>
          <p className="mb-8 text-lg">Join thousands who have discovered their perfect beauty routine with us.</p>
          <a
            href="#get-started"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Get Started Today
          </a>
        </motion.div>
      </section>
    </>
  );
}
