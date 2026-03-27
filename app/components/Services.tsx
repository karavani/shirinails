"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface Service {
  name: string;
  price: string;
  description?: string;
}

interface Extra {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

const SERVICES: Service[] = [
  { name: "מניקור", price: "100 ₪" },
  { name: "מניקור + לק ג׳ל", price: "140 ₪" },
  { name: "מניקור + לק ג׳ל ומבנה אנטומי", price: "160 ₪" },
  {
    name: "מילוי בבילד אפ",
    price: "180 ₪",
    description:
      "בילד אפ הוא חומר קשיח המעניק חוזק ועובי לציפורן — שונה מבייס רגיל. מתאים במיוחד להארכה, שיקום ציפורניים או לאלו שרוצות ציפורן ארוכה ועמידה.",
  },
  { name: "בניה בג׳ל עם טיפס הפוך", price: "400 ₪" },
  { name: "הסרת ג׳ל ללא חידוש", price: "40 ₪" },
  {
    name: "תיקון ציפורן בודדת",
    price: "15 ₪",
    description:
      "מיועד למי שמגיעה לתיקון נקודתי בלבד, שלא במסגרת תור שירות. אם יש יותר משתי ציפורניות לתיקון — אנא ציינו בהערות התור.",
  },
];

const EXTRAS: Extra[] = [
  {
    name: "פרנץ׳",
    price: "15 ₪",
    duration: "5 דק׳",
  },
  {
    name: "קישוטים קלים",
    price: "החל מ-5 ₪",
    duration: "15 דק׳",
    description:
      "לב, פרח, זברה, מנומר, נקודות, אבנים קטנות, פנינה ועוד. המחיר נע בין 5–20 ₪ לפי הקישוט. מומלץ לשלוח תמונה מראש.",
  },
  {
    name: "קישוטים מורכבים",
    price: "החל מ-25 ₪",
    duration: "20 דק׳",
    description:
      "אפקט סוודר, אומברה הפוך, טאי-דאי ועוד — כל קישוט המורכב מיותר משני שלבים. המחיר נע בין 25–50 ₪. מומלץ לשלוח תמונה מראש.",
  },
  {
    name: "תוספת אורך אקסטרים",
    price: "20 ₪",
    duration: "30 דק׳",
    description:
      "ניתן לצרף תוספת זו לכל טיפול. לקוחות חדשות מוזמנות לשלוח תמונה מראש לוודא שמדובר באורך שמוגדר כאקסטרים.",
  },
];

/* ─── Service row ─── */
function ServiceRow({ service, index }: { service: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasDesc = Boolean(service.description);

  return (
    <AnimatedSection delay={index * 0.04} direction="up">
      <motion.div
        whileHover={{ backgroundColor: "rgba(205,191,173,0.1)" }}
        transition={{ duration: 0.2 }}
        className={`flex items-start border-b transition-colors${hasDesc ? " cursor-pointer" : ""}`}
        style={{ borderColor: "var(--primary-light)", gap: "12px", padding: "16px 24px" }}
        onClick={() => hasDesc && setExpanded((v) => !v)}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="flex items-center" style={{ gap: "8px" }}>
            <span className="text-base font-medium leading-snug" style={{ color: "var(--charcoal)" }}>
              {service.name}
            </span>
            {hasDesc && (
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M6 9l6 6 6-6" />
              </motion.svg>
            )}
          </div>
          <AnimatePresence initial={false}>
            {expanded && service.description && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden text-sm leading-relaxed"
                style={{ color: "var(--muted)", marginTop: "8px" }}
              >
                {service.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--primary-dark)", flexShrink: 0, paddingTop: "2px" }}>
          {service.price}
        </span>
      </motion.div>
    </AnimatedSection>
  );
}

/* ─── Extra card ─── */
function ExtraCard({ extra, index }: { extra: Extra; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasDesc = Boolean(extra.description);

  return (
    <AnimatedSection delay={index * 0.07} direction="up">
      <motion.div
        whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(181,160,144,0.18)" }}
        transition={{ duration: 0.25 }}
        className={`rounded-2xl border bg-white overflow-hidden${hasDesc ? " cursor-pointer" : ""}`}
        style={{ borderColor: "var(--primary-light)" }}
        onClick={() => hasDesc && setExpanded((v) => !v)}
      >
        <div className="flex items-start justify-between" style={{ gap: "16px", padding: "16px 20px" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="flex items-center" style={{ gap: "6px", marginBottom: "8px" }}>
              <p className="font-medium text-base leading-snug" style={{ color: "var(--charcoal)" }}>
                {extra.name}
              </p>
              {hasDesc && (
                <motion.svg
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  width="13" height="13" viewBox="0 0 24 24"
                  fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              )}
            </div>
            <div className="flex items-center text-xs" style={{ gap: "12px", color: "var(--muted)" }}>
              <span className="flex items-center" style={{ gap: "4px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {extra.duration}
              </span>
              <span style={{ color: "var(--primary-light)" }}>|</span>
              <span className="flex items-center font-medium" style={{ gap: "4px", color: "var(--primary-dark)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
                {extra.price}
              </span>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && extra.description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--muted)",
                  borderTop: "1px solid var(--primary-light)",
                  padding: "12px 20px 16px",
                }}
              >
                {extra.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
}

/* ─── Main section ─── */
export default function Services() {
  const [tab, setTab] = useState<"services" | "extras">("services");

  return (
    <section id="services" style={{ background: "var(--warm-white)", padding: "112px 24px" }}>
      <div style={{ maxWidth: "672px", margin: "0 auto" }}>

        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center" style={{ gap: "12px", marginBottom: "16px" }}>
            <span style={{ display: "block", height: "1px", width: "40px", background: "var(--primary)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--primary)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              תפריט שירותים
            </span>
            <span style={{ display: "block", height: "1px", width: "40px", background: "var(--primary)" }} />
          </div>
          <h2
            className="font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--charcoal)", fontSize: "clamp(2.5rem, 6vw, 3.5rem)", lineHeight: 1.1 }}
          >
            המחירון שלי
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.05}>
          <div className="flex justify-center" style={{ gap: "12px", marginBottom: "32px" }}>
            {(["services", "extras"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  padding: "8px 24px",
                  background: tab === t
                    ? "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)"
                    : "transparent",
                  color: tab === t ? "#fff" : "var(--muted)",
                  border: `1px solid ${tab === t ? "transparent" : "var(--primary-light)"}`,
                  cursor: "pointer",
                }}
              >
                {t === "services" ? "שירותים" : "תוספות"}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatePresence mode="wait">
          {tab === "services" ? (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-3xl overflow-hidden border"
                style={{
                  borderColor: "var(--primary-light)",
                  background: "white",
                  boxShadow: "0 8px 40px rgba(181,160,144,0.12)",
                }}
              >
                {/* Table header */}
                <div
                  className="flex items-center justify-between border-b"
                  style={{ background: "var(--cream)", borderColor: "var(--primary-light)", padding: "10px 24px" }}
                >
                  <span className="text-xs font-medium" style={{ color: "var(--primary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    שירות
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--primary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    מחיר
                  </span>
                </div>

                {SERVICES.map((s, i) => (
                  <ServiceRow key={s.name} service={s} index={i} />
                ))}

                {/* Footer */}
                <div
                  className="flex items-center justify-between"
                  style={{ background: "var(--cream)", padding: "16px 24px" }}
                >
                  <p className="text-sm" style={{ color: "var(--muted)" }}>* המחירים כוללים מע״מ</p>
                  <a
                    href="https://wa.me/972545824337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      gap: "8px",
                      padding: "10px 20px",
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    קבעי תור
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="extras"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-center text-sm" style={{ color: "var(--muted)", marginBottom: "16px" }}>
                ניתן לצרף תוספות לכל אחד מהשירותים — לחצי להרחבה
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {EXTRAS.map((e, i) => (
                  <ExtraCard key={e.name} extra={e} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
