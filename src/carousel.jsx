// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import style from "./carousel.module.css";

const stats = [
  { percentage: "6x", description: "Faster time of market" },
  { percentage: "50%", description: "Savings in cloud usage costs" },
  { percentage: "3 million", description: "Users within 2 years" },
  { percentage: "40%", description: "Lower maintenance costs" },
  { percentage: "14x", description: "Shorter onboarding" },
  { percentage: "#1", description: "Mobile self-care app in poland" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const visibleCards = 3;
  const maxIndex = stats.length - visibleCards;
  const containerRef = useRef(null);

  const handleSlide = (direction) => {
    if (direction === "left" && current > 0) setCurrent((prev) => prev - 1);
    if (direction === "right" && current < maxIndex) setCurrent((prev) => prev + 1);
  };

  return (
    <div className={style.carousel_wrapper}>
      <motion.h1
        className={style.carousel_title}
        initial={{ opacity: 0, y: "60px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5 },
        }}
        viewport={{ once: true, amount: 0 }}
      >
        Results we’ve delivered
      </motion.h1>

      <div className={style.carousel_container}>
        {current > 0 && (
          <button
            onClick={() => handleSlide("left")}
            className={`${style.carousel_button} ${style.left}`}
          >
            <ChevronLeft className={style.chevron_icon} />
          </button>
        )}

        <div className={style.carousel_viewport}>
          <div
            ref={containerRef}
            className={style.carousel_track}
            style={{
              transform: `translateX(-${(current * 100) / visibleCards}%)`,
              width: `${(stats.length * 100) / visibleCards}%`,
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={style.carousel_card_wrapper}
                style={{ width: `${100 / stats.length}%` }}
              >
                <div className={style.carousel_card}>
                  <div>
                    <h2 className={style.card_percentage}>{stat.percentage}</h2>
                    <p className={style.card_description}>{stat.description}</p>
                  </div>
                  <button className={style.card_button}>
                    <span>Learn more</span>
                    <svg
                      className={style.card_arrow}
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {current < maxIndex && (
          <button
            onClick={() => handleSlide("right")}
            className={`${style.carousel_button} ${style.right}`}
          >
            <ChevronRight className={style.chevron_icon} />
          </button>
        )}

        <div className={style.carousel_indicators}>
          {Array.from({ length: stats.length - visibleCards + 1 }).map((_, index) => (
            <div
              key={index}
              className={`${style.indicator_dot} ${
                index === current ? style.active : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
