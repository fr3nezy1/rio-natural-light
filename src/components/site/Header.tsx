import { useEffect, useState } from "react";
import { Drawer } from "./Drawer";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lineStyle: React.CSSProperties = {
    height: "1px",
    backgroundColor: "#1A1A1A",
    display: "block",
    transition: "background-color 250ms ease",
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0"
        style={{
          backgroundColor: "#FAF7F2",
          transition: "box-shadow 200ms ease",
          boxShadow: scrolled ? "0 1px 12px rgba(26,26,26,0.06)" : "none",
          zIndex: 50,
        }}
      >
        <div
          className="flex items-center justify-between header-inner"
          style={{ padding: "10px 24px" }}
        >
          <a
            href="#top"
            className="font-display-lower header-brand"
            style={{ color: "#1A1A1A", fontSize: "18px", lineHeight: 1, textDecoration: "none" }}
          >
            pedro mendonça
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="hamburger-btn"
            style={{
              background: "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelectorAll<HTMLDivElement>("div").forEach((d) => {
                d.style.backgroundColor = "#C8956D";
              });
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelectorAll<HTMLDivElement>("div").forEach((d) => {
                d.style.backgroundColor = "#1A1A1A";
              });
            }}
          >
            <div style={{ ...lineStyle, width: "20px" }} />
            <div style={{ ...lineStyle, width: "14px" }} />
            <div style={{ ...lineStyle, width: "20px" }} />
          </button>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .header-inner { padding: 14px 40px !important; }
            .header-brand { font-size: 22px !important; }
          }
        `}</style>
      </header>

      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
