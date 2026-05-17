import { useEffect, useRef } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "sobre", href: "#sobre" },
  { label: "serviços", href: "#servicos" },
  { label: "investimento", href: "#investimento" },
  { label: "portfólio", href: "#portfolio" },
  { label: "contato", href: "#contato" },
];

export function Drawer({ open, onClose }: DrawerProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // focus close button
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  const hoverCaramel = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#C8956D";
  };
  const leaveInk = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#1A1A1A";
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 300ms ease",
          zIndex: 90,
        }}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="drawer-panel"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          backgroundColor: "#FAF7F2",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Fechar menu"
          className="font-display"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1A1A1A",
            fontSize: "32px",
            lineHeight: 1,
            padding: 0,
            transition: "color 200ms ease",
          }}
          onMouseEnter={hoverCaramel}
          onMouseLeave={leaveInk}
        >
          ×
        </button>

        <div style={{ marginTop: "80px" }}>
          <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {navLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "20px" }}>
                  <a
                    href={l.href}
                    onClick={handleLinkClick}
                    className="font-display drawer-link"
                    style={{
                      color: "#1A1A1A",
                      textDecoration: "none",
                      lineHeight: 1,
                      display: "inline-block",
                      transition: "color 200ms ease",
                    }}
                    onMouseEnter={hoverCaramel}
                    onMouseLeave={leaveInk}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="drawer-contact">
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "rgba(26,26,26,0.15)",
              marginBottom: "32px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span
              className="font-display"
              style={{
                fontSize: "20px",
                color: "rgba(26,26,26,0.6)",
                marginBottom: "20px",
              }}
            >
              fala comigo
            </span>
            <a
              href="https://instagram.com/drope.png"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                color: "#1A1A1A",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={hoverCaramel}
              onMouseLeave={leaveInk}
            >
              @drope.png
            </a>
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                color: "rgba(26,26,26,0.8)",
                wordBreak: "break-word",
              }}
            >
              contato@pmendoncafoto.com.br
            </span>
          </div>
        </div>
      </aside>

      <style>{`
        .drawer-panel {
          width: 85vw;
          max-width: 320px;
          padding: 32px 24px;
        }
        .drawer-link { font-size: 26px; }
        @media (min-width: 768px) {
          .drawer-panel {
            width: 340px;
            max-width: 340px;
            padding: 40px 32px;
          }
          .drawer-link { font-size: 32px; }
        }
      `}</style>
    </>
  );
}
