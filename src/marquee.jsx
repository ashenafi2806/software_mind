/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

const uppermarquee = [
  "https://www.svgrepo.com/show/521936/youtube.svg",
  "https://www.svgrepo.com/show/504994/tiktok.svg",
  "https://www.svgrepo.com/show/512889/snapchat-136.svg",
  "https://www.svgrepo.com/show/521923/whatsapp.svg",
  "https://www.svgrepo.com/show/521711/instagram.svg",
  "https://www.svgrepo.com/show/521691/google-chrome.svg",
  "https://www.svgrepo.com/show/513008/twitter-154.svg",
  "https://www.svgrepo.com/show/506477/facebook.svg",
];

const lowermarquee = [
  "https://www.svgrepo.com/show/521874/telegram.svg",
  "https://www.svgrepo.com/show/506522/microsoft.svg",
  "https://www.svgrepo.com/show/512419/linkedin-161.svg",
  "https://www.svgrepo.com/show/504419/google-meet.svg",
  "https://www.svgrepo.com/show/394305/netflix.svg",
  "https://www.svgrepo.com/show/500951/opera.svg",
  "https://www.svgrepo.com/show/508763/amazon.svg",
  "https://www.svgrepo.com/show/474325/messenger.svg",
];

const upper_multi = [
  "https://www.svgrepo.com/show/475700/youtube-color.svg",
  "https://www.svgrepo.com/show/452114/tiktok.svg",
  "https://www.svgrepo.com/show/475681/snapchat-color.svg",
  "https://www.svgrepo.com/show/475692/whatsapp-color.svg",
  "https://www.svgrepo.com/show/452229/instagram-1.svg",
  "https://www.svgrepo.com/show/444197/browser-google-chrome.svg",
  "https://www.svgrepo.com/show/475689/twitter-color.svg",
  "https://www.svgrepo.com/show/452197/facebook.svg",
];

const lower_multi = [
  "https://www.svgrepo.com/show/452115/telegram.svg",
  "https://www.svgrepo.com/show/448239/microsoft.svg",
  "https://www.svgrepo.com/show/475661/linkedin-color.svg",
  "https://www.svgrepo.com/show/452220/google-meet.svg",
  "https://www.svgrepo.com/show/354109/netflix-icon.svg",
  "https://www.svgrepo.com/show/475662/opera-color.svg",
  "https://www.svgrepo.com/show/475634/amazon-color.svg",
  "https://www.svgrepo.com/show/475666/messenger-color.svg",
];

function Marquee() {
  const [hoveredIndexUpper, setHoveredIndexUpper] = useState(null);
  const [hoveredIndexLower, setHoveredIndexLower] = useState(null);

  return (
    <div className="w-full py-10 bg-gray-50">
      {/* Heading and Description Section */}
      <div className="relative w-full min-h-[50vh] flex flex-col">
        {/* Heading */}
        <motion.h1
          className="font-sans relative left-[10vw] mt-[50px] text-[36px] leading-tight font-bold text-gray-900 scroll_trigger_one"
          initial={{ opacity: 0, y: "100px" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h1>

        {/* Description */}
        <motion.div
          className="font-roboto relative left-1/2 -mt-[70px] text-gray-700 scroll_trigger_two"
          initial={{ opacity: 0, x: "-70px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          Explore our success stories and learn how we’ve helped businesses achieve their goals.
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div  className="relative w-[80%] mx-auto overflow-hidden">

        {/* Upper Marquee */}
        <motion.div
          className="flex gap-20 mt-12 "
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...uppermarquee, ...uppermarquee].map((logo, index) => (
            <img
              key={index}
              src={
                hoveredIndexUpper === index
                  ? upper_multi[index % upper_multi.length]
                  : logo
              }
              alt={`Logo ${index + 1}`}
              className="h-20 w-20 object-contain" // Reduced size
              onMouseEnter={() => setHoveredIndexUpper(index)}
              onMouseLeave={() => setHoveredIndexUpper(null)}
            />
          ))}
        </motion.div>

        {/* Lower Marquee */}
        <motion.div
          className="flex gap-20 mt-40" // Increased vertical distance
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...lowermarquee, ...lowermarquee].map((logo, index) => (
            <img
              key={index}
              src={
                hoveredIndexLower === index
                  ? lower_multi[index % lower_multi.length]
                  : logo
              }
              alt={`Logo ${index + 1}`}
              className="h-20 w-20 object-contain" // Reduced size
              onMouseEnter={() => setHoveredIndexLower(index)}
              onMouseLeave={() => setHoveredIndexLower(null)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;