"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: "#1e1e1e", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <p
        className="font-light"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.3)", fontSize: "1rem" }}
      >
        Shiri Nails &copy; {year} · כל הזכויות שמורות
      </p>
      <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.15)" }}>
        מניקור מקצועי · עיצוב ייחודי לכל לקוחה · כפר סבא
      </p>
      <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.12)" }}>
        האתר נבנה ע״י{" "}
        <a
          href="https://karavani.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-60"
          style={{ color: "rgba(255,255,255,0.25)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Noam Karavani
        </a>
      </p>
    </footer>
  );
}
