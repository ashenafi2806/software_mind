"use client"

/* eslint-disable no-unused-vars */
import style from "./Abuse.module.css"
import { motion } from "framer-motion"

export default function Abuse() {
  // We don't need the step state or useEffect anymore

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true  }}
      transition={{ duration: 0.5 }}
      className={style.Container}
    >
      <h1>
        Engineer scalable<br></br> solutions with<br></br>experienced teams
      </h1>
      <button className={style.button}>Contact us</button>
      <div className={style.Left}>
        {/* We don't need AnimatePresence since we're using whileInView */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2 }} // Longest delay for last item
          className={style.stat}
        >
          1600<span>&#43; talented experts</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }} // Medium delay for middle item
          className={style.stat}
        >
          25<span>&#43; years of innovation</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0 }} // No delay for first item
          className={style.stat}
        >
          350<span>&#43; clients who trust us</span>
        </motion.h1>
      </div>
    </motion.div>
  )
}
