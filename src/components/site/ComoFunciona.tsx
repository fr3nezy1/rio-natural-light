import { useFadeIn } from "@/hooks/use-fade-in";

const steps = [
  {
    number: "01",
    title: "me conta sua ideia",
    description:
      "Preenche o formulário com o tipo de sessão e qualquer coisa que você já tenha imaginado pro dia.",
  },
  {
    number: "02",
    title: "a gente ajusta os detalhes",
    description:
      "Te chamo no WhatsApp em até 24h pra falarmos de data, locação e o que faz sentido pra você.",
  },
  {
    number: "03",
    title: "reservamos a data",
    description:
      "Fechamos tudo por contrato — data, valor, entregáveis. Sem surpresa depois.",
  },
  {
    number: "04",
    title: "o dia da sessão",
    description:
      "Você só precisa aparecer e ser você. Da luz e do enquadramento, eu cuido.",
  },
  {
    number: "05",
    title: "escolhemos juntos",
    description:
      "Apresento uma pré-seleção tratada e a gente escolhe as fotos finais juntos. Você participa da curadoria.",
  },
  {
    number: "06",
    title: "entrega",
    description:
      "As fotos finalizadas chegam em até 15 dias após o dia da sessão.",
  },
];

export function ComoFunciona() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="fade-section"
      style={{
        backgroundColor: "#FAF7F2",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.1em",
              color: "#C8956D",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            O caminho
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "36px",
              color: "#1A1A1A",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
            }}
          >
            como funciona
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              color: "rgba(26,26,26,0.7)",
              margin: 0,
            }}
          >
            Do primeiro contato à entrega das fotos, sem mistério.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
        >
          {steps.map((step, idx) => (
            <div key={idx}>
              <p
                className="font-display"
                style={{
                  fontSize: "56px",
                  color: "#C8956D",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  margin: "0 0 16px 0",
                }}
              >
                {step.number}
              </p>
              <h3
                className="font-display"
                style={{
                  fontSize: "22px",
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                  margin: "0 0 12px 0",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#1A1A1A",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .fade-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          #como-funciona > div {
            padding-top: 120px;
            padding-bottom: 120px;
          }
          #como-funciona > div > div:first-child {
            margin-bottom: 80px;
          }
          #como-funciona h2 {
            font-size: 56px !important;
          }
          #como-funciona p:not([style*="fontWeight: 500"]):not([style*="color: rgba"]) {
            font-size: 15px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          #como-funciona > div > div:last-child {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
        }

        @media (min-width: 1024px) {
          #como-funciona > div > div:last-child {
            grid-template-columns: repeat(3, 1fr);
            gap: 64px;
            row-gap: 64px;
          }
        }
      `}</style>
    </section>
  );
}
