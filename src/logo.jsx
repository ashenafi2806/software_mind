/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";

const logos = [
  {
    grayscale: "https://www.svgrepo.com/show/521936/youtube.svg",
    color: "https://www.svgrepo.com/show/475700/youtube-color.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/504994/tiktok.svg",
    color: "https://www.svgrepo.com/show/452114/tiktok.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/512889/snapchat-136.svg",
    color: "https://www.svgrepo.com/show/475681/snapchat-color.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/521923/whatsapp.svg",
    color: "https://www.svgrepo.com/show/475692/whatsapp-color.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/521711/instagram.svg",
    color: "https://www.svgrepo.com/show/452229/instagram-1.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/521691/google-chrome.svg",
    color: "https://www.svgrepo.com/show/444197/browser-google-chrome.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/513008/twitter-154.svg",
    color: "https://www.svgrepo.com/show/475689/twitter-color.svg",
  },
  {
    grayscale: "https://www.svgrepo.com/show/506477/facebook.svg",
    color: "https://www.svgrepo.com/show/452197/facebook.svg",
  },
];

function LogoGrid() {
  return (
    <div className="bg-gray-50 py-12">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our partnerships and associations
      </motion.h2>

      {/* Logo Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-4 gap-8 items-center">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="relative group flex items-center justify-center h-20 w-20"
          >
            {/* Grayscale Logo */}
            <img
              src={logo.grayscale}
              alt={`Logo ${idx + 1}`}
              className="absolute top-0 left-0 h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              draggable={false}
            />
            {/* Colored Logo */}
            <img
              src={logo.color}
              alt={`Logo ${idx + 1} Colored`}
              className="absolute top-0 left-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoGrid;