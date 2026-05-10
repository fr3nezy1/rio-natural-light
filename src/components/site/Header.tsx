import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#FAF7F2",
        transition: "box-shadow 200ms ease",
        boxShadow: scrolled ? "0 1px 12px rgba(26,26,26,0.06)" : "none",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: "16px 24px" }}
      >
        <a
          href="#top"
          className="font-display"
          style={{ color: "#1A1A1A", fontSize: "18px", lineHeight: 1 }}
        >
          pedro mendonça
        </a>
        <a
          href="#contato"
          style={{
            backgroundColor: "#1A1A1A",
            color: "#FAF7F2",
            padding: "10px 20px",
            borderRadius: "2px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.05em",
            transition: "background-color 250ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C8956D")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
        >
          Vamos marcar?
        </a>
      </div>
      <style>{`
        @media (min-width: 768px) {
          header > div { padding: 20px 40px !important; }
          header a.font-display { font-size: 22px !important; }
          header a[href="#contato"] { padding: 14px 28px !important; font-size: 14px !important; }
        }
      `}</style>
    </header>
  );
}
