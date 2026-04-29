/*
  Section 9 — Анкета гостя (Guest Questionnaire)
  Title + two text lines + button linking to the form
*/

import { useEffect, useRef, useState } from "react";

const COLOR = "#950706";

function Section9() {
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
          gap: 18,
        }}
      >
        {/* Title */}
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
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            willChange: "transform, opacity",
          }}
        >
          Анкета гостя
        </span>

        {/* Text 1 */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
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
          Ваши ответы на вопросы очень помогут нам
          <br />
          при организации свадьбы
        </p>

        {/* Text 2 */}
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
            textAlign: "center",
            color: "#220503",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.25s",
            willChange: "transform, opacity",
          }}
        >
          Будем ждать ответ до 01.07.2026г
        </p>

        {/* Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.35s",
            willChange: "transform, opacity",
          }}
        >
          <a
            href="https://docs.google.com/forms/d/15Srv6SZDB4lxwRUGQkgGWqVQENmoffhdGFbeJ5gT7Dc/edit"
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
              ПЕРЕЙТИ К АНКЕТЕ
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section9;
