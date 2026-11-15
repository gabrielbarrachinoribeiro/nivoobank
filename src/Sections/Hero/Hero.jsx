import { ArrowRight, ArrowUpRight, CreditCard, ShieldCheck, Wallet, Zap } from "lucide-react";
import man from "../../assets/man.png";
import BeamsBackground from "../../components/ui/beams-background";

const advantages = [
  { icon: Wallet, label: "Conta digital gratuita" },
  { icon: Zap, label: "Pix em segundos" },
  { icon: CreditCard, label: "Cartão sem anuidade" },
];

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#0c2924] pt-19.5 text-[#f8f9f5]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_90%_15%,#b9f45d1f,transparent_55%),linear-gradient(120deg,#071d2240,transparent_65%)]" />
      <BeamsBackground intensity="medium" className="-z-10" />
      <div className="mx-auto grid w-full items-center gap-12 px-6 py-12 sm:w-[90%] sm:px-0 lg:min-h-[calc(100svh-78px)] lg:w-[84%] lg:grid-cols-2 lg:gap-14 lg:py-[clamp(32px,5svh,72px)] 2xl:w-[76%]">
        <div>
          <h1 id="hero-title" className="text-balance text-[clamp(40px,5vw,76px)] leading-[1.04] font-semibold tracking-[-0.055em] lg:text-[clamp(40px,min(5vw,8svh),76px)]">
            O futuro do <span className="whitespace-nowrap">seu dinheiro</span>{" "}
            <span className="text-[#b9f45d]">começa aqui.</span>
          </h1>
          <p className="mt-6 w-full text-base leading-relaxed text-[#b4ccc3] sm:w-4/5 sm:text-lg">
            Uma conta digital feita para simplificar sua vida. Controle suas finanças, faça transferências e aproveite mais liberdade, tudo em um só lugar.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#b9f45d]">
            <a href="#abrir-conta" className="inline-flex w-full sm:w-auto min-h-14 items-center justify-center gap-3 rounded-full bg-[#b9f45d] px-7 py-4 text-sm font-medium text-[#103d32] transition-colors duration-300 hover:bg-[#cdfb86] sm:text-base">
              Abra sua conta <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#sobre-nos" className="inline-flex w-full sm:w-auto min-h-14 items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium transition-colors duration-300 hover:bg-white/10 sm:text-base">
              Conheça a nivoobank
            </a>
          </div>
          <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-[#b4ccc3]">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#b9f45d]" aria-hidden="true" />
            Abertura de conta em 5 minutos, direto pelo app.
          </p>
          <div className="mt-10 lg:mt-[clamp(32px,6svh,72px)]">
            <p className="text-xs font-medium tracking-widest text-[#b4ccc3] uppercase">Mais liberdade no seu dia a dia</p>
            <ul aria-label="Vantagens da conta" className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
              {advantages.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-xs font-medium text-[#e1ece5]">
                  <Icon size={20} strokeWidth={1.6} className="shrink-0 text-[#b9f45d]" aria-hidden="true" />{label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative isolate mx-auto grid aspect-square w-full grid-rows-[auto_1fr] gap-3 sm:w-4/5 sm:gap-4 lg:w-full">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-[#d8eee5] p-4 text-[#103d32] sm:rounded-3xl sm:p-6">
              <Wallet size={23} strokeWidth={1.7} aria-hidden="true" />
              <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">100% digital</p>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm">Sua conta, sempre com você.</p>
            </div>
            <div className="rounded-2xl bg-[#367b5c] p-4 sm:rounded-3xl sm:p-6">
              <p className="text-xs text-[#d8eee5] sm:text-sm">Suporte a qualquer hora</p>
              <p className="mt-2 text-3xl font-semibold text-[#b9f45d] sm:text-5xl">24h</p>
              <p className="mt-2 flex items-center gap-2 text-xs text-[#e1ece5]"><span className="size-1.5 rounded-full bg-[#b9f45d]" />Do seu lado, sempre</p>
            </div>
          </div>
          <div aria-hidden="true" className="relative -z-10 min-h-0 rounded-3xl bg-[#d8eee5]" />
          <img src={man} alt="Homem sorrindo enquanto usa o celular" width="1220" height="1800" fetchPriority="high" className="pointer-events-none absolute bottom-0 left-1/2 h-[94%] w-[94%] -translate-x-1/2 object-contain object-bottom" />
          <div className="absolute right-2 bottom-7 flex items-center gap-2 rounded-2xl border border-white/60 bg-[#f8f9f5] p-3 text-[#103d32] shadow-xl sm:right-4 sm:bottom-10 sm:gap-3 sm:p-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#b9f45d]"><ArrowUpRight size={21} aria-hidden="true" /></span>
            <div><p className="text-sm font-semibold">Pix em segundos</p><p className="mt-1 text-xs text-[#62756a]">Mais tempo para você.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
