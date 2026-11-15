import { ArrowRight, BellRing, Gauge, Layers } from "lucide-react";
import Phone from "../../components/Phone/Phone";

const features = [
  {
    icon: Layers,
    title: "Sem burocracia",
    description: "Uma experiência simples e intuitiva, do primeiro acesso ao dia a dia.",
  },
  {
    icon: BellRing,
    title: "Tempo real",
    description: "Acompanhe cada entrada e saída com notificações instantâneas.",
  },
  {
    icon: Gauge,
    title: "No seu ritmo",
    description: "Limites e controles que se ajustam ao seu jeito de usar o dinheiro.",
  },
];

function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="scroll-mt-19.5 overflow-hidden bg-[#103d32] py-20 text-[#f8f9f5] lg:py-30"
    >
      <div className="mx-auto grid w-full items-center gap-14 px-6 sm:w-[90%] sm:px-0 lg:w-[84%] lg:grid-cols-[1.1fr_1fr] lg:gap-12 2xl:w-[76%]">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-[#b9f45d] uppercase before:h-px before:w-8 before:bg-[#b9f45d]/40">
            Seu banco nivoobank
          </p>
          <h2
            id="experience-title"
            className="mt-6 text-balance text-[clamp(32px,3.5vw,56px)] leading-[1.08] font-semibold tracking-tighter"
          >
            Seu banco<br />acompanha o seu<br />
            <span className="text-[#b9f45d]">ritmo.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#b4ccc3] sm:text-lg">
            Mais praticidade para cuidar do que importa, com uma experiência simples, intuitiva e sem burocracia.
          </p>
          <ul className="mt-10 space-y-6">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#b9f45d]/30 text-[#b9f45d]">
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#b4ccc3]">{description}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#abrir-conta"
            className="mt-10 inline-flex w-full sm:w-auto min-h-12 items-center justify-center gap-3 rounded-full border border-[#b9f45d]/40 px-6 py-3 text-sm font-medium text-[#b9f45d] transition-colors duration-300 hover:bg-[#b9f45d] hover:text-[#103d32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f45d]"
          >
            Abra sua conta <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="flex justify-center lg:pl-10">
          <Phone />
        </div>
      </div>
    </section>
  );
}

export default Experience;
