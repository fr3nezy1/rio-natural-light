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
      "Vocês juntos, no início da manhã, em um lugar do Rio que faça sentido pra história de vocês.",
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

          @media (min-width: 1024px) {
            section#servicos {
              padding-top: 120px !important;
              padding-bottom: 120px !important;
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
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 90,
            animation: "fadeIn 250ms ease",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#FAF7F2",
              maxWidth: "900px",
              width: "90vw",
              maxHeight: "85vh",
              overflowY: "auto",
              zIndex: 100,
              animation: "slideIn 300ms ease-out",
              padding: 0,
            }}
          >
            <button
              onClick={closeModal}
              autoFocus
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                background: "none",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                color: "#1A1A1A",
                transition: "color 200ms ease",
                zIndex: 101,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C8956D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1A1A1A";
              }}
            >
              ×
            </button>

            <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
              <img
                src={currentService.image}
                alt={currentService.alt}
                style={{
                  aspectRatio: "4 / 5",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: "32px 24px",
                  overflow: "auto",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "#A67C52",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  {currentService.tag}
                </p>
                <h3
                  id="modal-title"
                  className="font-display"
                  style={{
                    fontSize: "36px",
                    color: "#1A1A1A",
                    lineHeight: 1.1,
                    margin: "0 0 32px 0",
                  }}
                >
                  {currentService.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "17px",
                    color: "#1A1A1A",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  {currentService.fullDescription}
                </p>

                <div style={{ marginBottom: "32px" }}>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      color: "#A67C52",
                      marginBottom: "16px",
                      textTransform: "uppercase",
                    }}
                  >
                    O que está incluso
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {currentService.includes.map((item, idx) => (
                      <p
                        key={idx}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                          fontSize: "15px",
                          color: "#1A1A1A",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href="#contato"
                  onClick={closeModal}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#1A1A1A",
                    color: "#FAF7F2",
                    padding: "16px 32px",
                    borderRadius: "2px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "background-color 250ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C8956D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1A1A1A";
                  }}
                >
                  Quero esse tipo de sessão
                </a>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
            }
            @media (min-width: 768px) {
              div[role="dialog"] {
                display: flex;
                flex-direction: row !important;
              }
              div[role="dialog"] > img {
                width: 45% !important;
                aspect-ratio: 4 / 5 !important;
              }
              div[role="dialog"] > div {
                width: 55% !important;
                padding: 48px !important;
              }
              div[role="dialog"] h3 {
                font-size: 48px !important;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
