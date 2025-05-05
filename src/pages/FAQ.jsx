// src/pages/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I choose the right skincare product for my skin type?",
    answer:
      "Identify your skin type (dry, oily, combination, or sensitive) and look for products specifically labeled for that. Avoid harsh chemicals and prefer natural or dermatologist-tested products.",
  },
  {
    question: "Are natural beauty products better than chemical-based ones?",
    answer:
      "Natural products can be gentler, but it depends on the ingredients. Always check for irritants and patch-test any new product.",
  },
  {
    question: "How often should I exfoliate my face?",
    answer:
      "For most skin types, 1-2 times a week is ideal. Over-exfoliation can damage the skin barrier.",
  },
  {
    question: "Do affiliate products recommended here suit all skin types?",
    answer:
      "We recommend products based on broad usability, but always check ingredients and reviews before buying. Your skin is unique!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-[#fff7ea] mt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-600 mt-5">Beauty & Skincare FAQ</h2>
      <div className="space-y-4 text-gray-900 max-w-4xl w-5/6 mx-auto mb-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-sm bg-pink-50 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 text-sm text-gray-900 overflow-hidden"
                >
                  <div>{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
