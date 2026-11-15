import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  BatteryFull,
  Coffee,
  CreditCard,
  Eye,
  QrCode,
  ShieldCheck,
  Signal,
  Wifi,
  Zap,
} from "lucide-react";

const shortcuts = [
  { icon: Zap, label: "Pix" },
  { icon: QrCode, label: "Pagar" },
  { icon: ArrowLeftRight, label: "Enviar" },
  { icon: CreditCard, label: "Cartão" },
];
const transactions = [
  {
    icon: Coffee,
    title: "Mercado Verde",
    date: "Hoje · 09:12",
    amount: "- R$ 84,50",
  },
  {
    icon: ArrowDownLeft,
    title: "Pix recebido",
    date: "Ontem · 18:40",
    amount: "+ R$ 1.200,00",
    incoming: true,
  },
  {
    icon: ArrowUpRight,
    title: "Assinatura",
    date: "Ontem · 08:05",
    amount: "- R$ 39,90",
  },
];

function Phone() {
  return (
    <div className="relative mx-auto flex w-[min(100%,340px)] flex-col gap-3 text-[#103d32] lg:mx-0">
      <div className="relative rounded-[50px] border-[9px] border-[#101c16] bg-[#f3f6eb] px-4 pt-3 pb-6 shadow-[0_35px_55px_-20px_#29462366]">
        <div className="relative mb-5 flex items-center justify-between text-xs font-medium">
          <span>9:41</span>
          <span className="absolute top-0 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-[#101c16]" />
          <span className="flex items-center gap-1">
            <Signal size={13} />
            <Wifi size={13} />
            <BatteryFull size={15} />
          </span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.16em] text-[#78867e]">BOM DIA</p>
            <p className="text-base font-semibold text-[#071d22]">
              Marina Alves
            </p>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-[#b9f45d] text-sm font-semibold">
            MA
          </span>
        </div>
        <div className="rounded-[23px] bg-[linear-gradient(110deg,#103d32,#20523a)] p-4">
          <div className="flex items-center justify-between gap-2 text-[#b9f45d]">
            <p className="text-xs font-medium tracking-widest">
              SALDO DISPONÍVEL
            </p>
            <Eye size={16} />
          </div>
          <p className="mt-2 text-[28px] font-semibold tracking-[-1px] text-white">
            R$ 12.480,75
          </p>
          <div className="mt-4 flex items-center justify-between gap-2 text-xs">
            <span className="text-[#b4c6b8]">Conta digital · 04291-8</span>
            <span className="rounded-full bg-[#b9f45d]/15 px-2 py-1 text-[#b9f45d]">
              Nivoo
            </span>
          </div>
        </div>
        <div className="my-3 grid grid-cols-4 gap-2">
          {shortcuts.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white shadow-[0_3px_10px_#103d3210]">
                <Icon size={18} strokeWidth={1.6} />
              </span>
              <span className="text-xs text-[#66776f]">{label}</span>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#cdfb86,#adf04b)] p-4">
          <div className="pointer-events-none absolute -right-8 -bottom-12 size-28 rounded-full border border-[#103d32]/10" />
          <div className="relative flex items-center justify-between">
            <span className="text-base font-bold tracking-[-0.5px]">nivoo</span>
            <span className="text-xs tracking-[0.12em]">VIRTUAL</span>
          </div>
          <p className="relative mt-3 text-sm tracking-[0.15em]">•••• 4291</p>
          <div className="relative mt-2 flex items-center justify-between gap-2 text-xs tracking-[0.06em]">
            <span>MARINA ALVES</span>
            <span>09/29</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-2 text-xs text-[#78867e]">
          <p className="tracking-widest">MOVIMENTAÇÕES</p>
          <span>Ver tudo</span>
        </div>
        <div className="mt-3 space-y-3">
          {transactions.map(({ icon: Icon, title, date, amount, incoming }) => (
            <div key={title} className="flex items-center gap-2">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white">
                <Icon size={16} strokeWidth={1.6} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#071d22]">{title}</p>
                <p className="mt-0.5 text-xs text-[#78867e]">{date}</p>
              </div>
              <span
                className={`shrink-0 text-xs ${incoming ? "font-semibold text-[#19875a]" : "text-[#103d32]"}`}
              >
                {amount}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-2 flex w-fit items-center gap-3 self-start rounded-[20px] bg-white px-4 py-4 shadow-[0_8px_30px_#103d3208] 2xl:absolute 2xl:top-19 2xl:right-[calc(100%-9px)] 2xl:mt-0 2xl:whitespace-nowrap">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#b9f45d]">
          <ArrowUpRight size={19} />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#101c16]">+ R$ 1.200,00</p>
          <p className="text-xs text-[#78867e]">Pix recebido</p>
        </div>
      </div>
      <div className="relative flex w-fit items-center gap-3 self-end rounded-[20px] bg-white px-4 py-4 shadow-[0_8px_30px_#103d3208] 2xl:absolute 2xl:bottom-24 2xl:left-[calc(100%-9px)] 2xl:whitespace-nowrap">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#103d32] text-[#b9f45d]">
          <ShieldCheck size={18} />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#101c16]">
            Compra aprovada
          </p>
          <p className="text-xs text-[#78867e]">Proteção Nivoo ativa</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <section
        id="inicio"
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#f9fbf2_0%,#f3f8e6_48%,#e2f2c0_100%)] text-[#071d22]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[25%] -z-10 h-[110%] bg-[repeating-radial-gradient(ellipse_at_72%_10%,transparent_0px,transparent_23px,#9ebc6c26_25px,transparent_28px)] transform-[perspective(600px)_rotateX(24deg)_scale(1.4)]"
        />
        <div className="mx-auto flex w-full flex-col px-6 py-12 sm:w-[90%] sm:px-0 lg:min-h-[calc(100svh-78px)] lg:w-[84%] lg:py-[clamp(24px,4svh,64px)] 2xl:w-[76%]">
          <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div>
              <h1
                id="hero-title"
                className="text-balance text-[clamp(40px,5vw,76px)] lg:text-[clamp(40px,min(5vw,8svh),76px)] leading-[1.04] font-semibold tracking-[-0.055em]"
              >
                O futuro do <span className="whitespace-nowrap">seu dinheiro</span>{" "}
                <span className="relative isolate inline-block after:absolute after:inset-x-0 after:-bottom-1 after:-z-10 after:h-1 after:rounded-full after:bg-[#b9f45d]">
                  começa aqui.
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#62756a] sm:text-lg">
                Uma conta digital feita para simplificar sua vida. Controle suas
                finanças, faça transferências e aproveite mais liberdade, tudo
                em um só lugar.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#103d32]">
                <a
                  href="#abrir-conta"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#b9f45d] px-7 py-4 text-sm font-medium text-[#103d32] transition-colors hover:bg-[#103d32] hover:text-[#b9f45d] sm:text-base"
                >
                  Abra sua conta
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="#sobre-nos"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#103d32]/20 px-7 py-4 text-sm font-medium transition-colors hover:bg-[#103d32]/5 sm:text-base"
                >
                  Conheça a Nivoo
                </a>
              </div>
              <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-[#78867e]">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[#103d32]"
                  aria-hidden="true"
                />
                Abertura de conta em 5 minutos, direto pelo app.
              </p>
            </div>
            <div className="flex justify-center lg:pl-10">
              <Phone />
            </div>
          </div>
          <ul
            aria-label="Vantagens da conta"
            className="mt-10 grid shrink-0 grid-cols-2 lg:mt-[clamp(20px,4svh,48px)] gap-x-5 gap-y-6 border-t border-[#103d32]/15 pt-5 lg:grid-cols-4 lg:gap-8"
          >
            {[
              "Conta digital gratuita",
              "Pix em segundos",
              "Cartão sem anuidade",
              "Suporte 24 horas",
            ].map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-xs leading-relaxed tracking-[0.12em] text-[#52695a] uppercase before:size-1.5 before:shrink-0 before:rounded-full before:bg-[#9fb68c]"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;
