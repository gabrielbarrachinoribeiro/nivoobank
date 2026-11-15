import { Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const navigation = [
  ["Início", "#inicio"],
  ["Benefícios", "#beneficios"],
  ["Sobre nós", "#sobre-nos"],
  ["Contato", "#contato"],
];

function SocialIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
      {name === "Instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" /></>}
      {name === "LinkedIn" && <><rect x="3" y="9" width="4" height="12" rx="1" /><circle cx="5" cy="4.5" r="1.8" /><path d="M11 21V9h4v2a4 4 0 0 1 7 3v7h-4v-7a1.5 1.5 0 0 0-3 0v7z" /></>}
      {name === "YouTube" && <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></>}
    </svg>
  );
}

function Footer() {
  return (
    <footer id="contato" className="relative isolate scroll-mt-19.5 overflow-hidden bg-[#0b1611] pt-16 pb-7 text-[#949f97] lg:pt-20">
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[0.3em] left-1/2 -z-10 -translate-x-1/2 text-[clamp(90px,20vw,380px)] leading-none font-bold tracking-tighter whitespace-nowrap text-white/4">
        nivoobank
      </span>
      <div className="mx-auto w-full px-6 sm:w-[90%] sm:px-0 lg:w-[84%] 2xl:w-[76%]">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-x-14">
          <div>
            <a href="#inicio" aria-label="nivoobank — início" className="inline-block text-[27px] leading-none font-bold tracking-[-1.5px] text-[#f8f9f5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f45d]">
              nivoobank<span className="text-[#b9f45d]">.</span>
            </a>
            <p className="mt-6 text-sm leading-relaxed">
              A conta digital que respeita o seu ritmo: simples, transparente e feita para o seu dia a dia.
            </p>
            <div aria-label="Redes sociais" className="mt-6 flex gap-3">
              {["Instagram", "LinkedIn", "YouTube"].map(name => (
                <span key={name} role="img" aria-label={name} className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-[#b1bbb4] transition-colors duration-300 hover:border-[#b9f45d] hover:bg-[#b9f45d] hover:text-[#103d32]">
                  <SocialIcon name={name} />
                </span>
              ))}
            </div>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#b9f45d]/75 uppercase">Navegação</h2>
            <ul className="mt-6 space-y-4">
              {navigation.map(([label, href]) => (
                <li key={href}><a href={href} className="text-sm transition-colors duration-300 hover:text-[#b9f45d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9f45d]">{label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#b9f45d]/75 uppercase">Produtos</h2>
            <ul className="mt-6 space-y-4">
              {["Conta digital", "Cartão nivoobank", "Pix", "Segurança"].map(product => (
                <li key={product}><span className="inline-block cursor-pointer text-sm transition-colors duration-300 hover:text-[#b9f45d]">{product}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#b9f45d]/75 uppercase">Fale com a gente</h2>
            <p className="mt-6 flex items-start gap-3 text-sm text-[#b1bbb4]">
              <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span className="break-all">oi@nivoobank.com.br</span>
            </p>
            <p className="mt-5 text-sm leading-relaxed">Atendimento 24 horas,<br />todos os dias.</p>
            <p className="mt-4 text-sm">São Paulo · Brasil</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs leading-relaxed text-[#949f97] lg:flex-row lg:justify-between">
          <p>© {currentYear} nivoobank. Todos os direitos reservados.</p>
          <p>Projeto fictício criado para fins demonstrativos.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
