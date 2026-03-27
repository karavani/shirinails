"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--charcoal)" }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, var(--rose) 0%, transparent 60%),
                            radial-gradient(circle at 70% 30%, var(--gold) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-[var(--rose)]" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium" style={{ color: "var(--rose)" }}>
              בואי נדבר
            </span>
            <span className="block h-px w-10 bg-[var(--rose)]" />
          </div>
          <h2
            className="text-5xl md:text-7xl font-light mb-6 text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            קבעי תור
            <br />
            <span className="italic gradient-text">היום</span>
          </h2>
          <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            אני זמינה בווצאפ ובאינסטגרם. שלחי הודעה ואחזור אלייך בהקדם.
          </p>
        </AnimatedSection>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* WhatsApp */}
          <AnimatedSection delay={0.1} direction="left">
            <motion.a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 50px rgba(37,211,102,0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-5 p-8 rounded-3xl cursor-pointer group"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-lg mb-1">וואטסאפ</p>
                <p style={{ color: "rgba(255,255,255,0.5)" }} className="text-sm">
                  050-123-4567
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)" }} className="text-xs mt-1">
                  זמינה א׳–ו׳ 09:00–20:00
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                className="mr-auto group-hover:translate-x-[-4px] transition-transform"
                style={{ transform: "rotate(180deg)" }}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>
          </AnimatedSection>

          {/* Instagram */}
          <AnimatedSection delay={0.2} direction="right">
            <motion.a
              href="https://instagram.com/shirinails"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 50px rgba(201,132,138,0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-5 p-8 rounded-3xl cursor-pointer group"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-lg mb-1">אינסטגרם</p>
                <p style={{ color: "rgba(255,255,255,0.5)" }} className="text-sm">
                  @shirinails
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)" }} className="text-xs mt-1">
                  עיצובים, טיפים ועדכונים
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                className="mr-auto group-hover:translate-x-[-4px] transition-transform"
                style={{ transform: "rotate(180deg)" }}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>
          </AnimatedSection>
        </div>

        {/* Big CTA */}
        <AnimatedSection className="text-center" delay={0.3}>
          <motion.a
            href="https://wa.me/972501234567?text=היי שירי! אשמח לקבוע תור 😊"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 60px rgba(201,132,138,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-medium text-lg shadow-xl"
            style={{
              background: "linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            שלחי הודעה בווצאפ עכשיו
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
