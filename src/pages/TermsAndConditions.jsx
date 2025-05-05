import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#fff7ea] py-20 px-6 sm:px-12 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600 mb-8 text-center"
        >
          Terms & Conditions
        </motion.h1>

        <div className="space-y-8 text-gray-700 text-sm sm:text-base">
          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>Product Ware</strong>! By accessing or using our website, you agree to be bound by these Terms & Conditions.
              Please read them carefully before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">2. Products & Services</h2>
            <p>
              We offer beauty and skincare products intended for personal use. Product results may vary for each individual. Always read
              ingredients and usage instructions before applying any product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">3. Affiliate Links</h2>
            <p>
              Some of the links on our website are affiliate links, meaning we may earn a small commission when you make a purchase through
              them — at no extra cost to you. We only promote products we believe in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">4. Intellectual Property</h2>
            <p>
              All content, logos, images, and materials on this website are the property of YourGlow Beauty. Unauthorized use or reproduction
              is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">5. Limitation of Liability</h2>
            <p>
              We are not responsible for any adverse reactions caused by the use of our products. Please consult a dermatologist if you have
              any skin concerns before using a new product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions at any time. It is your responsibility to review them
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">7. Contact Us</h2>
            <p>
              For any questions about these Terms & Conditions, please contact us at{" "}
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
