import { useFadeIn } from "@/hooks/use-fade-in";

export function Visao() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section
      className="relative w-full visao-section"
      style={{ height: "80vh" }}
    >
      <img
        src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=2400&q=80"
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />
      <div className="relative h-full w-full flex items-center justify-center px-6">
        <div
          ref={ref}
          className="fade-in font-display visao-text"
          style={{
            color: "#FAF7F2",
            fontSize: "28px",
            lineHeight: 1.3,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <div>a vida não combina com roteiro.</div>
          <div style={{ marginTop: "16px" }}>a luz natural diz mais que qualquer cenário montado.</div>
          <div style={{ marginTop: "16px" }}>o rio não é fundo. é co-autor.</div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .visao-section { height: 70vh; }
          .visao-text { font-size: 44px !important; }
        }
      `}</style>
    </section>
  );
}
