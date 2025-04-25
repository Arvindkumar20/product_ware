import { motion } from "framer-motion";

const tips = [
  {
    title: "Hydrate Your Skin",
    description: "Drink plenty of water and use a hydrating serum daily for a natural glow.",
    image: "/tips/hydration.jpg",
  },
  {
    title: "Cleanse Twice Daily",
    description: "Morning and night cleansing helps remove dirt and unclog pores.",
    image: "/tips/cleanse.jpg",
  },
  {
    title: "Use Sunscreen Daily",
    description: "Protect your skin from harmful UV rays with SPF 30+ even indoors.",
    image: "/tips/sunscreen.jpg",
  },
];

export default function BeautyTips() {
  return (
    <div className="min-h-screen bg-[#fff7ea] px-4 mt-5 py-20 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-pink-600 mb-4"
      >
        Radiant Beauty Tips ✨
      </motion.h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Boost your glow with our expert-backed tips designed to keep your skin healthy, nourished, and radiant.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="bg-white/60 backdrop-blur-xl border border-pink-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-pink-200 transition-shadow duration-300"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
