import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../../public/HeroImage.png";
export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-20 mt-3 relative"
      // style={{ backgroundImage: `url(${heroImage})` }}
    >
      <motion.img
        src={heroImage}
        alt="this is hero image"
        className="h-[400px] w-full"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="absolute inset-0  bg-opacity-70 mt-20"></div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6 z-10 text-pink-600"
      >
        Discover Your Perfect Glow ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8 z-10"
      >
        AI-powered skin analysis for personalized beauty solutions. Scan your
        face and get tailored product recommendations instantly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <Link to="/scan">
          <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-transform transform hover:scale-105 cursor-pointer">
          get suggestions
          </button>
        </Link>
        <Link
          to="/how-it-works"
          className="text-blue-600 hover:underline text-sm"
        >
          {/* Learn How It Works */}
        </Link>
      </motion.div>
    </section>
  );
}
