"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "ציפורניים ורודות",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80",
    alt: "נייל ארט פרחוני",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1604655855523-db0cbcb23939?w=400&q=80",
    alt: "ג'ל בז'",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1610992015732-2449b0dd2b03?w=600&q=80",
    alt: "עיצוב מינימליסטי",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "ציפורניים קלאסיות",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1604655855523-db0cbcb23939?w=400&q=80",
    alt: "נייל ארט מיוחד",
    span: "col-span-1 row-span-1",
  },
];

// Curated nail photos from Unsplash
const PHOTOS = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1604655855523-db0cbcb23939?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610992015732-2449b0dd2b03?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1604655855523-db0cbcb23939?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610992015732-2449b0dd2b03?w=600&h=400&fit=crop&q=80",
];

const ALTS = [
  "מניקור ורוד",
  "נייל ארט פרחוני",
  "ג'ל מינימליסטי",
  "ציפורניים קלאסיות",
  "עיצוב מיוחד",
  "מניקור אלגנטי",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 px-6 rose-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-10 bg-[var(--rose)]" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium" style={{ color: "var(--rose)" }}>
              עבודות נבחרות
            </span>
            <span className="block h-px w-10 bg-[var(--rose)]" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--charcoal)" }}
          >
            הגלריה שלי
          </h2>
          <p className="text-base max-w-md mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            כל תמונה מספרת סיפור של יצירה, מקצועיות ותשומת לב לפרטים הקטנים.
          </p>
        </AnimatedSection>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {PHOTOS.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.07} direction="up">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  i === 0 || i === 4 ? "aspect-[3/4]" : "aspect-square"
                }`}
                onClick={() => setSelected(i)}
              >
                <img
                  src={src}
                  alt={ALTS[i]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium tracking-wide">{ALTS[i]}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimatedSection className="text-center mt-14" delay={0.2}>
          <a
            href="https://instagram.com/shirinails"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-base border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              borderColor: "var(--rose)",
              color: "var(--rose-dark)",
              background: "white",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            עוד עבודות באינסטגרם
          </a>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={PHOTOS[selected]}
              alt={ALTS[selected]}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelected(null)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
