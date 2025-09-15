import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="relative text-gray-900 min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#EDF1F7" }} // 👈 background color applied
      >
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-24 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight text-transparent bg-clip-text bg-blue-700 from-teal-400 to-teal-600">
                Professional Interview Coaching by Phone
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                Get expert career guidance & live interview prep over the phone,
                designed to help you succeed in every step of your journey.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={openModal}
                  className="mt-3 px-4 py-2 rounded-lg bg-blue-700 text-white font-medium text-xs sm:text-sm shadow-lg hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-300"
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
              className="bg-gray-100 border border-gray-300 rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 w-full max-w-xs sm:max-w-sm mx-auto cursor-pointer transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 text-center">
                Pay As You Go
              </h3>
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-2">
                £1.55
                <span className="text-base sm:text-lg md:text-xl font-medium text-gray-500">
                  /min
                </span>
              </p>
              <p className="text-xs text-gray-500 text-center mb-5">
                + your phone company's access charge
              </p>
              <button className="w-full bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-5 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 text-xs sm:text-sm">
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
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg sm:rounded-xl shadow-2xl p-5 sm:p-6 max-w-xs sm:max-w-md w-full relative border border-gray-200"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <CloseIcon />
              </button>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Call Charges
              </h2>
              <p className="bg-teal-100 text-teal-700 font-semibold p-2 rounded-md text-center mb-5 border border-teal-200 text-xs sm:text-sm">
                Note: £1.55/min + access charge
              </p>

              {/* Details */}
              <div className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-base sm:text-lg text-teal-600">📞</span>
                  <p>
                    Calls cost <b>£1.55/min</b> plus your phone company’s access
                    charge.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-base sm:text-lg text-teal-600">🔞</span>
                  <p>
                    You must be aged <b>18 or over</b> to use this service.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-base sm:text-lg text-teal-600">🇬🇧</span>
                  <p>
                    Service available to <b>UK residents only</b>.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-base sm:text-lg text-teal-600">🎙️</span>
                  <p>
                    Calls are <b>recorded</b> for training & quality.
                  </p>
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
