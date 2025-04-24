import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Upload Your Face',
    description: 'Simply upload a clear picture of your face to start the skin analysis process.',
  },
  {
    title: 'AI Skin Analysis',
    description: 'Our AI examines your skin type, tone, and texture to generate a detailed report.',
  },
  {
    title: 'Get Product Suggestions',
    description: 'Receive personalized beauty product recommendations that perfectly suit your skin.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-white dark:bg-gray-800">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          How It Works
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Step {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
