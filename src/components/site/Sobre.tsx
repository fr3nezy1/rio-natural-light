import { useFadeIn } from "@/hooks/use-fade-in";

export function Sobre() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section style={{ backgroundColor: "#FAF7F2" }} className="sobre-section">
      <div
        ref={ref}
        className="fade-in sobre-grid cont-wide"
      >
        <div className="sobre-image-wrap">
          <img
            src="https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1778463051/Eu-6_pfkd7g.jpg"
            alt="Pedro Mendonça"
            loading="lazy"
            style={{
              width: "100%",
              aspectRatio: "4 / 5",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <div className="sobre-text">
          <h2
            className="font-display sobre-h2"
            style={{
              color: "#1A1A1A",
              fontSize: "var(--t-2xl)",
              lineHeight: 1.15,
            }}
          >
            a vida não espera. a foto não esquece.
          </h2>
          <div style={{ marginTop: "40px" }} className="sobre-paragraphs">
            <p>
              A vida acontece de forma espontânea. Tudo o que é muito bom acontece de forma natural. Os momentos mais marcantes da minha vida foram vividos sem que fossem milimetricamente programados e é justamente nesse fato que encontro a beleza deles.
            </p>
            <p>
              Pra ser bom fotógrafo, é preciso ser bom observador. Uma foto boa não precisa estar tecnicamente perfeita: ela precisa te transportar pro momento e pras sensações que registrou, e fazer com que quem olhe, mesmo sem ter estado lá, sinta também.
            </p>
            <p>
              Na fotografia, o que busco é o sorriso que sai por algo sussurrado ao pé do ouvido, o brilho no olhar ao se admirar uma bela paisagem, tudo aquilo que surge do acaso e traz consigo sentimento. É isso que me encanta. Por isso escolhi a fotografia, e me dedico todos os dias pra, ao me deparar com a emoção, estar pronto pra capturá-la.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .sobre-grid { display: flex; flex-direction: column; gap: 48px; }
        .sobre-paragraphs p {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: var(--t-base);
          line-height: 1.6;
          color: #1A1A1A;
        }
        .sobre-paragraphs p + p { margin-top: 24px; }
        @media (min-width: 1024px) {
          .sobre-grid {
            flex-direction: row;
            align-items: center;
            gap: 80px;
          }
          .sobre-image-wrap { flex: 0 0 45%; }
          .sobre-text { flex: 0 0 50%; }
        }
      `}</style>
    </section>
  );
}
