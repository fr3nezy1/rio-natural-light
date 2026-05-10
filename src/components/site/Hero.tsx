export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full"
      style={{ height: "100vh" }}
    >
      <img
        src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=2400&q=80"
        alt="Rio de Janeiro"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />

      <div
        className="absolute"
        style={{ bottom: "40px", left: "24px", right: "24px", maxWidth: "900px" }}
      >
        <h1
          className="font-display hero-h1"
          style={{
            color: "#FAF7F2",
            fontSize: "48px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          você sendo você.
          <br />
          o rio sendo o rio.
        </h1>
        <p
          className="hero-sub"
          style={{
            color: "rgba(250,247,242,0.9)",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: 1.75,
            marginTop: "24px",
            maxWidth: "640px",
          }}
        >
          ensaios, casais e ativações de marca, em luz natural.
        </p>
        <a
          href="#contato"
          className="hero-cta"
          style={{
            display: "inline-block",
            marginTop: "40px",
            border: "1px solid #FAF7F2",
            color: "#FAF7F2",
            padding: "16px 32px",
            borderRadius: "2px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "0.05em",
            backgroundColor: "transparent",
            transition: "background-color 250ms ease, color 250ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FAF7F2";
            e.currentTarget.style.color = "#1A1A1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#FAF7F2";
          }}
        >
          Quero fotografar com você
        </a>
      </div>

      <div
        className="scroll-indicator absolute"
        style={{
          left: "50%",
          bottom: "40px",
          transform: "translateX(-50%)",
          width: "1px",
          height: "40px",
          backgroundColor: "rgba(250,247,242,0.6)",
        }}
      />

      <style>{`
        @media (min-width: 768px) {
          .hero-h1 { font-size: 88px !important; }
          .hero-sub { font-size: 18px !important; }
          section#top > div.absolute:not(:first-child):not(.scroll-indicator) {
          }
        }
        @media (min-width: 768px) {
          section#top > div[style*="bottom: 40px"][style*="left: 24px"] {
            bottom: 80px !important;
            left: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
