import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Visao } from "@/components/site/Visao";
import { Servicos } from "@/components/site/Servicos";
import { ComoFunciona } from "@/components/site/ComoFunciona";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pedro Mendonça — Fotógrafo Lifestyle no Rio de Janeiro" },
      {
        name: "description",
        content:
          "Pedro Mendonça: ensaios, casais e ativações de marca em luz natural no Rio de Janeiro.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main style={{ backgroundColor: "#FAF7F2" }}>
      <Header />
      <Hero />
      <Sobre />
      <Visao />
      <Servicos />
      <ComoFunciona />
    </main>
  );
}
