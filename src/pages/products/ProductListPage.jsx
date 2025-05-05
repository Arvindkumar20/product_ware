import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "./products.js";

export default function ProductList() {
  return (
    <section className="bg-[#fff7ea] min-h-screen py-20 px-4 sm:px-10 mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-pink-600 mb-4"
        >
          Explore Our Curated Beauty Essentials ✨
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Discover hand-picked skincare products designed to elevate your
          natural beauty — all powered by expert recommendations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.06 }}
                className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-pink-300 transition-all duration-500 overflow-hidden group"
              >
                <div className="relative">
                 <div className="w-96 h-96">
                 <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center  rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                  />
                 </div>
                  <div className="absolute inset-0 bg-pink-100/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 rounded-t-3xl"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-pink-500 text-lg font-semibold">
                    {product.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
