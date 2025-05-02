/* eslint-disable no-unused-vars */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard.jsx"
import style from "./testimonials.module.css"


const testimonials = [
  {
    id: 1,
    category: "SOFTWARE AND IT SERVICES",
    title: "Straight from the mouth: California Dreamin'",
    description:
      "Supporting Branch, Silicon Valley's leading deep linking platform, is a software engineer's dream. But can engineers smoothly fit into an American team? Don't take our word for it – hear about our shared culture from Branch Co-Founder Dmitri Gaskin.",
    thumbnail:"https://pbs.twimg.com/media/Gjq0fPobIAAnVJ-?format=jpg&name=4096x4096",
    videoUrl: "https://www.youtube.com/watch?v=o8NPllzkFhE",
  },
  {
    id: 2,
    category: "GAMING",
    title: "Straight from the mouth: Pioneering AI solutions with a reliable partner",
    description:
      "Listen to Luke Crane, Voice of Fire's CEO, explain how Software Mind helped build a pioneering AI-powered solution that delivers personalized role-playing games to users around the world and in real time.",
    thumbnail: "https://speakernation.com/wp-content/uploads/2021/02/The-TEDx-Technique-_Feature.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-moW9jvvMr4",
  },
  {
    id: 3,
    category: "TELECOM",
    title: "Straight from the mouth: Faster product delivery with telecom & AI experts",
    description:
      "Dag Peak, Chief Product and Technology Officer at Alianza, explain how cooperation with Software Mind accelerated Alianza's product development and engineering capacity.",
    thumbnail: "https://static01.nyt.com/images/2015/03/12/fashion/12TED2/12TED2-superJumbo.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6kPHnl-RsVI",
  },
]

// Define the positions for each card slot
const positions = [
  { left: "5%", zIndex: 1, y: 20 }, // Left position
  { left: "35%", zIndex: 3, y: -20 }, // Middle position
  { left: "65%", zIndex: 1, y: 20 }, // Right position
]

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState(null)
  // Track which testimonial index is in which position (0=left, 1=middle, 2=right)
  const [cardOrder, setCardOrder] = useState([0, 1, 2])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleVideoPlay = (id) => {
    setActiveVideoId(id === activeVideoId ? null : id)
  }

  // Function to rotate cards left (when right card is clicked)
  const rotateLeft = () => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder]
      // Save the first item
      const first = newOrder[0]
      // Shift all items left
      newOrder[0] = newOrder[1]
      newOrder[1] = newOrder[2]
      // Place the first item at the end
      newOrder[2] = first
      return newOrder
    })
  }

  // Function to rotate cards right (when left card is clicked)
  const rotateRight = () => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder]
      // Save the last item
      const last = newOrder[2]
      // Shift all items right
      newOrder[2] = newOrder[1]
      newOrder[1] = newOrder[0]
      // Place the last item at the beginning
      newOrder[0] = last
      return newOrder
    })
  }

  const handleCardClick = (clickedPosition) => {
    // Prevent multiple clicks during animation
    if (isAnimating || clickedPosition === 1) return

    setIsAnimating(true)

    if (clickedPosition === 0) {
      // Left card was clicked: rotate right
      rotateRight()
    } else {
      // Right card was clicked: rotate left
      rotateLeft()
    }

    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 700)
  }

  return (
    <div>
      <motion.h1 className={style.Hear} 
      
      initial = {{
        y:"80px",
        opacity:0,
      }}

      whileInView={{
        y:0,
        opacity:1,
        transition:{duration:1.4}

      }}

      viewport={{once:true,
        amount:0.8
      }}

      
      
      >Hear from our clients</motion.h1>
    <div className={style.testimonials_container}>
      <div className={style.testimonials_carousel}>
        {testimonials.map((testimonial, index) => {
          // Find which position this card is currently in
          const positionIndex = cardOrder.indexOf(index)

          return (
            <motion.div
              key={`card-${index}`} // Stable key for each card
              className={style.carousel_card}
              style={{
                width: positionIndex === 1 ? "32%" : "30%", // Middle card is wider
              }}
              animate={{
                left: positions[positionIndex].left,
                zIndex: positions[positionIndex].zIndex,
                y: positions[positionIndex].y,
                scale: positionIndex === 1 ? 1.05 : 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              onClick={() => handleCardClick(positionIndex)}
            >
              <TestimonialCard
                testimonial={testimonial}
                isPlaying={testimonial.id === activeVideoId}
                onPlay={() => handleVideoPlay(testimonial.id)}
                isMiddle={positionIndex === 1}
              />
            </motion.div>
          )
        })}
      </div>

      <div className={style.pagination}>
        {testimonials.map((_, index) => (
          <motion.button
            key={`dot-${index}`}
            className={`${style['pagination_dot']} ${cardOrder.indexOf(index) === 1 ? style.active : ''}`}
            onClick={() => {
              // Find the position of this testimonial in the current order
              const position = cardOrder.indexOf(index)
              // If it's not in the middle, click it
              if (position !== 1) handleCardClick(position)
            }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
    </div>
  )
}
