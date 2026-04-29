/*
  Section 7 — Контакты (Contacts)
  Title + description + Telegram button
*/

import { useEffect, useRef, useState } from "react";

const COLOR = "#950706";

// function InstagramIcon() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0 }}>
//       <rect x="2" y="2" width="20" height="20" rx="5" stroke="#ffffff" strokeWidth="2" />
//       <circle cx="12" cy="12" r="4" stroke="#ffffff" strokeWidth="2" />
//       <circle cx="17.5" cy="6.5" r="1.5" fill="#ffffff" />
//     </svg>
//   );
// }

function Section7() {
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
            Контакты
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
            transform: visible
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.15s",
            willChange: "transform, opacity",
          }}
        >
          Если у вас возникнут вопросы, можете
          <br />
          обращаться к нашему свадебному
          <br />
          организатору
        </p>

        {/* Instagram button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.3s",
            willChange: "transform, opacity",
          }}
        >
          <a
            href="https://www.instagram.com/andrey_dedushkevich"
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
            {/* <InstagramIcon /> */}
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
              НАПИСАТЬ В ИНСТАГРАМ
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section7;
