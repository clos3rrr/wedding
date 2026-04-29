/*
  Section rec927760941 — Hero visual collage
  Artboard: 320px wide, 530px tall, bg #e8ded4

  Animation sequence:
  1) Heart fades in + scales up, couple photo + main frame fade in + scale
  2) Then left hand slides in from left, right hand slides in from right
*/

import group463 from "../assets/Group_463.png";
import group513 from "../assets/Group_513.png";
import group510 from "../assets/Group_510.png";

const img = { group463, group513, group510 };

function DateSVG() {
  return (
    <svg
      width="67"
      height="123"
      viewBox="0 0 67 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.3532 0.690009C29.8385 0.690009 27.6919 2.07001 25.9132 4.83001C24.1345 7.59001 23.2452 11.408 23.2452 16.284C23.2452 21.16 24.1039 24.8553 25.8212 27.37C27.5385 29.8847 29.6699 31.142 32.2152 31.142C34.7605 31.142 36.9225 29.7773 38.7012 27.048C40.4799 24.288 41.3692 20.5007 41.3692 15.686C41.3692 10.8407 40.4952 7.13001 38.7472 4.55401C37.0299 1.97801 34.8985 0.690009 32.3532 0.690009ZM32.2152 31.832C28.7499 31.832 25.8672 30.5287 23.5672 27.922C21.2672 25.2847 20.1172 21.4053 20.1172 16.284C20.1172 11.1627 21.2979 7.17601 23.6592 4.32401C26.0205 1.44134 28.9185 9.17912e-06 32.3532 9.17912e-06C35.8185 9.17912e-06 38.7012 1.34934 41.0012 4.04801C43.3319 6.71601 44.4972 10.58 44.4972 15.64C44.4972 20.7 43.3165 24.6713 40.9552 27.554C38.5939 30.406 35.6805 31.832 32.2152 31.832ZM54.0641 31.648L65.6561 3.72601H50.0161L49.4641 8.18801L48.5901 7.82001L49.1421 1.19601H66.2081L66.8521 3.72601L55.2601 31.648H54.0641Z"
        fill="#E8DED4"
      />
      <path
        d="M12.236 45.69C9.72136 45.69 7.57469 47.07 5.79603 49.83C4.01736 52.59 3.12803 56.408 3.12803 61.284C3.12803 66.16 3.98669 69.8553 5.70403 72.37C7.42136 74.8847 9.55269 76.142 12.098 76.142C14.6434 76.142 16.8054 74.7773 18.584 72.048C20.3627 69.288 21.252 65.5007 21.252 60.686C21.252 55.8407 20.378 52.13 18.63 49.554C16.9127 46.978 14.7814 45.69 12.236 45.69ZM12.098 76.832C8.63269 76.832 5.75003 75.5287 3.45003 72.922C1.15003 70.2847 2.68966e-05 66.4053 2.68966e-05 61.284C2.68966e-05 56.1627 1.18069 52.176 3.54203 49.324C5.90336 46.4413 8.80136 45 12.236 45C15.7014 45 18.584 46.3493 20.884 49.048C23.2147 51.716 24.38 55.58 24.38 60.64C24.38 65.7 23.1994 69.6713 20.838 72.554C18.4767 75.406 15.5634 76.832 12.098 76.832ZM50.3452 67.908C50.3452 68.828 50.2379 69.702 50.0232 70.53C49.8392 71.3273 49.4252 72.2627 48.7812 73.336C48.1679 74.3787 47.1099 75.222 45.6072 75.866C44.1352 76.51 42.3872 76.832 40.3632 76.832C38.3699 76.832 36.6986 76.6173 35.3492 76.188C34.0306 75.728 33.0339 75.1913 32.3592 74.578C31.6846 73.934 31.1479 73.1827 30.7492 72.324C30.1359 71.036 29.8292 69.6713 29.8292 68.23C29.8292 64.642 31.6539 61.514 35.3032 58.846C32.8192 57.834 31.5772 55.8867 31.5772 53.004C31.5772 48.3427 34.5366 46.012 40.4552 46.012C42.7859 46.012 44.7026 46.518 46.2052 47.53C46.8186 47.9593 47.3706 48.634 47.8612 49.554C48.3519 50.4433 48.5972 51.5167 48.5972 52.774C48.5972 55.81 47.2172 58.2787 44.4572 60.18C46.2972 60.732 47.7386 61.5753 48.7812 62.71C49.8239 63.8447 50.3452 65.5773 50.3452 67.908ZM32.8192 68.138C32.8192 69.6407 33.0186 70.944 33.4172 72.048C33.8466 73.152 34.3066 73.9647 34.7972 74.486C35.3186 75.0073 35.9319 75.4213 36.6372 75.728C37.5266 76.0653 38.4006 76.234 39.2592 76.234C44.6566 76.234 47.3552 73.612 47.3552 68.368C47.3552 65.6693 46.6806 63.722 45.3312 62.526C44.1046 61.4527 42.5866 60.7013 40.7772 60.272C40.3479 60.1493 39.7499 60.0113 38.9832 59.858C38.2166 59.674 37.6492 59.536 37.2812 59.444C34.3066 61.8973 32.8192 64.7953 32.8192 68.138ZM39.8572 46.61C38.7226 46.61 37.7719 46.8553 37.0052 47.346C36.2386 47.806 35.6866 48.4193 35.3492 49.186C34.8279 50.474 34.5672 51.716 34.5672 52.912C34.5672 54.108 34.7359 55.0893 35.0732 55.856C35.4106 56.6227 36.0086 57.2513 36.8672 57.742C37.7566 58.202 38.4466 58.524 38.9372 58.708C40.1946 59.1067 41.3599 59.4133 42.4332 59.628C43.3839 58.8613 44.1199 57.926 44.6412 56.822C45.1626 55.718 45.4232 54.5987 45.4232 53.464C45.4232 51.532 44.9632 49.9067 44.0432 48.588C43.1539 47.2693 41.7586 46.61 39.8572 46.61Z"
        fill="#E8DED4"
      />
      <path
        d="M30.9223 92.012C33.2529 92.012 35.2616 92.656 36.9483 93.944C38.6656 95.232 39.5243 97.2713 39.5243 100.062C39.5243 103.803 37.9449 107.683 34.7863 111.7C33.2223 113.693 31.7656 115.411 30.4163 116.852C29.0669 118.293 27.3496 119.995 25.2643 121.958H39.4323L40.3523 114.368L41.2263 114.598L40.5363 122.648H21.7683L21.2623 121.958C26.4143 116.959 30.2323 112.758 32.7163 109.354C35.2003 105.919 36.4423 102.807 36.4423 100.016C36.4423 98.544 36.1049 97.0567 35.4303 95.554C35.0316 94.726 34.4029 94.0513 33.5443 93.53C32.7163 93.0087 31.7503 92.748 30.6463 92.748C28.6529 92.748 26.3376 93.3 23.7003 94.404L22.4123 94.91L22.1823 94.45C23.4396 93.7753 24.8809 93.208 26.5063 92.748C28.1316 92.2573 29.6036 92.012 30.9223 92.012ZM56.191 105.076C58.399 105.413 60.1777 106.272 61.527 107.652C62.8763 109.001 63.551 111.01 63.551 113.678C63.551 116.346 62.631 118.539 60.791 120.256C58.9817 121.973 56.6663 122.832 53.845 122.832C51.0543 122.832 48.8157 122.127 47.129 120.716C45.473 119.305 44.645 117.082 44.645 114.046C44.645 112.267 44.9363 110.504 45.519 108.756C46.1017 107.008 46.8223 105.475 47.681 104.156C48.5397 102.807 49.5823 101.488 50.809 100.2C52.0357 98.912 53.155 97.854 54.167 97.026C55.179 96.198 56.2983 95.3853 57.525 94.588C59.1197 93.5453 60.4537 92.748 61.527 92.196L62.309 93.024L61.757 93.392C58.7823 95.14 56.0837 97.3327 53.661 99.97C52.281 101.442 51.131 103.037 50.211 104.754C53.2777 104.815 55.271 104.923 56.191 105.076ZM49.843 105.444C48.463 108.204 47.773 111.041 47.773 113.954C47.773 116.867 48.3557 118.968 49.521 120.256C50.717 121.513 52.2043 122.142 53.983 122.142C55.7923 122.142 57.3103 121.345 58.537 119.75C59.7943 118.125 60.423 116.131 60.423 113.77C60.423 111.378 59.9783 109.523 59.089 108.204C58.2303 106.885 57.0803 106.073 55.639 105.766C54.4123 105.613 52.4803 105.505 49.843 105.444Z"
        fill="#E8DED4"
      />
    </svg>
  );
}

function Section1() {
  return (
    <section
      style={{
        backgroundColor: "#e8ded4",
        height: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes heartIn {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          60%  { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes textIn {
          0%   { opacity: 0; transform: translate(-50%, 0) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes photoIn {
          0%   { opacity: 0; transform: translate(-50%, 0) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes slideFromLeft {
          0%   { opacity: 0; transform: translateX(-80px) rotate(8deg); }
          100% { opacity: 1; transform: translateX(0) rotate(8deg); }
        }
        @keyframes slideFromRight {
          0%   { opacity: 0; transform: translateX(80px) rotate(16deg); }
          100% { opacity: 1; transform: translateX(0) rotate(16deg); }
        }
        @keyframes accentIn {
          0%   { opacity: 0; transform: translate(-50%, 0) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }

        .anim-heart {
          opacity: 0;
          animation: heartIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }
        .anim-text {
          opacity: 0;
          animation: textIn 0.7s ease-out 0.1s forwards;
        }
        .anim-photo {
          opacity: 0;
          animation: photoIn 0.7s ease-out 0.3s forwards;
        }
        .anim-left-hand {
          opacity: 0;
          animation: slideFromLeft 0.9s ease-out 0.8s forwards;
        }
        .anim-right-hand {
          opacity: 0;
          animation: slideFromRight 0.9s ease-out 0.9s forwards;
        }
        .anim-accent {
          opacity: 0;
          animation: accentIn 0.5s ease-out 1.2s forwards;
        }
      `}</style>

      {/* Artboard centered in viewport */}
      <div style={{ position: "relative", width: 320, height: 480 }}>
        {/* Main decorative frame / text with names — centered horizontally */}
        <div
          className="el anim-text"
          style={{ top: 95, left: "50%", width: 280 }}
        >
          <img src={img.group463} alt="" />
        </div>

        {/* Name 1 — centered horizontally */}
        <div
          className="el anim-photo"
          style={{ top: 20, left: "50%", width: "max-content" }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: 47,
              lineHeight: "35px",
              letterSpacing: "0px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#950706",
              whiteSpace: "nowrap",
              display: "block",
            }}
          >
            МИРОСЛАВ
          </span>
        </div>

        {/* Date SVG — dead center of composition, bouncy pop */}
        <div
          className="el anim-heart"
          style={{ top: "55%", left: "49%", width: 67 }}
        >
          <DateSVG />
        </div>

        {/* Left hand — slides in from left side */}
        <div
          className="el anim-left-hand"
          style={{ top: 112, left: -45, width: 190 }}
        >
          <img src={img.group513} alt="" />
        </div>

        {/* Right hand — slides in from right side */}
        <div
          className="el anim-right-hand"
          style={{ top: 185, left: 175, width: 185 }}
        >
          <img src={img.group510} alt="" />
        </div>

        {/* Name 2 — centered */}
        <div
          className="el anim-accent"
          style={{ top: 440, left: "50%", width: "max-content" }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: 47,
              lineHeight: "35px",
              letterSpacing: "0px",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#950706",
              whiteSpace: "nowrap",
              display: "block",
            }}
          >
            ЕКАТЕРИНА
          </span>
        </div>
      </div>
    </section>
  );
}

export default Section1;
