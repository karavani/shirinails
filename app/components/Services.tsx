"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    icon: "💅",
    title: "מניקור ג'ל",
    description: "ציפוי ג'ל מקצועי עם מגוון צבעים עשיר. עמיד עד שלושה שבועות.",
    duration: "60 דק׳",
    highlight: false,
  },
  {
    icon: "✨",
    title: "עיצוב נייל ארט",
    description: "עיצובים ייחודיים ומותאמים אישית – מהפשוט ועד המורכב.",
    duration: "90 דק׳",
    highlight: true,
  },
  {
    icon: "🌸",
    title: "פדיקור מלא",
    description: "טיפול מפנק לרגליים הכולל ניקוי, פוליש וציפוי ג'ל.",
    duration: "75 דק׳",
    highlight: false,
  },
  {
    icon: "💎",
    title: "אקריל ובנייה",
    description: "הארכת ציפורניים באקריל לצורה ואורך לפי בחירתך.",
    duration: "120 דק׳",
    highlight: false,
  },
  {
    icon: "🌿",
    title: "הסרה ועדכון",
    description: "הסרה עדינה של ג'ל או אקריל והכנה לטיפול הבא.",
    duration: "45 דק׳",
    highlight: false,
  },
  {
    icon: "👰",
    title: "חבילת כלה",
    description: "חבילה מיוחדת לכלות – עיצוב חלומות לאירוע הגדול.",
    duration: "180 דק׳",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-[var(--rose)]" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium" style={{ color: "var(--rose)" }}>
              מה אני מציעה
            </span>
            <span className="block h-px w-10 bg-[var(--rose)]" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--charcoal)" }}
          >
            השירותים שלי
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            כל טיפול מבוצע עם מוצרים מהשורה הראשונה, תשומת לב לפרטים ואהבה אמיתית לאמנות.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08} direction="up">
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(201,132,138,0.18)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative rounded-3xl p-8 h-full flex flex-col cursor-default ${
                  service.highlight
                    ? "text-white"
                    : "bg-white border border-[var(--rose-light)]"
                }`}
                style={
                  service.highlight
                    ? {
                        background: "linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)",
                        boxShadow: "0 20px 50px rgba(165,97,106,0.3)",
                      }
                    : {}
                }
              >
                {service.highlight && (
                  <span
                    className="absolute top-5 left-5 text-xs tracking-widest uppercase px-3 py-1 rounded-full font-medium"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    הכי פופולרי
                  </span>
                )}

                <div className="text-4xl mb-5 mt-4">{service.icon}</div>
                <h3
                  className="text-2xl font-light mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: service.highlight ? "#fff" : "var(--charcoal)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: service.highlight ? "rgba(255,255,255,0.85)" : "var(--muted)" }}
                >
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium tracking-wide"
                    style={{ color: service.highlight ? "rgba(255,255,255,0.7)" : "var(--rose)" }}
                  >
                    {service.duration}
                  </span>
                  <a
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: service.highlight ? "#fff" : "var(--rose-dark)" }}
                  >
                    לתיאום תור ←
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
