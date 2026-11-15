import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Início", "#inicio"],
  ["Benefícios", "#beneficios"],
  ["Sobre nós", "#sobre-nos"],
  ["Contato", "#contato"],
];

const linkClasses =
  "relative text-[#103D32] no-underline after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-0 after:bg-[#B9F45D] after:content-[''] after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full focus-visible:after:w-full";
const ctaClasses =
  "min-h-11 items-center justify-center rounded-full bg-[#B9F45D] px-6 py-[11px] text-sm font-medium whitespace-nowrap text-[#103D32] no-underline transition-colors duration-300 ease-in-out hover:bg-[#103D32] hover:text-[#B9F45D]";
function Brand({ onClick }) {
  return (
    <a
      className="whitespace-nowrap text-[26px] leading-none font-[750] tracking-[-1.5px] text-[#071d22] no-underline md:text-[27px]"
      href="#inicio"
      aria-label="nivoobank — início"
      onClick={onClick}
    >
      nivoobank
      <span className="text-[#B9F45D]" aria-hidden="true">
        .
      </span>
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const overflow = document.body.style.overflow;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    const items = dialogRef.current.querySelectorAll("a, button");
    items[0]?.focus();
    function onKey(event) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key !== "Tab") return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", onResize);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      desktop.removeEventListener("change", onResize);
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [isOpen]);

  return (
    <header className="bg-[linear-gradient(105deg,#f9fbf2_0%,#f6faed_73%,#e5f5c4_100%)] text-[#103D32] [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-offset-5 [&_a:focus-visible]:outline-[#103D32] [&_button:focus-visible]:outline-3 [&_button:focus-visible]:outline-offset-5 [&_button:focus-visible]:outline-[#103D32]">
      <div className="mx-auto flex min-h-19.5 w-full items-center justify-between gap-4 px-6 py-3.5 sm:w-[90%] sm:px-0 md:gap-8 lg:w-[84%] 2xl:w-[76%]">
        <Brand />
        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Navegação principal"
        >
          {links.map(([label, href]) => (
            <a
              className={`${linkClasses} text-[15px] font-normal`}
              key={href}
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className={`${ctaClasses} hidden md:inline-flex`}
          href="#abrir-conta"
        >
          Abra sua conta
        </a>
        <button
          ref={toggleRef}
          className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[#103D32] transition-colors duration-300 hover:bg-[#103d320a] md:hidden"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls={isOpen ? "mobile-menu" : undefined}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </div>
      {isOpen && (
        <div
          ref={dialogRef}
          id="mobile-menu"
          className="fixed inset-0 z-1000 flex min-h-dvh flex-col overflow-y-auto bg-[linear-gradient(145deg,#f9fbf2_35%,#e5f5c4_100%)] px-6 pt-[env(safe-area-inset-top,0px)] pb-[max(32px,env(safe-area-inset-bottom,0px))]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex min-h-19.5 shrink-0 items-center justify-between">
            <Brand onClick={() => setIsOpen(false)} />
            <button
              className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[#103D32] transition-colors duration-300 hover:bg-[#103d320a] md:hidden"
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} aria-hidden="true" />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col justify-center gap-6 py-10"
            aria-label="Navegação principal"
          >
            {links.map(([label, href]) => (
              <a
                className={`${linkClasses} w-fit text-[clamp(28px,7vw,40px)] font-medium tracking-[-1px]`}
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className={`${ctaClasses} inline-flex min-h-14 shrink-0 text-base`}
            href="#abrir-conta"
            onClick={() => setIsOpen(false)}
          >
            Abra sua conta
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;