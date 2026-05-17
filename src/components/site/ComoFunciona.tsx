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
        paddingTop: "24px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "24px",
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

        <div className="passos-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="passo">
              <span className="passo-numero font-display">{step.number}</span>
              <h3 className="passo-titulo font-display">{step.title}</h3>
              <p className="passo-descricao">{step.description}</p>
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
          #como-funciona {
            padding-top: 32px !important;
          }
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

        .passos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .passo-numero {
          display: block;
          font-size: 52px;
          color: #C8956D;
          line-height: 0.9;
          margin-bottom: 8px;
          font-weight: 400;
          letter-spacing: 0;
        }

        .passo-titulo {
          font-size: 16px;
          color: #1A1A1A;
          margin: 0 0 8px 0;
          letter-spacing: 0.02em;
        }

        .passo-descricao {
          font-family: Poppins, sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: rgba(26, 26, 26, 0.85);
          line-height: 1.6;
          margin: 0;
        }

        @media (min-width: 768px) {
          .passos-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px 64px;
          }

          .passo-numero {
            font-size: 64px;
          }

          .passo-titulo {
            font-size: 18px;
          }

          .passo-descricao {
            font-size: 15px;
          }
        }

        @media (max-width: 767px) {
          .passos-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .passo-numero {
            font-size: 52px;
          }

          .passo-titulo {
            font-size: 16px;
          }

          .passo-descricao {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
