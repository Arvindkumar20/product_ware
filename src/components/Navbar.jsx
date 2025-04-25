import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import logo from "/logo.png";
import {Link } from "react-router-dom"

const navItems = [
  "Home",
  "Products",
  "Beauty Tips",
  "Services",
  "About Us",
  "Contact Us",
];

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { x: "-100%", transition: { duration: 0.3 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full shadow-md bg-green-100 fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between px-6 py-1 max-w-7xl mx-auto">
          {/* <h1 className="text-2xl font-bold text-pink-600">ProductWare</h1> */}
          <Logo logo={logo} />

          <div className="hidden md:flex gap-6">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                whileHover={{ scale: 1.1 }}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-red-500 cursor-pointer"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6">
                {/* <h2 className="text-xl font-bold text-pink-600">Menu</h2> */}
                <Logo logo={logo} />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-pink-600 cursor-pointer"
                >
                  <X size={26} className="text-red-600" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-800 text-base hover:text-pink-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
