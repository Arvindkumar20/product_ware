import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"; // Importing React Icons

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fffaf5] pt-24 px-4 sm:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-pink-600 text-center mb-4"
        >
          Let's Get Glowing ✨
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Have questions, collab ideas, or want to shop wholesale? We're here to
          make your glow journey smoother. Reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-8 text-gray-700">
  {/* Contact Us */}
  <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-6 rounded-lg shadow-lg">
    <h3 className="text-3xl font-semibold text-white mb-4">
      💌 Contact Us
    </h3>
    <p className="text-white flex items-center space-x-2">
      <FaEnvelope className="text-pink-200" size={24} />
      <span>Email: <span className="text-pink-100">productware91@gmail.com</span></span>
    </p>
  </div>

  {/* Follow Us */}
  <div className="bg-gradient-to-r from-indigo-400 to-purple-600 p-6 rounded-lg shadow-lg">
    <h3 className="text-3xl font-semibold text-white mb-4">🌸 Follow Us</h3>
    <div className="flex gap-5 text-white text-lg">
      <a
        href="https://www.instagram.com/product_ware/"
        target="_blank"
        className="text-gray-50 hover:text-pink-300 transition duration-300 transform hover:scale-110"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61575584157550"
        target="_blank"
        className="text-gray-50 hover:text-blue-200 transition duration-300 transform hover:scale-110"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        className="text-gray-50 hover:text-red-400 transition duration-300 transform hover:scale-110"
      >
        <FaYoutube size={30} />
      </a>
    </div>
  </div>

  {/* Brand Info */}
  <div className="pt-6 flex flex-col items-center bg-white mb-5 rounded shadow-xl shadow-gray-300">
    <img
      src="/logo.png"
      alt="Brand Logo"
      className="w-32 opacity-90 transform transition-all hover:scale-110 hover:opacity-100"
    />
    <p className="mt-2 text-center text-sm text-gray-500">
      Product ware • Pure. Powerful. Personal.
    </p>
  </div>
</div>


          {/* Form Section */}
          <motion.form
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="bg-white text-black p-8 rounded-3xl shadow-[0_4px_20px_rgba(255,192,203,0.2)] space-y-6"
  onSubmit={(e) => {
    e.preventDefault();

    let  form = e.target;
    let  name = form.name.value;
    let  email = form.email.value;
    let  message = form.message.value;

    let  mailtoLink = `mailto:productware91@gmail.com?subject=New Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
e.target;
     form.name.value="";
    form.email.value="";
     form.message.value="";
  }}
>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">
      Name
    </label>
    <input
      type="text"
      name="name"
      required
      className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      type="email"
      name="email"
      required
      className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">
      Message
    </label>
    <textarea
      rows="4"
      name="message"
      required
      className="w-full border border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
    />
  </div>
  <button
    type="submit"
    className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition duration-300 shadow-md"
  >
    Send Message
  </button>
</motion.form>

        </div>
      </div>
    </div>
  );
}
