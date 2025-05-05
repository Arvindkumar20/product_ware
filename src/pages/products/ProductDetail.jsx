import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import products from "./products.js";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
        Product not found 💄
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff0f5] to-[#ffe4e1] py-16 px-4 sm:px-8 mt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="p-6 bg-pink-50 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-contain rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-pink-600 mb-2">{product.name}</h1>
            <p className="text-gray-500 text-sm mb-4">by <strong>{product.brand}</strong></p>

            {/* Price block */}
            <div className="mb-4">
              <p className="text-2xl font-bold text-green-700">
                ₹{product.price}{" "}
                <span className="line-through text-gray-400 text-lg ml-2">
                  ₹{product.originalPrice}
                </span>
              </p>
              <p className="text-sm text-pink-500">{product.discountPercent}% OFF</p>
            </div>

            {/* Ratings */}
            <p className="text-sm text-gray-600 mb-4">
              ⭐ {product.rating} / 5 | {product.reviewsCount} reviews | {product.monthlySales} bought this month
            </p>

            {/* Best For */}
            <p className="text-base mb-4">
              <span className="font-medium text-gray-700">Best For:</span>{" "}
              {product.bestFor}
            </p>

            {/* Features */}
            <div className="mb-4">
              <h3 className="text-pink-600 font-semibold mb-1">✨ Key Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Offers */}
            <div className="mb-6">
              <h3 className="text-pink-600 font-semibold mb-1">🎁 Offers:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.offers.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.links?.amazon && (
              <motion.a
                href={product.links.amazon}
                target="_blank"
                whileHover={{ scale: 1.03 }}
                className="block text-center bg-pink-500 text-white font-semibold py-3 rounded-full shadow-md hover:bg-pink-600 transition"
              >
                Buy on Amazon
              </motion.a>
            )}
            {product.links?.flipkart && (
              <motion.a
                href={product.links.flipkart}
                target="_blank"
                whileHover={{ scale: 1.03 }}
                className="block text-center bg-blue-500 text-white font-semibold py-3 rounded-full shadow-md hover:bg-blue-600 transition"
              >
                Buy on Flipkart
              </motion.a>
            )}
          </div>

          {/* Tags + Disclaimer */}
          <div className="mt-6 text-sm">
            <div className="flex flex-wrap gap-2 mb-2">
              {product.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
                
              ))}
            </div>
            <p className="text-gray-400 italic">{product.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
