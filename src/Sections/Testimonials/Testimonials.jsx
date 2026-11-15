import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Alves",
    initials: "MA",
    occupation: "Designer autônoma",
    title: "Finalmente, uma conta que acompanha minha rotina.",
    quote: "Recebo dos meus clientes, organizo os pagamentos e acompanho tudo pelo app. Ficou muito mais fácil cuidar do meu dinheiro sem perder tempo.",
    featured: true,
  },
  {
    name: "Lucas Oliveira",
    initials: "LO",
    occupation: "Empreendedor",
    title: "Simples de usar. Do jeito que eu precisava.",
    quote: "Gosto de abrir o aplicativo e encontrar o que preciso sem ficar procurando. Faço um Pix, confiro o saldo e sigo o meu dia. Sem complicação.",
  },
  {
    name: "Beatriz Santos",
    initials: "BS",
    occupation: "Analista de marketing",
    title: "Mais clareza para decidir, mais tranquilidade no dia a dia.",
    quote: "As notificações me ajudam a acompanhar cada compra e a ter mais controle dos gastos. É bom sentir que eu sei o que está acontecendo com a minha conta.",
  },
];

function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="scroll-mt-19.5 bg-[#eef3e7] py-20 text-[#071d22] lg:py-30"
    >
      <div className="mx-auto w-full px-6 sm:w-[90%] sm:px-0 lg:w-[84%] 2xl:w-[76%]">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-[#718c83] uppercase before:h-px before:w-8 before:bg-[#afc1b9]">
              Depoimentos
            </p>
            <h2
              id="testimonials-title"
              className="mt-6 text-balance text-[clamp(32px,3.5vw,56px)] leading-[1.08] font-semibold tracking-tighter"
            >
              A vida fica mais leve.<br />
              <span className="text-[#718c83]">E quem usa, sente.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#62756a] lg:pb-1">
            Mais tempo para o que importa e menos preocupação com o dinheiro.
            Uma experiência pensada para fazer parte da sua rotina.
          </p>
        </div>
        <div className="mt-12 grid gap-4.5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map(({ name, initials, occupation, title, quote, featured }) => (
            <figure
              key={name}
              className={`group relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#103d32]/10 sm:p-8 ${
                featured ? "bg-[#103d32] text-[#f8f9f5]" : "bg-white text-[#071d22]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div role="img" aria-label="5 de 5 estrelas" className={`flex gap-1 ${featured ? "text-[#b9f45d]" : "text-[#57833e]"}`}>
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} className="fill-current" aria-hidden="true" />)}
                </div>
                <Quote size={32} strokeWidth={1.3} className={featured ? "text-[#b9f45d]/50" : "text-[#a9c18f]"} aria-hidden="true" />
              </div>
              <blockquote className="mt-7 flex-1">
                <p className="text-xl leading-snug font-medium tracking-tight">{title}</p>
                <p className={`mt-5 text-sm leading-relaxed ${featured ? "text-[#bfd3c9]" : "text-[#62756a]"}`}>
                  “{quote}”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span aria-hidden="true" className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${featured ? "bg-[#b9f45d] text-[#103d32]" : "bg-[#edf4e3] text-[#103d32]"}`}>
                  {initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className={`mt-1 text-xs ${featured ? "text-[#bfd3c9]" : "text-[#62756a]"}`}>{occupation}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-[#62756a]">Depoimentos ilustrativos. Nomes e relatos fictícios.</p>
      </div>
    </section>
  );
}

export default Testimonials;
