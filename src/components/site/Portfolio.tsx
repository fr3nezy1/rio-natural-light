import { useEffect, useState, useRef } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

const portfolio = {
  retratos: [
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073463/Capa-1_t3ofmq.jpg", alt: "Retrato lifestyle" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073995/Feira_da_gloria-32_ftoumd.jpg", alt: "Retrato lifestyle" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073462/Rogeann-11_sirf6n.jpg", alt: "Retrato lifestyle" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073463/Recreio-3_bbwdk0.jpg", alt: "Retrato lifestyle" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073462/Shein-07_k7ku4i.jpg", alt: "Retrato lifestyle" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073462/Rogeann-02_f9hbmm.jpg", alt: "Retrato lifestyle" },
  ],
  casais: [
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073495/Gabriel_Diana-3_c0aa2q.jpg", alt: "Ensaio de casal no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073498/Gabriel_Diana-14_raga1x.jpg", alt: "Ensaio de casal no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073498/Gabriel_Diana-15_buqm4z.jpg", alt: "Ensaio de casal no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073498/Gabriel_Diana-20_spkilz.jpg", alt: "Ensaio de casal no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073497/Gabriel_Diana-12_onfjjn.jpg", alt: "Ensaio de casal no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073568/Gabriel_Diana-22_yvgdb6.jpg", alt: "Ensaio de casal no Rio" },
  ],
  eventos: [
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073477/BT_Experience-6_eih8zy.jpg", alt: "Cobertura de evento esportivo no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073480/BT_Experience-39_vt1o8q.jpg", alt: "Cobertura de evento esportivo no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073479/BT_Experience-28_mv0hjk.jpg", alt: "Cobertura de evento esportivo no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073479/BT_Experience-51_ztsh8m.jpg", alt: "Cobertura de evento esportivo no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073482/BT_Experience-49_run25e.jpg", alt: "Cobertura de evento esportivo no Rio" },
    { url: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1779073480/BT_Experience-64_sc1caw.jpg", alt: "Cobertura de evento esportivo no Rio" },
  ],
} as const;

type Category = keyof typeof portfolio;

const getThumbUrl = (url: string) => url.replace('/upload/q_auto/f_auto/', '/upload/w_800,q_auto,f_auto/');
const getFullUrl = (url: string) => url.replace('/upload/q_auto/f_auto/', '/upload/w_1600,q_auto,f_auto/');

export function Portfolio() {
  const ref = useFadeIn<HTMLDivElement>();
  const [active, setActive] = useState<Category>("retratos");
  const [isFading, setIsFading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const items = portfolio[active];

  useEffect(() => {
    if (lightboxOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, items.length]);

  const handleFilter = (cat: Category) => {
    if (cat === active) return;
    setIsFading(true);
    setTimeout(() => {
      setActive(cat);
      setAnimationKey(k => k + 1);
      setIsFading(false);
    }, 175);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goPrev = () => setLightboxIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setLightboxIndex((i) => (i + 1) % items.length);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="fade-section"
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.15em",
              color: "var(--color-caramel)",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            PORTFÓLIO
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "40px",
              color: "var(--color-ink)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            portfólio
          </h2>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "24px" }}>
            {(["retratos", "casais", "eventos"] as Category[]).map((cat) => {
              const activeBtn = cat === active;
              return (
                <button
                  key={cat}
                  aria-pressed={activeBtn}
                  onClick={() => handleFilter(cat)}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    fontWeight: activeBtn ? 600 : 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: activeBtn ? "var(--color-caramel)" : "rgba(26,26,26,0.6)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 200ms ease",
                    borderBottom: activeBtn ? "2px solid var(--color-caramel)" : "2px solid transparent",
                    marginBottom: activeBtn ? "6px" : "0",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(200,133,109,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = activeBtn ? "var(--color-caramel)" : "rgba(26,26,26,0.6)";
                  }}
                >
                  {cat === "retratos" ? "Retratos" : cat === "casais" ? "Casais" : "Eventos"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            opacity: isFading ? 0 : 1,
            transition: "opacity 200ms ease",
          }}
        >
          <div className="portfolio-grid">
            {items.map((it, idx) => (
              <div key={`${active}_${idx}_${animationKey}`} className="portfolio-item" onClick={() => openLightbox(idx)} style={{ animationDelay: `${idx * 120}ms` }}>
                <img src={getThumbUrl(it.url)} alt={it.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            ref={backdropRef}
            onClick={(e) => {
              if (e.target === backdropRef.current) closeLightbox();
            }}
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.9)", animation: "fadeIn 250ms ease" }}
          />

          <button
            onClick={closeLightbox}
            aria-label="Fechar"
            style={{
              position: "fixed",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#FAF7F2",
              fontSize: "28px",
              cursor: "pointer",
              zIndex: 210,
            }}
          >
            ×
          </button>

          <button
            onClick={goPrev}
            aria-label="Foto anterior"
            style={{
              position: "fixed",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#FAF7F2",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 210,
            }}
          >
            ‹
          </button>

          <button
            onClick={goNext}
            aria-label="Próxima foto"
            style={{
              position: "fixed",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#FAF7F2",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 210,
            }}
          >
            ›
          </button>

          <div
            style={{
              position: "relative",
              zIndex: 205,
              maxWidth: "90vw",
              maxHeight: "85vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={getFullUrl(items[lightboxIndex].url)} alt={items[lightboxIndex].alt} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
          </div>
        </div>
      )}

      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .portfolio-item {
          aspect-ratio: 4/5;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          animation: portfolioFadeIn 500ms ease-out forwards;
        }
        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: opacity 200ms ease;
        }

        @keyframes portfolioFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 480px) {
          .portfolio-grid { grid-template-columns: 1fr; gap: 24px; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
