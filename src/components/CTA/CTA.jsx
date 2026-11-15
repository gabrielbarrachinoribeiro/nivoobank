import { ArrowRight } from "lucide-react";

function CTA({ href = "#contato" }) {
  return (
    <section
      id="abrir-conta"
      aria-labelledby="cta-title"
      className="relative isolate scroll-mt-19.5 overflow-hidden bg-[#b9f45d] py-20 text-center text-[#103d32] lg:py-30"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-44 -z-10 flex size-96 items-center justify-center rounded-full border border-[#103d32]/10 sm:-right-4 sm:-bottom-44 sm:size-112">
        <div className="flex size-4/5 items-center justify-center rounded-full border border-[#103d32]/10">
          <div className="size-3/4 rounded-full border border-[#103d32]/10" />
        </div>
      </div>
      <div className="mx-auto w-full px-6 sm:w-[90%] sm:px-0 lg:w-[84%] 2xl:w-[76%]">
        <p className="text-xs font-medium tracking-[0.2em] text-[#103d32]/65 uppercase">
          Comece hoje
        </p>
        <h2
          id="cta-title"
          className="mx-auto mt-6 text-balance text-[clamp(32px,3.5vw,56px)] leading-[1.08] font-semibold tracking-tighter lg:w-4/5"
        >
          Seu próximo passo começa<br className="hidden sm:block" /> com a nivoobank.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#103d32]/75 sm:text-lg">
          Descubra uma nova forma de cuidar do seu dinheiro.
        </p>
        <a
          href={href}
          className="group mt-9 inline-flex w-full sm:w-auto min-h-14 items-center justify-center gap-3 rounded-full bg-[#0b1c16] px-8 py-4 text-sm font-medium text-[#f8f9f5] transition-colors duration-300 hover:bg-[#103d32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#103d32] sm:text-base"
        >
          Começar agora
          <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <p className="mt-6 text-xs leading-relaxed text-[#103d32]/65 sm:text-sm">
          Conta gratuita · Sem anuidade · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}

export default CTA;
