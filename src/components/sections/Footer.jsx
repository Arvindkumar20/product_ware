import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Follow Us
        </motion.h3>
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61575584157550"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaFacebookF className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/product_ware/"
            className="text-gray-400 hover:text-pink-600 transition-colors"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedinIn className="w-8 h-8" />
          </a>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-400"
        >
          © 2025 Your Company. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
