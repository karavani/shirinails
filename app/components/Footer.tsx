"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ background: "#1e1e1e", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <p
        className="text-sm font-light"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.3)", fontSize: "1rem" }}
      >
        Shiri Nails &copy; {year} · כל הזכויות שמורות
      </p>
      <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.15)" }}>
        מניקור ופדיקור מקצועי · עיצוב ייחודי לכל לקוחה
      </p>
    </footer>
  );
}
