/*
  Section 3 — Программа дня (Day Program / Timeline)
  Time + heart + title animate left-to-right on scroll.
  Descriptions are always visible (no animation).
  Main title animates like Section1 textIn (scale + fade).
*/

import { useEffect, useRef, useState } from "react";
import heartImg from "../assets/Vector_32.png";

const COLOR = "#950706";

const ITEMS = [
  {
    time: "15:30",
    title: "СБОР ГОСТЕЙ",
    desc: "Фуршет и легкая музыка",
  },
  {
    time: "16:00",
    title: "БРАКОСОЧЕТАНИЕ",
    desc: "Самое трогательное событие\nнашего торжества",
  },
  {
    time: "16:30",
    title: "ФОТОСЕССИЯ",
    desc: "Возможность сделать\nфотографии с нами на память",
  },
  {
    time: "17:00",
    title: "НАЧАЛО БАНКЕТА",
    desc: "Время наслаждаться вкусной\nедой, танцевать и веселиться",
  },
  {
    time: "22:00",
    title: "СВАДЕБНЫЙ ТОРТ",
    desc: "Сладкая часть нашего вечера",
  },
];

function Section3() {
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
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 18px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Main title */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 36,
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
              lineHeight: "24.3px",
              letterSpacing: "0px",
              textAlign: "center",
              color: COLOR,
              textTransform: "uppercase",
            }}
          >
            Программа дня
          </span>
        </div>

        {/* Timeline items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            width: "100%",
          }}
        >
          {ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 16,
              }}
            >
              {/* Time — animated */}
              <span
                style={{
                  fontFamily: "'Antic Didone', serif",
                  fontWeight: 400,
                  fontSize: "26px",
                  lineHeight: "24.3px",
                  letterSpacing: "-0.04em",
                  color: COLOR,
                  flexShrink: 0,
                  width: 63,
                  textAlign: "right",
                  fontVariantNumeric: "tabular-nums",
                  marginTop: 2,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: `${0.15 + i * 0.15}s`,
                  willChange: "transform, opacity",
                }}
              >
                {item.time}
              </span>

              {/* Heart — animated */}
              <img
                src={heartImg}
                alt=""
                style={{
                  width: 12,
                  height: 13,
                  flexShrink: 0,
                  marginTop: 6,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: `${0.25 + i * 0.15}s`,
                  willChange: "transform, opacity",
                }}
              />

              {/* Title + description */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "24.3px",
                    letterSpacing: "0px",
                    textAlign: "left",
                    color: COLOR,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)",
                    transition:
                      "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: `${0.35 + i * 0.15}s`,
                    willChange: "transform, opacity",
                  }}
                >
                  {item.title}
                </span>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    color: "#220503",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;
