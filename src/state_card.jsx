"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import first_image from "./main_page/assets/first.png"
import second_image from "./main_page/assets/second.png"
import third_image from "./main_page/assets/third.png"
import fourth_image from "./main_page/assets/fourth.png"
import fifth_image from "./main_page/assets/fifth.jpg"
import "./state_card.css"
import { motion } from "framer-motion"

export default function CardCarousel() {
  const cards = [
    {
      id: 1,
      type: "EBOOK",
      title: "Maximizing \n Adtech \n Strategies with\n Data and AI",
      image: first_image,
      gradient: "red-orange",
    },
    {
      id: 2,
      type: "EBOOK",
      title: "Your Guide to\n Connecting 5G\n and Roaming\n Strategies",
      image: second_image,
      gradient: "black",
    },
    {
      id: 3,
      type: "WORKSHOP",
      title: "Maximize your \n  data's value with \n a Data Health \n Check",
      image: third_image,
      gradient: "gray",
    },
    {
      id: 4,
      type: "SUCCESS",
      title: "Creating  a new \n operational data \n store for  an \n outdoor advertising ...",
      image: fourth_image,
      gradient: "red-dark",
    },
    {
      id: 5,
      type: "WEBINAR",
      title: "Your Guiide to \n DevOps in \n Telecom \n Software \n Development ",
      image: fifth_image,
      gradient: "blue-purple",
    },
  ]

  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3
  const showLeftChevron = startIndex > 0
  const showRightChevron = startIndex < cards.length - visibleCount
  const visibleCards = cards.slice(startIndex, startIndex + visibleCount)
  const totalDots = 3
  const [currentDot, setCurrentDot] = useState(0);
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
      setCurrentDot((prev) => Math.max(prev - 1, 0));
    }
  }

  const handleNext = () => {
    if (startIndex < cards.length - visibleCount) {
      setStartIndex(startIndex + 1)
      setCurrentDot((prev) => Math.min(prev + 1, totalDots - 1));
    }
  }

  const handleDotClick = (dotIndex) => {
    setStartIndex(dotIndex * visibleCount)
  }

  // Framer Motion variants for card and image
  const cardVariants = {
    initial: { y: 0 },
    hovered: { y: 10 }
  }
  const imageVariants = {
    initial: { scale: 1 },
    hovered: { scale: 1.08 }
  }

  return (
    <div className="carousel-container">
      <motion.h1
              className="carousel-title"
              initial={{ opacity: 0, y: "60px" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1.5 },
              }}
              viewport={{ once: true, amount: 0 }}
            >
              In the spotlight
            </motion.h1>
      {/* Card Container */}
      <div className="cards-wrapper">
        {visibleCards.map((card) => (
          <div key={card.id} className="card-item">
            <motion.div
              className="card"
              variants={cardVariants}
              initial="initial"
              whileHover="hovered"
              animate="initial"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Card Image */}
              <div className="card-image-container">
                <motion.img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="card-image"
                  variants={imageVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>

              {/* Card Content */}
              <div className={`card-content ${card.gradient}`}>
                <div className="card-header">
                  <div className="card-icon-container">
                    {card.type === "EBOOK" && (
                      <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {card.type === "WORKSHOP" && (
                      <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {card.type === "SUCCESS" && (
                      <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {card.type === "WEBINAR" && (
                      <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="card-type">{card.type}</span>
                </div>
                <h3 className="card-title"> {card.title.split('\n').map((line, idx) => (
    <span key={idx}>
      {line}
      {idx !== card.title.split('\n').length - 1 && <br />}
    </span>
  ))}</h3>
                <motion.button
  className="download-btn"
  whileHover="hover"
  initial="rest"
  animate="rest"
  variants={{}}
>
  Download
  <motion.span
    style={{ display: "inline-flex", alignItems: "center", marginLeft: 8 }}
    variants={{
      rest: { x: 0 },
      hover: { x: 10 }
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <ChevronRight size={22} strokeWidth={2.2} />
  </motion.span>
</motion.button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {showLeftChevron && (
        <button onClick={handlePrevious} className="nav-button nav-button-left" aria-label="Previous cards">
          <ChevronLeft className="nav-icon" />
        </button>
      )}

      {showRightChevron && (
        <button onClick={handleNext} className="nav-button nav-button-right" aria-label="Next cards">
          <ChevronRight className="nav-icon" />
        </button>
      )}

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {Array.from({ length: totalDots }).map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${index === currentDot ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

