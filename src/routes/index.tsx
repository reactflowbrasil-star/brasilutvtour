import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import brasilUtvLogo from "../assets/brasil-utv-logo.png";
import heroExpedition from "../assets/hero-expedition.png";
import projectUtvDunes from "../assets/project-utv-dunes.png";
import projectUtvValley from "../assets/project-utv-valley.png";
import destPirenopolis from "../assets/dest-pirenopolis.png";
import destJalapao from "../assets/dest-jalapao.png";
import destCamboriu from "../assets/dest-camboriu.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brasil UTV Tour — Projeto Oficial de Patrocínio e Parcerias" },
      {
        name: "description",
        content:
          "O Brasil UTV Tour é uma plataforma itinerante de experiências off-road que conecta destinos, marcas e audiência digital. Seja um patrocinador oficial.",
      },
      {
        property: "og:title",
        content: "Brasil UTV Tour — Projeto Oficial de Patrocínio e Parcerias",
      },
      {
        property: "og:description",
        content:
          "O Brasil UTV Tour é uma plataforma itinerante de experiências off-road que conecta destinos, marcas e audiência digital.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Brasil UTV Tour — Patrocínio e Parcerias" },
      {
        name: "twitter:description",
        content:
          "Uma plataforma itinerante de experiências off-road que conecta destinos, marcas e audiência digital.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { label: "O Projeto", href: "#projeto" },
  { label: "Destinos", href: "#destinos" },
  { label: "Por que Patrocinar", href: "#por-que" },
  { label: "Cotas", href: "#cotas" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedHero, setTypedHero] = useState("");

  useEffect(() => {
    const phrase = "O Brasil visto por outro caminho.";
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedHero(phrase.slice(0, index));
      if (index >= phrase.length) window.clearInterval(timer);
    }, 58);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.32] mix-blend-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${projectUtvDunes})` }}
        />
        <div
          className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${destPirenopolis})` }}
        />
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${destCamboriu})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/25 via-brand-dark/55 to-brand-dark/80" />
      </div>
      <style>{`section { position: relative; z-index: 1; }`}</style>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src={brasilUtvLogo}
              alt="Brasil UTV Tour"
              className="w-12 h-12 object-contain"
            />
            <span className="font-display tracking-tighter text-xl uppercase">
              Brasil <span className="text-brand-gold">UTV</span> Tour
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="hidden md:inline-flex bg-brand-gold text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-tighter hover:bg-white transition-all"
          >
            Seja Parceiro
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-gray border-t border-white/10 px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-bold uppercase tracking-widest text-white/70 hover:text-brand-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="block w-full text-center bg-brand-gold text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              Seja Parceiro
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroExpedition}
            alt="UTV de alta performance em uma trilha dramática ao pôr do sol"
            className="w-full h-full object-contain opacity-60"
            width={1920}
            height={1088}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-brand-green text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Projeto Oficial de Patrocínio
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.055em] mb-8 italic uppercase">
              {typedHero}
              <span className="ml-1 inline-block text-brand-gold not-italic animate-pulse">▌</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-10 border-l-4 border-brand-gold pl-6">
              Uma plataforma itinerante de experiências que une off-road,
              turismo, aventura, lifestyle e alta produção de conteúdo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projeto"
                className="px-8 py-4 bg-white text-black font-bold uppercase text-sm tracking-widest hover:bg-brand-gold transition-colors text-center"
              >
                Explorar o Projeto
              </a>
              <div className="flex items-center gap-4 px-6 py-4 border border-white/20 text-xs font-bold uppercase tracking-widest">
                Off-road • Turismo • Lifestyle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Projeto */}
      <section id="projeto" className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-8">
                Uma Expedição{" "}
                <span className="text-brand-green">Sem Fronteiras</span>
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                O <strong className="text-white">BRASIL UTV TOUR</strong> nasce
                com uma proposta ambiciosa: transformar alguns dos destinos mais
                marcantes do Brasil em palco para uma experiência itinerante que
                une UTVs, turismo, aventura, natureza, lifestyle, relacionamento
                e produção de conteúdo.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Mais do que realizar passeios off-road, o projeto pretende
                construir uma plataforma capaz de conectar participantes,
                destinos turísticos, marcas e audiência digital.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Expedições Selecionadas",
                    desc: "Percursos técnicos com suporte profissional completo.",
                  },
                  {
                    title: "Ecossistema de Conteúdo",
                    desc: "Produção profissional de foto e vídeo para redes sociais e canais oficiais.",
                  },
                  {
                    title: "Hub de Ativação",
                    desc: "Espaço premium para marcas conectarem-se com um público de alto poder aquisitivo.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                    <div>
                      <span className="font-bold block text-white">
                        {item.title}
                      </span>
                      <span className="text-sm text-white/50">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={projectUtvDunes}
                alt="Detalhe de UTV em dunas de areia"
                className="w-full h-auto object-contain bg-brand-gray rounded-lg"
                width={800}
                height={1008}
                loading="lazy"
              />
              <img
                src={projectUtvValley}
                alt="Caravanas de UTVs atravessando um vale verde no Brasil"
                className="w-full h-auto object-contain bg-brand-gray rounded-lg mt-12"
                width={800}
                height={1008}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conceito */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
              Conceito
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-8">
              Liberdade Sobre Quatro Rodas
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Existe um Brasil que não é descoberto apenas pelas rodovias. Ele
              está nas serras, cachoeiras, dunas, trilhas, praias, cânions,
              fazendas, estradas de terra e pequenos caminhos que levam a
              lugares extraordinários. É esse Brasil que queremos percorrer.
            </p>
            <p className="text-white/80 text-xl font-light leading-relaxed border-t border-white/10 pt-10">
              Não queremos simplesmente colocar um logotipo em um evento.
              Queremos criar situações nas quais{" "}
              <span className="text-brand-gold font-bold">
                a marca faça parte da história vivida pelo participante
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
                Temporada Oficial
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase mt-2">
                Destinos do Tour
              </h2>
            </div>
            <p className="max-w-md md:text-right text-white/40 text-sm italic">
              "Existe um Brasil que não é descoberto apenas pelas rodovias."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: destPirenopolis,
                state: "Goiás",
                title: "Pirenópolis — GO",
                desc: "História, serras, cachoeiras e aventura técnica off-road.",
              },
              {
                image: destJalapao,
                state: "Tocantins",
                title: "Jalapão — TO",
                desc: "Natureza extrema. Dunas, fervedouros e expedições de alto impacto visual.",
              },
              {
                image: destCamboriu,
                state: "Santa Catarina",
                title: "Balneário Camboriú — SC",
                desc: "Lifestyle premium, mar e aventura integrada ao entretenimento.",
              },
            ].map((dest) => (
              <div
                key={dest.title}
                className="group relative overflow-hidden rounded-xl bg-brand-gray"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-auto object-contain opacity-60 group-hover:scale-105 transition-transform duration-700"
                  width={704}
                  height={944}
                  loading="lazy"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                    {dest.state}
                  </span>
                  <h3 className="font-display text-2xl uppercase mt-1">
                    {dest.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-2">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-gray/50 border border-white/5 rounded-2xl">
            <h3 className="font-display text-xl uppercase mb-2">
              Novos Destinos
            </h3>
            <p className="text-white/60 text-sm">
              O circuito poderá receber novas cidades e regiões conforme o
              calendário oficial, condições operacionais, parcerias locais e
              oportunidades comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* Por que patrocinar */}
      <section id="por-que" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
              Por que Patrocinar
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              Mais do que Visibilidade
            </h2>
            <p className="text-white/50 italic">
              Patrocinar o BRASIL UTV TOUR significa participar de uma
              plataforma que combina experiência presencial + conteúdo + turismo
              + relacionamento + exposição de marca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Visibilidade",
                desc: "Presença da marca em materiais oficiais, comunicação digital, sinalização, veículos, estruturas e conteúdos do projeto.",
              },
              {
                title: "Experiência",
                desc: "Inserir produtos e serviços diretamente na jornada dos participantes, de forma natural e relevante.",
              },
              {
                title: "Conteúdo",
                desc: "Produção de fotografias e vídeos em cenários de grande impacto visual, conforme os direitos contratados.",
              },
              {
                title: "Relacionamento",
                desc: "Utilize etapas para receber convidados, parceiros, clientes, influenciadores e colaboradores.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-gold/30 transition-colors"
              >
                <h3 className="font-display text-xl uppercase mb-4 text-brand-gold">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">
              Posicionamento
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Aventura",
                "Liberdade",
                "Tecnologia",
                "Natureza",
                "Performance",
                "Turismo",
                "Experiência",
                "Comunidade",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfil de Público */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
                Perfil de Público
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-8">
                Quem Acompanha a Jornada
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                O projeto pretende atingir um público apaixonado por
                experiências reais, com forte interesse em veículos, natureza,
                viagens e lifestyle.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "UTVs e veículos off-road",
                  "Automóveis e motorsport",
                  "Turismo de aventura",
                  "Viagens e experiências",
                  "Equipamentos e acessórios",
                  "Tecnologia",
                  "Lifestyle",
                  "Natureza",
                  "Gastronomia",
                  "Conteúdo automotivo",
                  "Esportes outdoor",
                  "Audiência digital",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-brand-gray border border-white/5 rounded-2xl">
              <h3 className="font-display text-2xl uppercase mb-4">
                A Audiência Digital
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Cada etapa será planejada para gerar conteúdo antes, durante e
                depois da experiência. O alcance comercial não termina quando
                os veículos deixam a trilha.
              </p>
              <p className="text-white/80 text-lg font-light leading-relaxed border-l-4 border-brand-gold pl-6">
                A experiência continua sendo distribuída por meio de conteúdo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecossistema de Conteúdo */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
              Ecossistema de Conteúdo
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              De cada destino, conteúdo
            </h2>
            <p className="text-white/50">
              O objetivo é fazer com que cada destino se transforme em uma
              experiência e cada experiência se transforme em conteúdo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Pré-evento",
                items: [
                  "Teasers e apresentação do destino",
                  "Preparação dos veículos",
                  "Apresentação de parceiros",
                  "Bastidores e contagem regressiva",
                ],
              },
              {
                phase: "Durante a etapa",
                items: [
                  "Stories e vídeos verticais",
                  "Entrevistas e imagens aéreas",
                  "Ativações de patrocinadores",
                  "Registros da expedição",
                ],
              },
              {
                phase: "Pós-evento",
                items: [
                  "Aftermovie e melhores momentos",
                  "Galerias fotográficas",
                  "Depoimentos e conteúdos dos parceiros",
                  "Divulgação da próxima etapa",
                ],
              },
            ].map((card) => (
              <div
                key={card.phase}
                className="p-8 bg-brand-gray border border-white/5 rounded-2xl"
              >
                <span className="text-brand-gold text-xs font-black uppercase tracking-widest">
                  {card.phase}
                </span>
                <ul className="mt-6 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Instagram", "TikTok", "YouTube", "Facebook", "Site Oficial"].map(
              (platform) => (
                <span
                  key={platform}
                  className="px-5 py-2 bg-white/5 text-xs font-bold uppercase tracking-widest text-white/70 rounded-full"
                >
                  {platform}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Possibilidades de Ativação */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
              Possibilidades de Ativação
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              A Marca Dentro da Jornada
            </h2>
            <p className="text-white/50">
              As marcas poderão participar de maneira muito mais profunda do que
              uma simples aplicação de logotipo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Naming de experiências",
                desc: '"Expedição apresentada por [MARCA]"',
              },
              { title: "UTV oficial", desc: "Veículo personalizado em conteúdos e ações específicas." },
              {
                title: "Checkpoint patrocinado",
                desc: "Pontos estratégicos da rota transformados em experiências de marca.",
              },
              {
                title: "Pit Stop",
                desc: "Área para suporte, exposição, hidratação ou experiência patrocinada.",
              },
              {
                title: "Hospitality",
                desc: "Espaço para relacionamento com convidados e parceiros.",
              },
              {
                title: "Test-drive / demonstração",
                desc: "Quando tecnicamente, legalmente e operacionalmente aplicável.",
              },
              {
                title: "Sampling",
                desc: "Distribuição e experimentação de produtos compatíveis com o evento.",
              },
              {
                title: "Conteúdo branded",
                desc: "Conteúdos planejados para integrar patrocinadores à narrativa da etapa.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-green/30 transition-colors"
              >
                <h3 className="font-display text-lg uppercase mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cotas de Patrocínio */}
      <section id="cotas" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
              Investment Tiers
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              Cotas de Patrocínio
            </h2>
            <p className="text-white/50 italic">
              Valores de referência comercial inicial. Ajustáveis conforme
              número de etapas, entregas contratadas, exclusividade de segmento
              e projeções de público.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Silver */}
            <div className="p-8 bg-brand-gray border border-white/5 rounded-2xl flex flex-col">
              <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-2">
                Cota Silver
              </span>
              <div className="text-3xl font-display text-white mb-6">R$ 60K</div>
              <ul className="text-xs text-white/60 space-y-3 mb-8 flex-grow">
                <li>• Presença da marca em peças selecionadas</li>
                <li>• Site oficial</li>
                <li>• Backdrop coletivo</li>
                <li>• Posts coletivos de parceiros</li>
                <li>• Sinalização de patrocinadores</li>
                <li>• Credenciais institucionais</li>
              </ul>
              <a
                href="#contato"
                className="block w-full text-center py-3 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-full"
              >
                Consultar Detalhes
              </a>
            </div>

            {/* Gold */}
            <div className="p-8 bg-brand-gray border border-white/10 rounded-2xl flex flex-col relative">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-2">
                Cota Gold
              </span>
              <div className="text-3xl font-display text-white mb-6">R$ 120K</div>
              <ul className="text-xs text-white/60 space-y-3 mb-8 flex-grow">
                <li>• Logotipo nos materiais oficiais definidos</li>
                <li>• Presença no site/página oficial</li>
                <li>• Backdrop</li>
                <li>• Sinalização selecionada</li>
                <li>• Conteúdos digitais</li>
                <li>• Espaço para ativação de marca</li>
              </ul>
              <a
                href="#contato"
                className="block w-full text-center py-3 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-full"
              >
                Consultar Detalhes
              </a>
            </div>

            {/* Master */}
            <div className="p-8 bg-brand-gray border-2 border-brand-green rounded-2xl flex flex-col relative scale-100 lg:scale-105 shadow-2xl shadow-brand-green/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                Mais Vendida
              </div>
              <span className="text-brand-green font-bold uppercase tracking-widest text-[10px] mb-2">
                Cota Master
              </span>
              <div className="text-3xl font-display text-white mb-6">R$ 250K</div>
              <ul className="text-xs text-white/60 space-y-3 mb-8 flex-grow">
                <li>• Marca em posição de destaque</li>
                <li>• Presença nas etapas contratadas</li>
                <li>• Backdrops e comunicação digital</li>
                <li>• Conteúdo branded exclusivo</li>
                <li>• Credenciais para convidados VIP</li>
                <li>• Exposição de produtos</li>
              </ul>
              <a
                href="#contato"
                className="block w-full text-center py-3 bg-brand-green text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-full"
              >
                Selecionar Cota
              </a>
            </div>

            {/* Naming Rights */}
            <div className="p-8 bg-brand-gold border border-brand-gold rounded-2xl flex flex-col text-black">
              <span className="text-black/60 font-bold uppercase tracking-widest text-[10px] mb-2">
                Naming Rights
              </span>
              <div className="text-2xl font-display mb-2 uppercase">Institutional</div>
              <div className="text-xl font-bold mb-6">R$ 500.000</div>
              <ul className="text-xs text-black/80 space-y-3 mb-8 flex-grow">
                <li>• "Brasil UTV Tour Apresentado por [MARCA]"</li>
                <li>• Maior hierarquia de exposição</li>
                <li>• Exclusividade total de categoria</li>
                <li>• Veículo oficial personalizado</li>
                <li>• Espaço premium para ativação</li>
              </ul>
              <a
                href="#contato"
                className="block w-full text-center py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-full"
              >
                Falar com Comercial
              </a>
            </div>
          </div>

          {/* Patrocínio por Etapa */}
          <div className="mt-16 p-8 bg-brand-gray/50 border border-white/5 rounded-2xl">
            <h3 className="font-display text-2xl uppercase mb-6">
              Patrocínio por Etapa
            </h3>
            <p className="text-white/60 text-sm mb-8">
              Para empresas que desejam testar o projeto antes de participar de
              toda a temporada.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Master Local", value: "R$ 80.000" },
                { name: "Gold Local", value: "R$ 40.000" },
                { name: "Silver Local", value: "R$ 20.000" },
                { name: "Apoio Local", value: "a partir de R$ 7.500" },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className="p-6 bg-black/30 border border-white/5 rounded-xl"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    {tier.name}
                  </span>
                  <div className="text-xl font-display text-brand-gold mt-2">
                    {tier.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusividade por Segmento */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
                Exclusividade por Segmento
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-8">
                Seu Setor, Sua Categoria
              </h2>
              <p className="text-white/60 leading-relaxed">
                Determinadas cotas poderão oferecer exclusividade comercial em
                categorias específicas, formalizada contratualmente.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Fabricante de UTV",
                "Pneus",
                "Combustíveis",
                "Lubrificantes",
                "Seguros",
                "Instituição financeira",
                "Telecomunicações",
                "Bebidas",
                "Energia",
                "Vestuário",
                "Equipamentos outdoor",
                "Hotelaria",
                "Tecnologia",
                "Transporte",
                "Acessórios automotivos",
              ].map((segment) => (
                <span
                  key={segment}
                  className="px-4 py-2 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/70 hover:border-brand-gold hover:text-brand-gold transition-colors"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contrapartidas Personalizadas */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
              Contrapartidas Personalizadas
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              Parcerias Sob Medida
            </h2>
            <p className="text-white/50">
              Nenhuma grande parceria precisa ficar limitada ao pacote padrão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "[MARCA] Experience",
                desc: "Uma experiência exclusiva dentro de uma etapa.",
              },
              {
                title: "[MARCA] Checkpoint",
                desc: "Checkpoint oficial integrado ao percurso.",
              },
              {
                title: "UTV Hero",
                desc: "Veículo especialmente preparado para produção de conteúdo da marca.",
              },
              {
                title: "Creator Experience",
                desc: "Participação de criadores convidados para gerar conteúdo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-brand-gray border border-white/5 rounded-2xl"
              >
                <h3 className="font-display text-lg uppercase mb-3 text-brand-gold">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregas e Mensuração */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
                Entregas e Mensuração
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-8">
                Resultados Mensuráveis
              </h2>
              <p className="text-white/60 leading-relaxed">
                Após cada etapa, os patrocinadores poderão receber um relatório
                de execução conforme disponibilidade e pacote contratado.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Entregas realizadas",
                "Conteúdos publicados",
                "Alcance e impressões",
                "Visualizações",
                "Engajamento",
                "Registros fotográficos",
                "Menções da marca",
                "Ativações executadas",
                "Links dos conteúdos",
                "Principais resultados",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-brand-gray/50 border border-white/5 rounded-xl"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segurança e Responsabilidade */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
              Segurança e Responsabilidade
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              Aventura com Responsabilidade
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Briefing obrigatório",
              "Equipamentos de proteção",
              "Definição prévia das rotas",
              "Equipe de apoio",
              "Comunicação entre veículos",
              "Veículo de suporte",
              "Plano de emergência",
              "Seguro aplicável",
              "Termos de responsabilidade",
              "Autorizações necessárias",
              "Respeito às comunidades locais",
              "Protocolos ambientais",
            ].map((item) => (
              <div
                key={item}
                className="p-4 bg-brand-gray/50 border border-white/5 rounded-xl flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsabilidade Ambiental + Impacto */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-10 bg-brand-gray border border-white/5 rounded-2xl">
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
                Responsabilidade Ambiental
              </span>
              <h3 className="font-display text-3xl uppercase mt-4 mb-6">
                Explorar Sem Degradar
              </h3>
              <ul className="space-y-3">
                {[
                  "Rotas autorizadas",
                  "Respeito às áreas protegidas",
                  "Não abertura irregular de trilhas",
                  "Gestão de resíduos",
                  "Respeito à fauna",
                  "Relacionamento responsável com comunidades",
                  "Valorização de fornecedores locais",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-brand-gray border border-white/5 rounded-2xl">
              <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
                Impacto nos Destinos
              </span>
              <h3 className="font-display text-3xl uppercase mt-4 mb-6">
                Movimentando a Cadeia Local
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Participantes consomem hotelaria, alimentação, combustível,
                turismo, comércio, serviços, manutenção e entretenimento nos
                destinos visitados.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Secretarias de turismo",
                  "CVBs",
                  "Prefeituras",
                  "Hotéis",
                  "Restaurantes",
                  "Operadores turísticos",
                  "Fornecedores regionais",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white/5 text-xs font-bold uppercase tracking-wider text-white/70 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plano de Expansão */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">
              Plano de Expansão
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-6">
              A Visão do Futuro
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Experience", desc: "Eventos e expedições oficiais." },
              { title: "Content", desc: "Produção audiovisual e conteúdo digital." },
              { title: "Club", desc: "Comunidade e benefícios exclusivos." },
              { title: "Store", desc: "Produtos oficiais do tour." },
              { title: "Awards", desc: "Reconhecimento de participantes, destinos e parceiros." },
              { title: "Festival", desc: "Grande encontro anual da comunidade." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-gold/30 transition-colors"
              >
                <h3 className="font-display text-xl uppercase text-brand-gold mb-2">
                  Brasil UTV Tour {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convite às Marcas */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs">
            Convite às Marcas
          </span>
          <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-8">
            Vamos Construir a Primeira Temporada
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Estamos selecionando empresas que desejem construir conosco a
            primeira temporada do <strong className="text-white">BRASIL UTV TOUR</strong>. Buscamos parceiros que
            compartilhem valores relacionados a liberdade, inovação, aventura,
            performance, natureza, turismo e experiências reais.
          </p>
          <p className="text-white/80 text-xl font-light leading-relaxed border-l-4 border-brand-gold pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0">
            Mais do que vender espaços publicitários, queremos desenvolver{" "}
            <span className="text-brand-gold font-bold">
              parcerias capazes de gerar experiências memoráveis para pessoas e
              resultados mensuráveis para marcas
            </span>
            .
          </p>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contato" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center font-display text-brand-gold italic text-xs">
                  B
                </div>
                <span className="font-display tracking-tighter text-lg uppercase italic">
                  BRASIL <span className="text-brand-gold">UTV</span> TOUR
                </span>
              </div>
              <h4 className="text-3xl font-display uppercase mb-4">
                Vamos Construir Essa Jornada?
              </h4>
              <p className="text-white/40 mb-8 max-w-sm">
                Aventura com responsabilidade. Destinos inesquecíveis.
                Resultados mensuráveis.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-brand-gold">
                    WhatsApp
                  </span>
                  <span className="text-lg font-display tracking-tight">
                    <a href="https://wa.me/5562982483760" target="_blank" rel="noreferrer">
                      (62) 98248-3760
                    </a>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-brand-gold">
                    Website
                  </span>
                  <span className="text-lg font-display tracking-tight">
                    <a href="https://www.brasilutvtour.com.br" target="_blank" rel="noreferrer">
                      www.brasilutvtour.com.br
                    </a>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-brand-gold">
                    Instagram
                  </span>
                  <span className="text-lg font-display tracking-tight">
                    <a href="https://www.instagram.com/brasilutvtour" target="_blank" rel="noreferrer">
                      @brasilutvtour
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                {[
                  { label: "IG", href: "https://www.instagram.com/brasilutvtour" },
                  { label: "YT", href: "https://www.youtube.com/@brasilutvtour" },
                  { label: "WA", href: "https://wa.me/5562982483760" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="size-10 rounded-full border border-white/10 grid place-items-center hover:bg-brand-gold hover:text-black transition-all"
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-brand-gray p-10 rounded-3xl border border-white/5">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="NOME"
                    className="bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-brand-gold outline-none text-white placeholder:text-white/30"
                  />
                  <input
                    type="text"
                    placeholder="EMPRESA"
                    className="bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-brand-gold outline-none text-white placeholder:text-white/30"
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-MAIL COMERCIAL"
                  className="w-full bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-brand-gold outline-none text-white placeholder:text-white/30"
                />
                <select className="w-full bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-brand-gold outline-none text-white/70 appearance-none">
                  <option>COTA DE INTERESSE</option>
                  <option>Naming Rights</option>
                  <option>Cota Master</option>
                  <option>Cota Gold</option>
                  <option>Cota Silver</option>
                  <option>Apoiador Oficial</option>
                </select>
                <textarea
                  placeholder="SUA MENSAGEM"
                  rows={4}
                  className="w-full bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-brand-gold outline-none text-white placeholder:text-white/30"
                />
                <button
                  type="submit"
                  className="w-full py-5 bg-brand-gold text-black font-black uppercase tracking-widest hover:bg-white transition-all"
                >
                  Solicitar Mídia Kit Completo
                </button>
              </form>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/20">
            <p>&copy; 2025 BRASIL UTV TOUR - TODOS OS DIREITOS RESERVADOS.</p>
            <p>AVENTURA COM RESPONSABILIDADE. RESPEITO À NATUREZA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
