import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Film,
  Layers3,
  LineChart,
  Megaphone,
  MousePointer2,
  Play,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";

import logoAlt from "../LOGO.svg";

const orange = "#f26a2e";

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const services = [
  [Search, "Diagnóstico", "Leitura de cenário, posicionamento, oferta, funil e oportunidades."],
  [Layers3, "Branding", "Construção visual, narrativa, consistência e percepção de valor."],
  [Megaphone, "Conteúdo", "Criativos, vídeos, social media, campanhas e ativos comerciais."],
  [LineChart, "Performance", "Mídia paga, testes, mensuração e otimização de campanhas."],
  [Bot, "Automação", "CRM, WhatsApp, fluxos, agentes de IA e ganho operacional."],
  [Rocket, "Growth", "Experimentação, alavancagem e evolução contínua da operação."],
];

const process = [
  ["01", "Análise", "Entendemos mercado, marca, cliente, canais, oferta e gargalos comerciais."],
  ["02", "Estruturação", "Organizamos narrativa, funil, ativos, canais, automações e indicadores."],
  ["03", "Planejamento", "Definimos estratégia, cronograma, prioridades, campanhas e metas."],
  ["04", "Produção", "Criamos conteúdos, vídeos, páginas, criativos, anúncios e materiais de venda."],
  ["05", "Alavancagem", "Publicamos, testamos, medimos, otimizamos e escalamos o que funciona."],
];

const plans = [
  {
    name: "Start",
    price: "R$ 3.000",
    tag: "Para estruturar presença digital com direção.",
    items: ["Planejamento", "8 a 10 artes", "4 a 5 vídeos", "Stories orientados", "Landing page básica"],
  },
  {
    name: "Growth",
    price: "R$ 5.000",
    tag: "Para gerar demanda com conteúdo, tráfego e automação.",
    featured: true,
    items: ["Planejamento", "8 a 10 artes", "8 a 10 vídeos", "LP básica", "Automações", "Tráfego Meta"],
  },
  {
    name: "Performance",
    price: "R$ 8.000",
    tag: "Para marcas que precisam de uma operação completa.",
    items: ["Site completo", "IA e automações", "Tráfego omnichannel", "Conteúdo completo", "Análise de performance"],
  },
];

const cases = [
  {
    client: "Meso Arquitetura",
    type: "Branding / Social / Direção visual",
    desc: "Arquitetura, estética premium e narrativa visual para fortalecer percepção de valor durante o CasaCor.",
    bg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.instagram.com/meso_arquitetura/",
  },
  {
    client: "EnForce Engenharia",
    type: "Manual de marca / Identidade",
    desc: "Sistema visual técnico, institucional e consistente para uma marca de engenharia.",
    bg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    link: "https://www.behance.net/gallery/104431199/Manual-EnForce-Engenharia",
  },
  {
    client: "Grupo Saga",
    type: "Social Media / Campanhas",
    desc: "Planejamento, conteúdo comercial e acompanhamento de equipe de vendas.",
    bg: "https://assets.volkswagen.com/is/image/volkswagenag/Jetta-GLI-19?Zml0PWNyb3AsMSZmbXQ9cG5nJndpZD04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYzRiMA==",
    link: "https://drive.google.com/file/d/1qCwd2i7gpnbpJHKubF2CaDwvQTJZ7xkI/view?usp=sharing",
  },
];

function AltLogo({ className = "" }) {
  return (
    <img
      src={logoAlt}
      alt="Alt Comunicação"
      className={`h-14 w-auto object-contain ${className}`}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <motion.div
        className="fixed left-0 top-0 z-[100] h-1 origin-left"
        style={{ width: progressWidth, backgroundColor: orange }}
      />

      {loading && (
        <motion.div className="fixed inset-0 z-[99] flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <AltLogo className="scale-150 justify-center" />

            <motion.div className="mx-auto mt-12 h-px w-72 overflow-hidden bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2"
                style={{ backgroundColor: orange }}
              />
            </motion.div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/45">
              Branding / Growth / Performance
            </p>
          </motion.div>
        </motion.div>
      )}

      <header className="fixed left-0 right-0 top-0 z-50 bg-black/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-5 py-5 md:px-14">
          <AltLogo />

          <nav className="hidden gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 lg:flex">
            <a href="#problema" className="hover:text-white">Problema</a>
            <a href="#alt" className="hover:text-white">Alt</a>
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#cases" className="hover:text-white">Cases</a>
            <a href="#processo" className="hover:text-white">Processo</a>
            <a href="#planos" className="hover:text-white">Planos</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10">
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            style={{ y: heroY, scale: heroScale }}
          >
            <source
              src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </motion.video>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.88)_42%,rgba(0,0,0,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(242,106,46,0.28),transparent_22%)]" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative mx-auto grid w-full max-w-[1800px] items-end gap-10 px-5 pt-28 md:grid-cols-[1fr_360px] md:px-14"
          >
            <div className="pb-20 md:pb-28">
              <motion.div
                variants={fadeUp}
                className="mb-8 inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur"
              >
                <Sparkles size={14} style={{ color: orange }} />
                Apresentação comercial premium
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-6xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl xl:text-[104px]"
              >
                Marketing com direção comercial.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-xl leading-tight text-white/74 md:text-2xl"
              >
                Branding, conteúdo, tráfego, automação e dados integrados para transformar atenção em faturamento.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#problema"
                  className="group inline-flex items-center justify-center gap-6 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
                >
                  Iniciar pitch
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#cases"
                  className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/10"
                >
                  <Play size={16} />
                  Ver cases
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="hidden pb-28 md:block">
              <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-2xl [transform:perspective(900px)_rotateY(-10deg)_rotateX(7deg)]">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-black/70 p-7">
                  <div className="mb-16 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    <span>Alt</span>
                    <span>2026</span>
                  </div>

                  <Film size={42} style={{ color: orange }} />

                  <h2 className="mt-6 text-4xl font-semibold uppercase leading-none">
                    Sem achismos. Resultados que convertem.
                  </h2>

                  <div className="mt-10 grid grid-cols-2 gap-3">
                    {["Brand", "Growth", "CRM", "IA"].map((item) => (
                      <div
                        key={item}
                        className="border border-white/10 bg-white/[0.04] p-4 text-center text-xs font-semibold uppercase tracking-widest"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <BrandSection
          id="problema"
          kicker="01 — O problema"
          title="A maioria das marcas publica muito, mas cresce pouco."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <PremiumCard
              title="Conteúdo sem estratégia"
              text="Postagens isoladas não sustentam percepção de valor, demanda qualificada nem decisão de compra."
            />
            <PremiumCard
              title="Tráfego sem funil"
              text="Mídia paga sem narrativa, oferta e CRM vira gasto difícil de justificar."
            />
            <PremiumCard
              title="Dados sem decisão"
              text="Relatórios só importam quando viram ação comercial, teste e melhoria contínua."
            />
          </div>
        </BrandSection>

        <BrandSection
          id="alt"
          kicker="02 — O que é a Alt"
          title="Uma agência on demand de branding, performance e automação."
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <motion.div
              variants={fadeUp}
              className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04]"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-45"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.18),rgba(0,0,0,0.95))]" />
              <div className="absolute bottom-8 left-8 right-8">
                <AltLogo />
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
                  Operação modular para marcas que precisam transformar presença digital em crescimento real.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                A Alt conecta estratégia, criação, mídia, dados e automação em uma operação enxuta,
                premium e focada em resultado.
              </p>
              <p>
                Não vendemos apenas peças, posts ou campanhas. Estruturamos uma presença comercial
                capaz de atrair, nutrir, converter e evoluir.
              </p>
              <p className="font-semibold" style={{ color: orange }}>
                Menos achismo. Mais método, estética e performance.
              </p>
            </motion.div>
          </div>
        </BrandSection>

        <BrandSection
          id="servicos"
          kicker="03 — Serviços"
          title="Stack completo para tirar a marca do improviso e colocar em ritmo de crescimento."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {services.map(([Icon, title, text]) => (
              <IconCard key={title} icon={Icon} title={title} text={text} />
            ))}
          </div>
        </BrandSection>

        <section id="cases" className="relative border-y border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[1800px] px-5 md:px-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"
            >
              <div>
                <motion.p
                  variants={fadeUp}
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: orange }}
                >
                  04 — Showcase de projetos
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="max-w-5xl text-4xl font-semibold uppercase leading-[1] tracking-[-0.03em] md:text-6xl"
                >
                  Projetos, campanhas, branding e direção visual desenvolvidos pela Alt.
                </motion.h2>
              </div>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
              >
                <MousePointer2 size={16} />
                Arraste ou role lateralmente
              </motion.div>
            </motion.div>

            <div className="flex snap-x gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cases.map((item, index) => (
                <motion.article
                  key={item.client}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="group relative min-h-[560px] min-w-[82vw] snap-center overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] md:min-w-[680px]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-45 transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.92))]" />

                  <div className="relative flex h-full min-h-[560px] flex-col justify-between p-8 md:p-10">
                    <div className="flex justify-between text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                      <span>0{index + 1}</span>
                      <span>{item.type}</span>
                    </div>

                    <div>
                      <h3 className="max-w-xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] md:text-5xl">
                        {item.client}
                      </h3>

                      <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/72">
                        {item.desc}
                      </p>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-4 border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
                      >
                        Ver projeto
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <BrandSection
          id="processo"
          kicker="05 — Processo"
          title="Uma metodologia clara do diagnóstico à alavancagem."
        >
          <div className="space-y-4">
            {process.map(([num, title, text]) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="group grid gap-5 border border-white/10 bg-white/[0.035] p-6 transition hover:bg-white/[0.07] md:grid-cols-[110px_260px_1fr] md:items-center"
              >
                <div className="text-6xl font-semibold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.28)]">
                  {num}
                </div>
                <h3 className="text-3xl font-semibold uppercase">{title}</h3>
                <p className="text-white/64">{text}</p>
              </motion.div>
            ))}
          </div>
        </BrandSection>

        <BrandSection
          id="planos"
          kicker="06 — Planos comerciais"
          title="Planos claros, com evolução conforme a maturidade do cliente."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-[2rem] border p-7 [transform-style:preserve-3d] ${
                  plan.featured ? "border-orange-500 bg-white/[0.08]" : "border-white/15 bg-white/[0.035]"
                }`}
              >
                {plan.featured && (
                  <span
                    className="absolute -top-4 left-7 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black"
                    style={{ backgroundColor: orange }}
                  >
                    Recomendado
                  </span>
                )}

                <h3 className="text-4xl font-semibold uppercase">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-white/58">{plan.tag}</p>

                <div className="my-7 text-4xl font-semibold">
                  {plan.price}
                  <span className="text-base text-white/55">/mês</span>
                </div>

                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/72">
                      <Check size={17} style={{ color: orange }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </BrandSection>

        <section id="contato" className="relative min-h-[640px] overflow-hidden px-5 py-28 md:px-14 md:py-36">
          <motion.video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-20">
            <source
              src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </motion.video>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_10%,rgba(0,0,0,0.82),rgba(0,0,0,0.4))]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="relative mx-auto grid max-w-[1700px] gap-14 md:grid-cols-[1fr_0.8fr] md:items-end"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: orange }}
              >
                07 — Next step
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="max-w-5xl text-6xl font-semibold uppercase leading-[0.86] tracking-[-0.06em] md:text-8xl"
              >
                Vamos construir o próximo case de sucesso.
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-relaxed text-white/70">
                Receba um diagnóstico gratuito. Vamos analisar o cenário atual e identificar onde estão as oportunidades de crescimento.
              </motion.p>
            </div>

            <motion.form
              variants={fadeUp}
              className="rounded-[2rem] border border-white/15 bg-black/65 p-6 backdrop-blur-2xl"
            >
              {["Nome", "E-mail", "Empresa", "WhatsApp"].map((field) => (
                <input
                  key={field}
                  placeholder={field}
                  className="mb-3 w-full border border-white/15 bg-white/[0.04] px-4 py-4 text-xs font-bold uppercase tracking-[0.16em] outline-none placeholder:text-white/35 focus:border-white"
                />
              ))}

              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center gap-5 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black"
                style={{ backgroundColor: orange }}
              >
                Quero meu diagnóstico
                <ArrowRight size={18} />
              </button>
            </motion.form>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function BrandSection({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative overflow-hidden border-b border-white/10 px-5 py-24 md:px-14 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(242,106,46,0.10),transparent_24%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="relative mx-auto max-w-[1700px]"
      >
        <motion.p
          variants={fadeUp}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: orange }}
        >
          {kicker}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mb-12 max-w-6xl text-4xl font-semibold uppercase leading-[1] tracking-[-0.03em] md:text-6xl"
        >
          {title}
        </motion.h2>

        {children}
      </motion.div>
    </section>
  );
}

function PremiumCard({ title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, rotateX: 3, rotateY: -2 }}
      className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-8 shadow-2xl backdrop-blur [transform-style:preserve-3d]"
    >
      <div className="mb-10 h-2 w-16" style={{ backgroundColor: orange }} />
      <h3 className="text-3xl font-semibold uppercase leading-none">{title}</h3>
      <p className="mt-5 leading-relaxed text-white/62">{text}</p>
    </motion.div>
  );
}

function IconCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group min-h-[260px] rounded-[2rem] border border-white/12 bg-white/[0.035] p-8 transition hover:bg-white/[0.07]"
    >
      <Icon size={36} className="mb-12 transition group-hover:scale-110" style={{ color: orange }} />
      <h3 className="text-3xl font-semibold uppercase leading-none">{title}</h3>
      <p className="mt-5 text-sm leading-relaxed text-white/62">{text}</p>
    </motion.div>
  );
}
