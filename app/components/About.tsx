"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" style={{ background: "var(--cream)", padding: "64px 24px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center" style={{ gap: "40px" }}>

          {/* Photo */}
          <AnimatedSection direction="right" className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div style={{ position: "relative", width: "220px", maxWidth: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  border: "2px solid var(--primary)",
                  transform: "translate(10px, 10px)",
                  opacity: 0.5,
                }}
              />
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 24px 64px rgba(138,112,96,0.32), 0 4px 16px rgba(138,112,96,0.18)" }}>
                <Image
                  src="/shiri.png"
                  alt="שירי - מניקוריסטית מקצועית בכפר סבא"
                  width={220}
                  height={285}
                  style={{ objectFit: "cover", display: "block", transform: "scale(1.03)" }}
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="left" delay={0.1} className="flex-1">
            <div className="flex items-center" style={{ gap: "10px", marginBottom: "12px" }}>
              <span style={{ display: "block", height: "1px", width: "28px", background: "var(--primary)" }} />
              <span className="text-xs font-medium" style={{ color: "var(--primary)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                הכירי אותי
              </span>
            </div>

            <h2
              className="font-light mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                color: "var(--charcoal)",
                lineHeight: 1.15,
              }}
            >
              מי אני
            </h2>

            <div className="text-sm leading-relaxed" style={{ color: "var(--muted)", display: "flex", flexDirection: "column", gap: "10px" }}>
              <p>
                היי, אני שירי! מניקוריסטית מקצועית עם תשוקה אמיתית לציפורניים. צברתי ניסיון עשיר בטכניקות מגוונות: מלק ג׳ל קלאסי, דרך בילד אפ ועד נייל ארט מורכב.
              </p>
              <p>
                הקליניקה שלי נמצאת בכפר סבא, מקום מקצועי, נקי ומאובזר, בסביבה פרטית ואינטימית. בלי הצפה, בלי רעש, רק את ואני.
              </p>
              <p style={{ color: "var(--primary-dark)", fontWeight: 500 }}>
                כי את מגיעה לזמן איכות לעצמך, ולא רק לציפורניים יפות.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
