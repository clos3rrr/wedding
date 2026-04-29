/*
  Section 5 — Дресс-код (Dress Code)
  Title + description + dresscode image
*/

import { useEffect, useRef, useState } from "react";
import dresscodeImg from "../assets/dresscode.png";

const COLOR = "#950706";

function Section5() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#e8ded4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 20,
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            willChange: "transform, opacity",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "33.69px",
              lineHeight: "35px",
              letterSpacing: "0px",
              textAlign: "center",
              textTransform: "uppercase",
              color: COLOR,
            }}
          >
            Дресс-код
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21.7px",
            letterSpacing: "0px",
            textAlign: "center",
            color: "#220503",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.15s",
            willChange: "transform, opacity",
          }}
        >
          Для нас самое главное — ваше присутствие!
          <br />
          Но мы будем благодарны, если в своих нарядах
          <br />
          вы поддержите цветовую гамму нашего торжества
        </p>

        {/* Dresscode image */}
        <div
          style={{
            width: "100%",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.3s",
            willChange: "transform, opacity",
          }}
        >
          <img
            src={dresscodeImg}
            alt="Дресс-код"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;
