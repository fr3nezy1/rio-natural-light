import { useFadeIn } from "@/hooks/use-fade-in";

export function Sobre() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section style={{ backgroundColor: "#FAF7F2" }} className="sobre-section">
      <div
        ref={ref}
        className="fade-in mx-auto sobre-grid"
        style={{
          maxWidth: "1200px",
          padding: "0 24px",
        }}
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
              fontSize: "36px",
              lineHeight: 1.1,
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
        .sobre-section { padding: 80px 0; }
        .sobre-grid { display: flex; flex-direction: column; gap: 48px; }
        .sobre-paragraphs p {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.75;
          color: #1A1A1A;
        }
        .sobre-paragraphs p + p { margin-top: 24px; }
        @media (min-width: 1024px) {
          .sobre-section { padding: 120px 0; }
          .sobre-grid {
            flex-direction: row;
            align-items: center;
            gap: 80px;
          }
          .sobre-image-wrap { flex: 0 0 45%; }
          .sobre-text { flex: 0 0 50%; }
          .sobre-h2 { font-size: 56px !important; }
          .sobre-paragraphs p { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}
