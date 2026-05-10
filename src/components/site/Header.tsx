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
          style={{ padding: "16px 24px" }}
        >
          <a
            href="#top"
            className="font-display header-brand"
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
              padding: "8px",
              cursor: "pointer",
              color: "#1A1A1A",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
              transition: "color 250ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
          >
            <span style={{ ...lineStyle, width: "24px" }} />
            <span style={{ ...lineStyle, width: "18px" }} />
            <span style={{ ...lineStyle, width: "24px" }} />
          </button>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .header-inner { padding: 20px 40px !important; }
            .header-brand { font-size: 22px !important; }
          }
        `}</style>
      </header>

      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
