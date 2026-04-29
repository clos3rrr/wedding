/*
  Section 6 — Пожелания (Wishes)
  Title + wish blocks separated by decorative hearts
*/

import { useEffect, useRef, useState } from "react";

import heartsImg from "../assets/Group_555.png";

const COLOR = "#950706";

function Section6() {
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
          gap: 24,
        }}
      >
        {/* Title — ПОЖЕЛАНИЯ */}
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
              lineHeight: "24.3px",
              letterSpacing: "0px",
              textAlign: "center",
              textTransform: "uppercase",
              color: COLOR,
            }}
          >
            Пожелания
          </span>
        </div>

        {/* Wish 1 */}
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
          Не ломайте голову над подарком!
          <br />
          Ваши конверты помогут осуществить
          <br />
          нашу мечту о свадебном путешествии
        </p>

        {/* Hearts divider 1 */}
        <img
          src={heartsImg}
          alt=""
          style={{
            width: 80,
            height: "auto",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0.3s",
            willChange: "transform, opacity",
          }}
        />

        {/* Wish 2 */}
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
            transitionDelay: "0.35s",
            willChange: "transform, opacity",
          }}
        >
          Говорят, добро возвращается сторицей, поэтому вместо букета мы с
          радостью примем угощение для тех, у кого лапки и хвост.
          {/* <br />
          вы подарите бутылочку вашего любимого
          <br />
          вина, которую мы откроем на празднике */}
        </p>

        {/* Hearts divider 2 */}
        <img
          src={heartsImg}
          alt=""
          style={{
            width: 80,
            height: "auto",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "0.5s",
            willChange: "transform, opacity",
          }}
        />

        {/* Wish 3 */}
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
            transitionDelay: "0.55s",
            willChange: "transform, opacity",
          }}
        >
          Просим воздержаться от криков "Горько!"
          <br />
          и сохранить атмосферу уютного
          <br />
          семейного торжества
        </p>
      </div>
    </section>
  );
}

export default Section6;
