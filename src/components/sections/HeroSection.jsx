import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-12 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Discover Your Perfect Glow ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
      >
        AI-powered skin analysis for personalized beauty solutions. Scan your face and get tailored product recommendations instantly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-4"
      >
        <Link to="/scan">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105">
            Upload Your Face
          </button>
        </Link>
        <Link to="#how-it-works" className="text-blue-600 hover:underline text-sm">
          Learn How It Works
        </Link>
      </motion.div>
    </section>
  );
}
