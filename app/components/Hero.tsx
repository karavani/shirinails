"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,132,138,0.55) 0%, rgba(250,246,241,0.85) 60%, rgba(255,252,249,0.95) 100%)",
          }}
        />
      </motion.div>

      {/* Floating decorative circles */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-12 w-32 h-32 rounded-full opacity-20 hidden lg:block"
        style={{ background: "var(--rose-light)", filter: "blur(20px)" }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 right-16 w-48 h-48 rounded-full opacity-15 hidden lg:block"
        style={{ background: "var(--gold)", filter: "blur(30px)" }}
      />

      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
          <span className="block h-px w-10 bg-[var(--rose)]" />
          <span
            className="text-sm tracking-[0.25em] font-medium uppercase"
            style={{ color: "var(--rose-dark)" }}
          >
            מניקור ופדיקור מקצועי
          </span>
          <span className="block h-px w-10 bg-[var(--rose)]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-light leading-none mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span style={{ color: "var(--charcoal)" }}>Shiri</span>
          <br />
          <span className="italic gradient-text">Nails</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-light mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          כל ציפורן היא יצירת אמנות.
          <br />
          <span style={{ color: "var(--rose-dark)" }}>הסטייל שלך, המקצועיות שלנו.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/972545824337"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            קבעי תור עכשיו
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base border transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{
              borderColor: "var(--rose)",
              color: "var(--rose-dark)",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
            }}
          >
            ראי את העבודות
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--rose)" }}>
          גלי למטה
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
