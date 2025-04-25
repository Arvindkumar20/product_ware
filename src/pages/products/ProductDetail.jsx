import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();

  // Dummy product data (normally fetched by id)
  const product = {
    name: "Glow Serum",
    description: "Hydrating glow serum that revitalizes your skin with natural ingredients.",
    image: "/products/serum.jpg",
    links: {
      amazon: "https://www.amazon.in/dp/B0BXXXXXXX",
      flipkart: "https://www.flipkart.com/product/p/itmfXXXXXXXXX",
      nykaa: "https://www.nykaa.com/glow-serum/p/XXXXXXX",
    },
  };

  return (
    <div className="min-h-screen bg-[#fff7ea] px-4 sm:px-8 py-20">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-pink-600 mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <motion.a
            href={product.links.amazon}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="block text-center bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Buy on Amazon
          </motion.a>

          <motion.a
            href={product.links.flipkart}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="block text-center bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Buy on Flipkart
          </motion.a>

          <motion.a
            href={product.links.nykaa}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="block text-center bg-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            Buy on Nykaa
          </motion.a>
        </div>
      </div>
    </div>
  );
}
