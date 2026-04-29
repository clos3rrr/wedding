/*
  Section 2 — Invitation text + Calendar
  Date: 7 August 2026 (Пятница)
  Uses CSS transitions triggered by `visible` class, not animations,
  so inline transforms aren't overwritten.
  Heart uses a wrapper for centering (translate) and an inner for scale.
*/

import { useEffect, useRef, useState } from "react";

const WEDDING_DAY = 7;
const TOTAL_DAYS = 31;
const FIRST_DAY_INDEX = 5; // Aug 1 2026 = Saturday = index 5 in Mon-based week
const DAYS_OF_WEEK = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const COLOR = "#950706";

function buildGrid() {
  const cells: (number | null)[] = [];
  for (let i = 0; i < FIRST_DAY_INDEX; i++) cells.push(null);
  for (let d = 1; d <= TOTAL_DAYS; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const grid = buildGrid();

function Section2() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const v = visible;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#e8ded4",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 32px",
      }}
    >
      <style>{`
        @keyframes s2HeartPop {
          0%   { opacity: 0; transform: scale(0.3); }
          60%  { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes s2HeartPulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.08); }
        }
      `}</style>

      <div style={{ width: 320, textAlign: "center" }}>
        {/* Title image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
            opacity: v ? 1 : 0,
            transform: v ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0s",
            willChange: "transform, opacity",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "33.69px",
              lineHeight: "35px",
              letterSpacing: "0px",
              color: "#950706",
              textAlign: "center",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Дорогие родные и друзья!
          </p>
        </div>

        {/* Invitation text */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "20.15px",
            letterSpacing: "0px",
            textAlign: "center",
            color: "#220503",
            marginBottom: 32,
            opacity: v ? 1 : 0,
            transform: v ? "translate3d(0, 0, 0)" : "translate3d(0, 25px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.15s",
            willChange: "transform, opacity",
          }}
        >
          От всего сердца хотим пригласить вас стать частью нашего незабываемого
          свадебного торжества и открыть вместе с нами новую главу нашей жизни!
        </p>

        {/* Month + Year header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 12,
            padding: "0 8px",
            opacity: v ? 1 : 0,
            transform: v ? "translate3d(0, 0, 0)" : "translate3d(0, 25px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.3s",
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
              color: COLOR,
              textTransform: "uppercase",
            }}
          >
            Август
          </span>
          <span
            style={{
              fontFamily: "'Antic Didone', serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "24.3px",
              letterSpacing: "0px",
              textAlign: "center",
              color: COLOR,
            }}
          >
            2026
          </span>
        </div>

        {/* Day-of-week headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            marginBottom: 4,
            padding: "0 8px",
            opacity: v ? 1 : 0,
            transform: v ? "translate3d(0, 0, 0)" : "translate3d(0, 25px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.4s",
            willChange: "transform, opacity",
          }}
        >
          {DAYS_OF_WEEK.map((d) => (
            <span
              key={d}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "24.3px",
                letterSpacing: "0px",
                textAlign: "center",
                color: COLOR,
                padding: "4px 0",
              }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Calendar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            padding: "0 8px",
            opacity: v ? 1 : 0,
            transform: v ? "translate3d(0, 0, 0)" : "translate3d(0, 25px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.5s",
            willChange: "transform, opacity",
          }}
        >
          {grid.map((day, i) => {
            const isWedding = day === WEDDING_DAY;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 42,
                  position: "relative",
                }}
              >
                {/* Heart: wrapper handles centering, inner handles scale animation */}
                {isWedding && (
                  <div
                    style={{
                      position: "absolute",
                      top: "51%",
                      left: "49%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <svg
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: 42,
                        height: 40,
                        display: "block",
                        animation: v
                          ? "s2HeartPop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.9s forwards, s2HeartPulse 1.8s ease-in-out 1.5s infinite"
                          : "none",
                        opacity: 0,
                      }}
                    >
                      <path
                        d="M20 35C20 35 2.5 23 2.5 12.5C2.5 6.5 6.5 2.5 11.5 2.5C15 2.5 17.8 4.5 20 7.5C22.2 4.5 25 2.5 28.5 2.5C33.5 2.5 37.5 6.5 37.5 12.5C37.5 23 20 35 20 35Z"
                        stroke={COLOR}
                        strokeWidth="1.2"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
                {day != null && (
                  <span
                    style={{
                      fontFamily: "'Antic Didone', serif",
                      fontWeight: day === WEDDING_DAY ? 800 : 400,
                      fontSize: "18px",
                      lineHeight: "24.3px",
                      letterSpacing: "0px",
                      textAlign: "center",
                      color: COLOR,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section2;
