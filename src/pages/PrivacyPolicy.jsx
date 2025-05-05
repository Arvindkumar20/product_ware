import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fff7ea] py-20 px-6 sm:px-12 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600 mb-8 text-center"
        >
          Privacy Policy
        </motion.h1>

        <div className="space-y-8 text-gray-700 text-sm sm:text-base">
          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">1. Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how <strong>YourGlow Beauty</strong> collects, uses, and protects
              your personal information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal details such as your name, email address, phone number, and shipping address when you make a purchase
              or fill out a contact form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>To process your orders and deliver products.</li>
              <li>To send updates, promotional offers, and beauty tips.</li>
              <li>To improve our website experience and customer service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">4. Protection of Data</h2>
            <p>
              We implement security measures to maintain the safety of your personal information. However, no method of transmission over the
              Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings,
              but some features may not work properly without them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">6. Third-Party Links</h2>
            <p>
              We may include links to third-party websites, especially affiliate product links (like Amazon). We are not responsible for the
              privacy practices of those external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">7. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:productware91@gmail.com" className="text-pink-600 underline hover:text-pink-800">
                productware91@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
