import { useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

type ServiceType = "retratos" | "casais" | "eventos" | null;

const services = [
  {
    id: "retratos",
    image: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1778554880/Rogeann-09_vdoo8e.jpg",
    alt: "Retrato em luz natural no Rio de Janeiro",
    tag: "PRESENÇA · AUTENTICIDADE · OLHAR",
    title: "retratos",
    description:
      "Sessões individuais ao ar livre, em uma paisagem do Rio escolhida pra você. A foto acontece no caminho.",
    fullDescription:
      "Sessões individuais ao ar livre, em uma paisagem do Rio que converse com você e com a sua ideia. A gente caminha, conversa, e vai entendendo junto como você se encaixa naquele cenário, porque o Rio reserva algo único pra cada dia, cada horário. O resultado é a união entre você e a cidade.",
    includes: [
      "1 hora de sessão",
      "1 locação à sua escolha",
      "Pré-seleção de 30 fotos pra escolha conjunta",
      "15 fotos finais editadas em alta resolução",
      "Entrega em até 15 dias",
    ],
  },
  {
    id: "casais",
    image: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1778554863/Gabriel_Diana-21_fzycay.jpg",
    alt: "Sessão de casal em locação do Rio de Janeiro",
    tag: "CUMPLICIDADE · TOQUE · AFETO",
    title: "casais",
    description:
      "Vocês juntos, no início da manhã, em um lugar do Rio que faça sentido pra história do casal.",
    fullDescription:
      "Um momento real entre vocês em um lugar do Rio escolhido com cuidado pra dialogar com a história do casal. Durante uma hora e meia, fico atento às interações de vocês, pra registrar o sentimento que envolve a relação. Prefiro trabalhar no início da manhã, quando a luz do Rio é mais bonita pra esse tipo de sessão. As fotos ajudam a reviver esse momento sempre que quiserem.",
    includes: [
      "1 hora e meia de sessão",
      "1 locação à sua escolha",
      "Pré-seleção de 30 fotos pra escolha conjunta",
      "15 fotos finais editadas em alta resolução",
      "Entrega em até 15 dias",
    ],
  },
  {
    id: "eventos",
    image: "https://res.cloudinary.com/dsf09jmai/image/upload/q_auto/f_auto/v1778554841/BT_Experience-6_a076on.jpg",
    alt: "Ativação de marca esportiva no Rio de Janeiro",
    tag: "MOVIMENTO · RITMO · ENERGIA",
    title: "eventos & ativações",
    description:
      "Ativações de marca, eventos esportivos e ações de saúde e bem-estar. Imagens que mantêm o evento vivo depois.",
    fullDescription:
      "Cobertura de ativações de marca, eventos esportivos e ações voltadas para saúde e bem-estar. Cada foto traduz em imagem o que aquela experiência teve de melhor, o que a marca defende e o que o público viveu. É o que mantém o evento vivo depois que ele acaba, e o que posiciona quem fez acontecer.",
    includes: [
      "Briefing detalhado pré-evento",
      "Cobertura conforme escopo definido",
      "Edição e curadoria das melhores fotos",
      "Entrega em alta resolução",
      "Orçamento sob consulta por evento",
    ],
  },
];

export function Servicos() {
  const ref = useFadeIn<HTMLDivElement>();
  const [openModal, setOpenModal] = useState<ServiceType>(null);

  const currentService = services.find((s) => s.id === openModal);

  const closeModal = () => {
    setOpenModal(null);
    document.body.style.overflow = "";
  };

  const openServiceModal = (id: ServiceType) => {
    setOpenModal(id);
    document.body.style.overflow = "hidden";
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <section
        id="servicos"
        ref={ref}
        className="fade-section"
        style={{
          backgroundColor: "#FAF7F2",
          paddingTop: "80px",
          paddingBottom: "24px",
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
              O que eu fotografo
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "36px",
                color: "#1A1A1A",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              três caminhos
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "48px",
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="servico-card"
                onClick={() => openServiceModal(service.id as ServiceType)}
                style={{
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 5",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    className="card-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.4)",
                      transition: "opacity 300ms ease",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "#A67C52",
                    marginTop: "24px",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  {service.tag}
                </p>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "24px",
                    color: "#1A1A1A",
                    lineHeight: 1.1,
                    margin: "0 0 16px 0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    color: "#1A1A1A",
                    lineHeight: 1.65,
                    marginBottom: "24px",
                    margin: "0 0 24px 0",
                  }}
                >
                  {service.description}
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openServiceModal(service.id as ServiceType);
                  }}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "0.05em",
                    color: "#1A1A1A",
                    textDecoration: "none",
                    borderBottom: "1px solid #1A1A1A",
                    paddingBottom: "2px",
                    display: "inline-block",
                    transition: "color 200ms ease, border-color 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C8956D";
                    e.currentTarget.style.borderColor = "#C8956D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1A1A1A";
                    e.currentTarget.style.borderColor = "#1A1A1A";
                  }}
                >
                  Saiba mais →
                </a>
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
            section#servicos {
              padding-bottom: 32px !important;
            }
          }

          @media (min-width: 1024px) {
            section#servicos {
              padding-top: 120px !important;
              padding-bottom: 32px !important;
            }
            section#servicos h2 {
              font-size: 56px !important;
            }
            section#servicos h3 {
              font-size: 28px !important;
            }
          }

          @media (min-width: 1024px) {
            section#servicos > div > div:nth-child(2) {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 32px !important;
            }
          }

          @media (max-width: 1023px) {
            .card-overlay {
              opacity: 0;
            }
          }

          @media (min-width: 1024px) {
            .card-overlay {
              opacity: 1;
            }
            .servico-card:hover .card-overlay {
              opacity: 0;
            }
          }
        `}</style>
      </section>

      {openModal && currentService && (
        <div
          onKeyDown={handleKeyDown}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 250ms ease",
          }}
          tabIndex={-1}
        >
          <div
            onClick={handleBackdropClick}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="modal-panel"
            style={{
              position: "relative",
              width: "640px",
              maxWidth: "90vw",
              aspectRatio: "4 / 5",
              maxHeight: "90vh",
              overflow: "hidden",
              borderRadius: "2px",
              zIndex: 1,
              padding: 0,
              backgroundColor: "transparent",
            }}
          >
            <img
              src={currentService.image}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.75)",
              }}
            />
            <button
              onClick={closeModal}
              autoFocus
              aria-label="Fechar"
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                background: "none",
                border: "none",
                color: "#FAF7F2",
                fontSize: "28px",
                cursor: "pointer",
                zIndex: 2,
                fontFamily: "Anton, sans-serif",
                lineHeight: 1,
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C8956D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#FAF7F2";
              }}
            >
              ×
            </button>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "100%",
                color: "#FAF7F2",
              }}
            >
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  color: "#C8956D",
                  marginBottom: "14px",
                  textTransform: "uppercase",
                }}
              >
                {currentService.tag}
              </span>
              <h3
                id="modal-title"
                className="font-display"
                style={{
                  fontSize: "38px",
                  lineHeight: 1.1,
                  color: "#FAF7F2",
                  marginBottom: "20px",
                }}
              >
                {currentService.title}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#FAF7F2",
                  maxWidth: "440px",
                  marginBottom: "40px",
                }}
              >
                {currentService.fullDescription}
              </p>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "0.15em",
                  color: "#FAF7F2",
                  marginBottom: "12px",
                }}
              >
                O QUE ESTÁ INCLUSO
              </span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: "28px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#FAF7F2",
                }}
              >
                {currentService.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <a
                href="#contato"
                onClick={closeModal}
                style={{
                  display: "inline-block",
                  background: "#FAF7F2",
                  color: "#1A1A1A",
                  padding: "14px 28px",
                  borderRadius: "2px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  transition: "background 250ms ease, color 250ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#C8956D";
                  e.currentTarget.style.color = "#FAF7F2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FAF7F2";
                  e.currentTarget.style.color = "#1A1A1A";
                }}
              >
                Quero esse tipo de sessão
              </a>
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @media (min-width: 768px) {
              .modal-panel {
                max-width: 640px !important;
              }
            }

            @media (max-width: 767px) {
              .modal-panel h3 { font-size: 28px !important; }
              .modal-panel p { font-size: 13px !important; }
              .modal-panel ul { font-size: 12px !important; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
