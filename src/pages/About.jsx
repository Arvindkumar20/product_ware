import { motion } from "framer-motion";
import image from "/HeroImage.png"
export default function About() {
  return (
    <div className="min-h-screen bg-[#fff7ea] py-20 px-4 sm:px-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt="About Us"
            className="rounded-3xl shadow-lg object-cover w-full max-h-[600px]"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Glow with Confidence 🌟
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            At <span className="font-semibold text-pink-500">Product Ware</span>, we believe that beauty begins with self-love. Our mission is to empower every individual to embrace their natural beauty through clean, effective, and personalized skincare solutions.
          </p>

          <p className="text-gray-600 leading-7">
            Backed by advanced skin analysis, curated ingredients, and AI-powered recommendations, we’re not just a beauty brand — we’re your personal skincare companion. From nourishing serums to glowing moisturizers, every product is designed with care, purity, and purpose.
          </p>

          <div className="mt-8">
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>🌿 100% Skin-Friendly Ingredients</li>
              <li>🤖 AI-Based Personalized Product Recommendations</li>
              <li>🇮🇳 Made with Love in India</li>
              <li>🚚 Fast & Reliable Delivery</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
