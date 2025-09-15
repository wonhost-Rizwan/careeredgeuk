import React from "react";
import { motion } from "framer-motion";
import { Briefcase, PhoneCall, FileText } from "lucide-react";

// Dynamic Services Data
const services = [
  {
    id: 1,
    title: "One-on-One Coaching",
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    description:
      "Career Edge provides live, one-on-one coaching to help you succeed in job interviews and progress in your career. Whether you're a recent graduate, changing careers, or preparing for an important interview, our advisors guide you with expert advice and practical tips tailored to your goals.",
  },
  {
    id: 2,
    title: "Interview Preparation",
    icon: <PhoneCall className="w-10 h-10 text-green-600" />,
    description:
      "When you call, you’ll be connected to a professional career coach who will help with interview preparation, confidence-building, and answering common questions like “Tell me about yourself” or “Why should we hire you?”.",
  },
  {
    id: 3,
    title: "CV & Communication",
    icon: <FileText className="w-10 h-10 text-purple-600" />,
    description:
      "We also provide general advice on CV improvement, body language, and effective communication — all designed to give you the edge you need to stand out.",
  },
];

const Service = () => {
  return (
    <section
      id="services"
      className="py-20"
      style={{ backgroundColor: "#EDF1F7" }} // ✅ Updated Background Color
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          We empower individuals to perform better in interviews, improve their CVs,
          and boost confidence through professional one-on-one guidance.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto text-xs md:text-sm text-gray-500 bg-gray-100 p-4 rounded-lg shadow-sm"
        >
          <p>
            This is a phone-based coaching service designed for informational and
            motivational purposes only. We do not guarantee employment or offer legal
            or financial advice. Callers must be aged 18 or over. Calls are recorded and
            charged at <span className="font-semibold">£1.55 per minute</span> plus your
            phone provider’s access charge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
