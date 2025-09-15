// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Footer Modal Component
// const Modal = ({ isOpen, onClose, title, content }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
//             initial={{ y: -40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 40, opacity: 0 }}
//           >
//             <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
//             <p className="text-gray-600 leading-relaxed whitespace-pre-line">
//               {content}
//             </p>
//             <button
//               onClick={onClose}
//               className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg"
//             >
//               Close
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// const ContactPage = () => {
//   const [modal, setModal] = useState({ open: false, type: "" });

//   const termsContent = `Career Edge provides general career coaching services by phone.
// We do not provide legal, financial, or medical advice.
// This service is for information and motivational purposes only.
// We do not guarantee employment outcomes.
// By calling our premium rate number, you agree to our terms.
// Calls are recorded and may be used for quality monitoring.`;

//   const privacyContent = `Privacy: We do not collect or store personal information through this website.
// Customer contact is only made by phone or email.
// Any data shared during phone calls is handled in accordance with GDPR and UK privacy laws.`;

//   const contactInfo = {
//     businessName: "Career Edge",
//     email: "support@careeredge.co.uk",
//     phone: "020 1234 5678 (Mon–Sat, 10am–6pm)",
//     address: `Career Edge
// 71-75 Shelton Street
// Covent Garden
// London
// WC2H 9JQ
// United Kingdom`,
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Contact Section */}
//       <section className="flex-1 bg-gradient-to-br from-teal-50 to-cyan-50 py-16 px-6 md:px-12">
//         <div className="max-w-5xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
//           >
//             Contact Us
//           </motion.h1>
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white shadow-lg rounded-xl p-6"
//             >
//               <h2 className="text-xl font-semibold text-teal-700 mb-4">
//                 {contactInfo.businessName}
//               </h2>
//               <p className="text-gray-700 mb-2">
//                 <strong>Email:</strong> {contactInfo.email}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Non-Premium Helpline:</strong> {contactInfo.phone}
//               </p>
//               <p className="text-gray-700 whitespace-pre-line">
//                 <strong>Address:</strong> {contactInfo.address}
//               </p>
//             </motion.div>

//             {/* Form */}
//             <motion.form
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white shadow-lg rounded-xl p-6 space-y-4"
//             >
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500"
//                   placeholder="Write your message..."
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium"
//               >
//                 Send Message
//               </button>
//             </motion.form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-6 text-center">
//         <p className="mb-2">
//           © {new Date().getFullYear()} {contactInfo.businessName}. All rights
//           reserved.
//         </p>
//         <div className="space-x-4">
//           <button
//             onClick={() => setModal({ open: true, type: "terms" })}
//             className="text-teal-400 hover:underline"
//           >
//             Terms & Conditions
//           </button>
//           <button
//             onClick={() => setModal({ open: true, type: "privacy" })}
//             className="text-teal-400 hover:underline"
//           >
//             Privacy Notice
//           </button>
//         </div>
//       </footer>

//       {/* Modals */}
//       <Modal
//         isOpen={modal.open && modal.type === "terms"}
//         onClose={() => setModal({ open: false, type: "" })}
//         title="Terms & Conditions"
//         content={termsContent}
//       />
//       <Modal
//         isOpen={modal.open && modal.type === "privacy"}
//         onClose={() => setModal({ open: false, type: "" })}
//         title="Privacy Notice"
//         content={privacyContent}
//       />
//     </div>
//   );
// };

// export default ContactPage;
