/*
  Section 10 — Чат гостей (Guest Group Chat)
  Title + description + Telegram group chat button
*/

import { useEffect, useRef, useState } from "react";

const COLOR = "#950706";

function TelegramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
        fill="#ffffff"
      />
    </svg>
  );
}

function Section10() {
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
            Чат гостей
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
          Мы создали общий чат для всех гостей —<br />
          там вы сможете познакомиться друг с другом
          <br />и быть в курсе всех новостей торжества
        </p>

        {/* Telegram button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.3s",
            willChange: "transform, opacity",
          }}
        >
          <a
            href="https://t.me/+ATYoe_2EW6I4NDEy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: 220,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 2,
              background:
                "radial-gradient(90.23% 120.08% at 9.77% 0%, #C32C2B 0%, #950706 100%)",
              textDecoration: "none",
            }}
          >
            <TelegramIcon />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "21.7px",
                letterSpacing: "-0.04em",
                textAlign: "center",
                color: "#E8DED4",
              }}
            >
              ПРИСОЕДЕНИТЬСЯ
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section10;
