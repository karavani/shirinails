"use client";

import AnimatedSection from "./AnimatedSection";

export default function Map() {
  return (
    <section style={{ background: "var(--charcoal)" }}>
      <AnimatedSection direction="up">
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Header */}
          <div className="text-center" style={{ padding: "48px 24px 32px" }}>
            <div className="flex items-center justify-center" style={{ gap: "12px", marginBottom: "10px" }}>
              <span style={{ display: "block", height: "1px", width: "32px", background: "var(--primary)" }} />
              <span
                className="text-xs font-medium uppercase"
                style={{ color: "var(--primary)", letterSpacing: "0.2em" }}
              >
                המיקום שלי
              </span>
              <span style={{ display: "block", height: "1px", width: "32px", background: "var(--primary)" }} />
            </div>
            <p className="text-white font-light text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              אסף שמחה 1, כפר סבא
            </p>
            <a
              href="https://maps.google.com/?q=אסף+שמחה+1,+כפר+סבא"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs mt-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.4)", gap: "4px" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              פתחי ב-Google Maps
            </a>
          </div>

          {/* Map */}
          <div style={{ height: "340px", overflow: "hidden" }}>
            <iframe
              title="מיקום Shiri Nails – אסף שמחה 1 כפר סבא"
              src="https://www.google.com/maps?q=אסף+שמחה+1,+כפר+סבא,+ישראל&output=embed&hl=he&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", filter: "grayscale(30%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
