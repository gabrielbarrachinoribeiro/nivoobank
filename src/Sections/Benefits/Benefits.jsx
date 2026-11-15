import { CreditCard, ShieldCheck, Smartphone, Zap } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Conta 100% digital",
    description: "Gerencie tudo pelo aplicativo, sem filas e sem papelada.",
  },
  {
    icon: Zap,
    title: "Pix instantâneo",
    description: "Envie e receba dinheiro em segundos, a qualquer hora.",
  },
  {
    icon: CreditCard,
    title: "Cartão inteligente",
    description: "Mais controle sobre suas compras, com limites ajustáveis.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    description: "Proteção ativa para cada transação, do login ao pagamento.",
  },
];

function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-title"
      className="bg-[#f8f9f5] py-20 text-[#071d22] lg:py-30"
    >
      <div className="mx-auto w-full px-6 sm:w-[90%] sm:px-0 lg:w-[84%] 2xl:w-[76%]">
        <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-[#718c83] uppercase before:h-px before:w-8 before:bg-[#afc1b9]">
          Benefícios
        </p>
        <h2
          id="benefits-title"
          className="mt-5 text-[clamp(32px,3.5vw,56px)] leading-[1.08] font-semibold tracking-tighter"
        >
          Tudo o que você precisa.
          <br />
          <span className="text-[#718c83]">Sem complicação.</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative rounded-[26px] border border-[#103d32]/10 bg-white p-7 transition-all duration-300 ease-out after:absolute after:inset-x-7 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-[#b9f45d] after:transition-transform after:duration-300 hover:-translate-y-1.5 hover:border-[#d4e2c4] hover:bg-[#f3fbe5] hover:shadow-xl hover:shadow-[#103d32]/10 hover:after:scale-x-100"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#b9f45d] text-[#103d32] transition-colors duration-300 group-hover:bg-[#103d32] group-hover:text-[#b9f45d]">
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-7 text-base leading-snug font-semibold tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#62756a]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
