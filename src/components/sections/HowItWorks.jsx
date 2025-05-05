import { motion } from "framer-motion";

const steps = [
  {
    title: "Select Your Skin Type",
    description:
      "Choose your skin type to help us tailor beauty product recommendations for you.",
  },
  {
    title: "Get Product Suggestions",
    description:
      "We instantly show products that suit your skin’s needs.",
  },
];

const upcomingSteps = [
  {
    title: "Upload Your Face",
    description:
      "You’ll soon be able to upload a photo for smart skin analysis.",
  },
  {
    title: "AI Skin Analysis",
    description:
      "Our AI will examine your skin tone, texture, and type for precision.",
  },
  {
    title: "Get Personalized Recommendations",
    description:
      "Get hyper-personalized suggestions based on detailed analysis.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-800"
    >
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
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Start with skin type — AI-powered analysis coming soon!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-green-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Step {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
          🚀 Upcoming Features
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-10 opacity-70">
        {upcomingSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-sm border border-dashed border-gray-300 dark:border-gray-600"
          >
            <div className="text-2xl font-semibold mb-4 text-gray-500 dark:text-gray-400">
              Soon
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-700 dark:text-gray-200">{step.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
