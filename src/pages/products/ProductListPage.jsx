import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const dummyProducts = [
  {
    id: "1",
    name: "Glow Serum",
    image: "/products/serum.jpg",
    price: "₹899",
  },
  {
    id: "2",
    name: "Fresh Facewash",
    image: "/products/facewash.jpg",
    price: "₹499",
  },
  {
    id: "3",
    name: "Hydrating Moisturizer",
    image: "/products/moisturizer.jpg",
    price: "₹699",
  },
];

export default function ProductList() {
  return (
    <section className="bg-[#fff7ea] min-h-screen py-20 px-4 sm:px-10 mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-pink-600 mb-4"
        >
          Explore Our Curated Beauty Essentials ✨
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover hand-picked skincare products designed to elevate your natural beauty — all powered by expert recommendations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {dummyProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-pink-200 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-pink-600 text-lg font-medium">{product.price}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
