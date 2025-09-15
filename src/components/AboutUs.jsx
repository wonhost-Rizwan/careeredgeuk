import React from "react";
import { motion } from "framer-motion";
import careerImg from "../assets/img/career_edge4.jpg"; // 👈 direct import

// Dynamic Data
const aboutData = {
  heading: "About Us",
  description:
    "At Career Edge, we are passionate about empowering individuals to achieve career success. Our mission is to provide one-on-one, personalized coaching that builds confidence, sharpens communication, and prepares you for every opportunity ahead. Whether you’re a graduate entering the job market, a professional seeking growth, or someone switching careers, we’re here to guide you with expert advice.",
  highlights: [
    {
      id: 1,
      title: "Our Mission",
      text: "To guide individuals in unlocking their true potential through career coaching, interview preparation, and confidence building.",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "To be a trusted partner for job seekers and professionals worldwide, helping them stand out and succeed.",
    },
    {
      id: 3,
      title: "Why Choose Us?",
      text: "Because we provide practical, tailored, and motivational coaching sessions designed to match your unique goals.",
    },
  ],
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "#EDF1F7" }} // ✅ Updated Background Color
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={careerImg} // 👈 direct imported image
            alt="About Career Edge"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {aboutData.heading}
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {aboutData.description}
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            {aboutData.highlights.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
