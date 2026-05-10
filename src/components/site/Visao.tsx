import { useFadeIn } from "@/hooks/use-fade-in";

export function Visao() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section
      className="relative w-full visao-section"
      style={{ height: "75vh" }}
    >
      <img
        src="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=2400&q=85"
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="relative h-full w-full flex items-center justify-center"
        style={{ padding: "0 24px" }}
      >
        <div
          ref={ref}
          className="fade-in font-display visao-text"
          style={{
            color: "#FAF7F2",
            fontSize: "32px",
            lineHeight: 1.3,
            textAlign: "center",
            maxWidth: "1100px",
          }}
        >
          <div className="visao-line">a vida não combina com roteiro.</div>
          <div className="visao-line" style={{ marginTop: "24px" }}>
            a luz natural diz mais que qualquer cenário montado.
          </div>
          <div className="visao-line" style={{ marginTop: "24px" }}>
            o rio não é fundo. é co-autor.
          </div>
        </div>
      </div>
      <style>{`
        .visao-line { white-space: normal; }
        @media (min-width: 768px) {
          .visao-section { height: 85vh; }
          .visao-text { font-size: 64px !important; }
          .visao-line { white-space: nowrap; }
        }
      `}</style>
    </section>
  );
}
