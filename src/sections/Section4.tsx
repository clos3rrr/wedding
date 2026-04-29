/*
  Section 4 — Локация (Location)
  Title + address text + restaurant photo + map button with hearts
*/

import { useEffect, useRef, useState } from "react";

import photoImg from "../assets/unnamed.jpg";
import heart2Img from "../assets/heart2.png";
import heartImg from "../assets/heart.png";

const COLOR = "#950706";

function Section4() {
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
        {/* Title — ЛОКАЦИЯ */}
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
            Локация
          </span>
        </div>

        {/* Address text */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21.7px",
            letterSpacing: "0px",
            color: "#220503",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.15s",
            willChange: "transform, opacity",
          }}
        >
          Усадьба &laquo;Двинская&raquo;,
          <br />
          д. Коптево, ул. Двинская, 11
        </p>

        {/* Restaurant photo with decorative hearts */}
        <div
          style={{
            position: "relative",
            width: "100%",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.3s",
            willChange: "transform, opacity",
          }}
        >
          {/* Top-left hearts: heart2 + heart */}
          <img
            src={heart2Img}
            alt=""
            style={{
              position: "absolute",
              top: -14,
              left: 0,
              width: 18,
              height: 21,
              transform: "rotate(340deg)",
              zIndex: 2,
            }}
          />
          <img
            src={heartImg}
            alt=""
            style={{
              position: "absolute",
              top: -12,
              left: 17,
              width: 14,
              height: 17,
              transform: "rotate(19deg)",
              zIndex: 2,
            }}
          />

          {/* Photo — slightly rotated */}
          <img
            src={photoImg}
            alt="Ресторан"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 4,
              transform: "rotate(2deg)",
            }}
          />

          {/* Bottom-right heart */}
          <img
            src={heartImg}
            alt=""
            style={{
              position: "absolute",
              bottom: -10,
              right: -6,
              width: 16,
              height: 19,
              transform: "rotate(8deg)",
              zIndex: 2,
            }}
          />
        </div>

        {/* Map button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.45s",
            willChange: "transform, opacity",
          }}
        >
          <a
            href="https://yandex.by/maps/-/CPvnF0YA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 220,
              height: 42,
              borderRadius: 2,
              background:
                "radial-gradient(90.23% 120.08% at 9.77% 0%, #C32C2B 0%, #950706 100%)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "21.7px",
                letterSpacing: "-0.04em",
                textAlign: "center",
                color: "#E8DED4",
              }}
            >
              ПОСМОТРЕТЬ НА КАРТЕ
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section4;
