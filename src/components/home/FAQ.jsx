"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a car?",
    answer:
      "Simply browse available cars, choose your preferred vehicle, select your rental dates and confirm your booking.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel your booking anytime before the rental period starts from your dashboard.",
  },
  {
    question: "Do I need a driving license?",
    answer:
      "Yes. A valid driving license is required to rent any vehicle on DriveFleet.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. DriveFleet follows transparent pricing with no hidden fees or unexpected costs.",
  },
  {
    question: "How is payment handled?",
    answer:
      "Payments are processed securely, and you'll receive confirmation immediately after booking.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Everything you need to know before booking your next ride.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                layout
                transition={{
                  duration: 0.3,
                }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-5 text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown className="text-blue-600" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-slate-200 px-6 pb-6 pt-4 dark:border-slate-700">
                        <p className="leading-8 text-slate-600 dark:text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
