import aboutImage from "../../assets/sobre.png";

const statistics = [
  { value: "2,4 mi", label: "de clientes" },
  { value: "4,9", label: "nas lojas de apps" },
  { value: "97%", label: "recomendam" },
];

function About() {
  return (
    <section
      id="sobre-nos"
      aria-labelledby="about-title"
      className="scroll-mt-19.5 bg-[#f8f9f5] py-20 text-[#071d22] lg:py-30"
    >
      <div className="mx-auto grid w-full items-center gap-10 px-6 sm:w-[90%] sm:px-0 lg:w-[84%] lg:grid-cols-[0.85fr_1fr] lg:gap-16 2xl:w-[76%] 2xl:gap-20">
        <img
          src={aboutImage}
          alt="Pessoa usando o aplicativo da nivoobank no celular"
          width={1254}
          height={1254}
          loading="lazy"
          className="aspect-square w-full rounded-[32px] object-cover lg:aspect-[9/10]"
        />
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-[#718c83] uppercase before:h-px before:w-8 before:bg-[#afc1b9]">
            Sobre a nivoobank
          </p>
          <h2
            id="about-title"
            className="mt-6 text-balance text-[clamp(32px,3.5vw,56px)] leading-[1.08] font-semibold tracking-tighter"
          >
            Um jeito mais simples de lidar com dinheiro.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#62756a]">
            <p>
              A nivoobank nasceu para tirar o peso das tarefas financeiras.
              Acreditamos que serviços bancários devem ser acessíveis,
              transparentes e fáceis de entender — sem letras miúdas, sem tarifas
              escondidas.
            </p>
            <p>
              Somos um time de pessoas obcecadas por detalhes, construindo uma
              conta digital que cabe na sua rotina e respeita o seu tempo.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 lg:mt-12">
            {statistics.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <dt className="order-2 text-xs leading-relaxed text-[#62756a] sm:text-sm">{label}</dt>
                <dd className="text-[clamp(28px,2.5vw,40px)] leading-none font-semibold tracking-tighter text-[#103d32]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
