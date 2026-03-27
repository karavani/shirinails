"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const REVIEWS = [
  {
    name: "מיכל כ.",
    text: "שירי היא פשוט מדהימה! הגעתי עם רעיון מעורפל ויצאתי עם ציפורניים שחרגו מכל ציפייה. מומלצת בחום!",
    stars: 5,
  },
  {
    name: "נועה ל.",
    text: "הכי מקצועית שהיתה לי! תמיד מדויקת, נקייה ועם עין אסתטית מדהימה. אני חוזרת כבר שנתיים.",
    stars: 5,
  },
  {
    name: "שני ר.",
    text: "הוספת פרטים קטנים שרק שירי שמה לב אליהם. העיצוב שלה הוא ברמה אחרת לגמרי, ממש אמנות.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-[var(--rose)]" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium" style={{ color: "var(--rose)" }}>
              לקוחות מספרות
            </span>
            <span className="block h-px w-10 bg-[var(--rose)]" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--charcoal)" }}
          >
            מה אומרות עליי
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-8 shadow-sm border flex flex-col gap-4"
                style={{ borderColor: "var(--rose-light)" }}
              >
                {/* Quote mark */}
                <span
                  className="text-7xl leading-none font-serif absolute top-4 right-7 opacity-10"
                  style={{ color: "var(--rose)", fontFamily: "Georgia, serif" }}
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                  {review.text}
                </p>

                <p className="text-sm font-medium" style={{ color: "var(--charcoal)" }}>
                  — {review.name}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
