/* eslint-disable no-unused-vars */
"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import style from "./testimonials.module.css"

export default function TestimonialCard({ testimonial, isPlaying, onPlay, isMiddle }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isPlaying])

  return (
    <div className={`${style.testimonial_card} ${isMiddle ? style.middle_card : ""}`}>
      <div className={style.video_container}>
        {isPlaying ? (
          <>
            <img src={testimonial.thumbnail || "/placeholder.svg"} alt={testimonial.title} className={style.thumbnail} />
            <button
              className={style.play_button}
              onClick={(e) => {
                e.stopPropagation()
                window.open(testimonial.videoUrl, "_blank")
              }}
            >
              <Play className={style.play_icon} fill="white" size={40} />
            </button>
          </>
        ) : (
          <>
            <img src={testimonial.thumbnail || "/placeholder.svg"} alt={testimonial.title} className={style.thumbnail} />
            <button
              className={style.play_button}
              onClick={(e) => {
                e.stopPropagation()
                onPlay()
              }}
            >
              <Play className={style.play_icon} fill="white" size={40} />
            </button>
          </>
        )}
      </div>

      <div className={style.content}>
        <div className={style.category}>{testimonial.category}</div>
        <h2 className={style.title}>{testimonial.title}</h2>
        <p className={style.description}>{testimonial.description}</p>

        <motion.button
          className={style.watch_button}
          onClick={(e) => {
            e.stopPropagation()
            window.open(testimonial.videoUrl, "_blank")
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Watch
        </motion.button>
      </div>
    </div>
  )
}
