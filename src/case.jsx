"use client"

import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const case_studies = [
  {
    id: 1,
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2434551725/display_1500/stock-photo-ai-concept-controlling-technological-tools-intelligent-robots-development-of-an-artificial-code-2434551725.jpg",
    title: "FOOD PROCESSING",
    description: "Increasing work efficiency and improving business outcomes with artificial...",
    techtags: ["AZURE APP SERVICE", "SONARQUBE", "AZURE BOT FRAMEWORK", "COMPOSER"],
  },
  {
    id: 2,
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2249889569/display_1500/stock-photo-businessmen-making-handshake-with-partner-greeting-dealing-merger-and-acquisition-business-2249889569.jpg",
    title: "FINANCIAL SERVICES",
    description: "Enhancing a web application for mortgage brokers, introducers and...",
    techtags: [".NET", "ANGULAR", "AWS", "BITBUCKET", "DOCKER SWARM", "JENKINS"],
  },
  {
    id: 3,
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2036186195/display_1500/stock-photo-indian-male-doctor-consulting-senior-old-patient-filling-form-at-consultation-professional-2036186195.jpg",
    title: "BIOTECH AND LIFE SCIENCES",
    description: "Creating an AI tool to streamline healthcare processes",
    techtags: [".NET", "AZURE BOT FRAMEWORK", "AZURE FUNCTION", "COSMOS DB", "GPT-4"],
  },
  {
    id: 4,
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2461784539/display_1500/stock-photo-portrait-of-smiling-grey-hair-man-with-beard-sitting-front-table-with-laptop-talking-on-mobile-2461784539.jpg",
    title: "SPORTS BETTING",
    description: "Developing a fixed odds betting platform",
    techtags: ["APACHE KAFKA", "APACHE SPARK", "COUCHBASE", "ELASTICSEARCH"],
  },
  {
    id: 5,
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2150977743/display_1500/stock-photo-laptop-computer-notebook-and-coffee-cup-on-dark-blue-background-top-view-copy-space-2150977743.jpg",
    title: "TELECOM",
    description: "Carrying out a digital transformation of a monolithic system for a...",
    techtags: ["ANGULAR", "AWS", "DOCKER", "JAVA 1.8", "KARATE", "KUBERNETES"],
  },
]

// Enhanced natural transition variants
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

// More natural image transition variants
const imageVariants = {
  initial: { opacity: 0, scale: 1.03 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
}

export default function AnimatedCardCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)

  // Auto-advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % case_studies.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const card = case_studies[activeIdx]

  const handlePrevious = () => {
    setActiveIdx((prev) => (prev === 0 ? case_studies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % case_studies.length)
  }

  return (
    <>
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
          <p className="m-0 text-[18px]">
            Innovative development and demonstrable results - find out how
            <br />
            we've helped companies across industries
          </p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center justify-center bg-gray-50">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-0">
          {/* Image Section - Left side */}
          <div className="w-full md:w-2/5 flex items-stretch bg-gray-200 rounded-l-3xl overflow-hidden shadow-2xl">
            <motion.div
              key={`image-${card.id}`}
              className="w-full h-full"
              variants={imageVariants}
              initial="initial"
              animate="animate"
            >
              <img src={card.imageUrl || "/placeholder.svg"} alt={card.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text Content Section - Right side */}
          <div className="w-full md:w-3/5 flex flex-col justify-between px-10 py-10 bg-gradient-to-br from-[#3f2b96] via-[#a8c0ff] to-[#ff512f] text-white rounded-r-3xl shadow-2xl">
            <div className="flex flex-col">
              <motion.div
                key={`title-${card.id}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3 }}
                className="text-lg tracking-wide mb-4 opacity-90 font-medium"
              >
                {card.title}
              </motion.div>

              <motion.h2
                key={`desc-${card.id}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              >
                {card.description}
              </motion.h2>

              <motion.div
                key={`tags-${card.id}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-wrap gap-4 mb-6"
              >
                {card.techtags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="border border-white rounded-2xl px-6 py-2 text-base font-medium bg-white/5"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pagination Numbers with Chevron Buttons */}
        <div className="flex items-center justify-center gap-6 mt-6">
          {/* Chevron Left */}
          <button
            onClick={handlePrevious}
            className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Pagination Numbers */}
          <div className="flex gap-4">
            {case_studies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIdx(index)}
                className={`text-lg font-medium ${
                  activeIdx === index ? "text-orange-500" : "text-gray-700"
                } transition-colors`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Chevron Right */}
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-gray-400 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </>
  )
}