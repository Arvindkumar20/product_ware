import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden"
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
        initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 mt-1 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-pink-600">₹{product.price}</span>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
