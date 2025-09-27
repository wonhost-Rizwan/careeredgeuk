import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

// Close Icon Component
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden text-gray-900"
        style={{ backgroundColor: "#EDF1F7" }}
      >
        <div className="container relative z-10 mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
          >
            {/* Left Content */}
            <div className="relative space-y-5 text-center lg:text-left">
              {/* Heading */}
              <h1 className="bg-gradient-to-r bg-blue-700 bg-blue-700 bg-clip-text text-2xl font-extrabold leading-snug tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
                Professional Interview Coaching by Phone
              </h1>

              {/* Phone Number (unchanged style, no click action) */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 flex w-max items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm text-white shadow-md transition-all duration-300 hover:bg-teal-700 cursor-pointer sm:text-base 
  mx-auto lg:mx-0 lg:absolute lg:bottom-110 lg:left-305"
              >
                <FaPhoneAlt className="text-white" />
                <span className="font-semibold">09X XXX XXXX</span>
              </motion.button>


              {/* Description */}
              <p className="mx-auto mt-4 max-w-md text-sm text-gray-600 sm:text-base md:text-lg lg:mx-0">
                Get expert career guidance & live interview prep over the phone,
                designed to help you succeed in every step of your journey.
              </p>

              {/* Call Charges Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={openModal}
                  className="mt-3 transform rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 sm:text-sm"
                >
                  View Call Charges
                </button>
              </div>
            </div>

            {/* Right Pricing Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="mx-auto w-full max-w-xs cursor-pointer rounded-xl border border-gray-300 bg-gray-100 p-5 shadow-xl transition-all duration-300 sm:max-w-sm sm:rounded-2xl sm:p-6"
            >
              <h3 className="mb-2 text-center text-lg font-bold text-teal-600 sm:text-xl">
                Pay As You Go
              </h3>
              <p className="mb-2 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                £1.55
                <span className="text-base font-medium text-gray-500 sm:text-lg md:text-xl">
                  /min
                </span>
              </p>
              <p className="mb-5 text-center text-xs text-gray-500">
                + your phone company's access charge
              </p>
              <button className="w-full rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-white shadow-md transition-all duration-300 hover:bg-teal-700 sm:py-3 sm:px-5 sm:text-sm">
                View Call Charges
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xs rounded-lg border border-gray-200 bg-white p-5 shadow-2xl sm:max-w-md sm:rounded-xl sm:p-6"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 text-gray-500 transition-colors hover:text-gray-700 sm:right-3 sm:top-3"
              >
                <CloseIcon />
              </button>

              <h2 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                Call Charges
              </h2>
              <p className="mb-5 rounded-md border border-teal-200 bg-teal-100 p-2 text-center text-xs font-semibold text-teal-700 sm:text-sm">
                Note: £1.55/min + access charge
              </p>

              {/* Details */}
              <div className="space-y-2 text-xs text-gray-700 sm:space-y-3 sm:text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-base text-teal-600 sm:text-lg">📞</span>
                  <p>
                    Calls cost <b>£1.55/min</b> plus your phone company’s access
                    charge.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-base text-teal-600 sm:text-lg">🔞</span>
                  <p>
                    You must be aged <b>18 or over</b> to use this service.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-base text-teal-600 sm:text-lg">🇬🇧</span>
                  <p>Service available to <b>UK residents only</b>.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-base text-teal-600 sm:text-lg">🎙</span>
                  <p>Calls are <b>recorded</b> for training & quality.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;