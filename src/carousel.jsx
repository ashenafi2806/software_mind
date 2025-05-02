// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import "./carousel.css";

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
    <div className="carousel-wrapper">
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
        Results we’ve delivered
      </motion.h1>

      <div className="carousel-container">
        {current > 0 && (
          <button onClick={() => handleSlide("left")} className="carousel-button left">
            <ChevronLeft className="chevron-icon" />
          </button>
        )}

        <div className="carousel-viewport">
          <div
            ref={containerRef}
            className="carousel-track"
            style={{
              transform: `translateX(-${(current * 100) / visibleCards}%)`,
              width: `${(stats.length * 100) / visibleCards}%`,
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="carousel-card-wrapper"
                style={{ width: `${100 / stats.length}%` }}
              >
                <div className="carousel-card">
                  <div>
                    <h2 className="card-percentage">{stat.percentage}</h2>
                    <p className="card-description">{stat.description}</p>
                  </div>
                  <button className="card-button">
                    <span>Learn more</span>
                    <svg
                      className="card-arrow"
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
          <button onClick={() => handleSlide("right")} className="carousel-button right">
            <ChevronRight className="chevron-icon" />
          </button>
        )}

        <div className="carousel-indicators">
          {Array.from({ length: stats.length - visibleCards + 1 }).map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${index === current ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
