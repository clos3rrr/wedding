/*
  Section 8 — Очень ждем вас! (Countdown)
  Title + countdown timer to 7 August 2026 + angels image with hearts
*/

import { useEffect, useRef, useState } from "react";

import angelsImg from "../assets/angels.png";

const COLOR = "#950706";
import heart2Img from "../assets/heart2.png";
import heartImg from "../assets/heart.png";

const TARGET = new Date("2026-08-07T16:00:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Section8() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(getTimeLeft);

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

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: "дней" },
    { value: pad(time.hours), label: "часов" },
    { value: pad(time.minutes), label: "минут" },
    { value: pad(time.seconds), label: "секунд" },
  ];

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#e8ded4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 24px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 16,
        }}
      >
        {/* Title — ОЧЕНЬ ЖДЕМ ВАС! */}
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
            Очень ждем вас!
          </span>
        </div>

        {/* Countdown */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 10px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.15s",
            willChange: "transform, opacity",
          }}
        >
          {units.map((u, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{
                  fontFamily: "'Antic Didone', serif",
                  fontSize: 30,
                  fontWeight: 400,
                  color: "#950706",
                  lineHeight: 1,
                }}
              >
                {u.value}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "#220503",
                  fontWeight: 400,
                }}
              >
                {u.label}
              </span>
            </div>
          ))}
        </div>

        {/* Angels image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginTop: 16,
            aspectRatio: "867 / 482",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 10px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.3s",
            willChange: "transform, opacity",
          }}
        >
          {/* Left hearts */}
          <img
            src={heart2Img}
            alt=""
            style={{
              position: "absolute",
              top: 20,
              left: 16,
              width: 16,
              height: 19,
              transform: "rotate(340deg)",
              zIndex: 2,
            }}
          />
          <img
            src={heartImg}
            alt=""
            style={{
              position: "absolute",
              top: 40,
              left: 8,
              width: 12,
              height: 15,
              transform: "rotate(19deg)",
              zIndex: 2,
            }}
          />

          {/* Right heart */}
          <img
            src={heartImg}
            alt=""
            style={{
              position: "absolute",
              top: 30,
              right: 16,
              width: 14,
              height: 17,
              transform: "rotate(8deg)",
              zIndex: 2,
            }}
          />

          <img
            src={angelsImg}
            alt="Ангелы"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Section8;
