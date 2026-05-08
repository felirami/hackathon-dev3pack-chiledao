import {
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Code2,
  ExternalLink,
  FileCheck2,
  Gift,
  Github,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  ListChecks,
  Mail,
  MapPin,
  MessageSquareText,
  Presentation,
  Route,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const links = {
  register: "https://hack.dev3pack.xyz/register?ref=CHILEDAO",
  luma: "https://luma.com/37r54s94",
  whatsapp: "https://chat.whatsapp.com/IU38ZwHD8MIFMrB11WbNxt",
  telegram: "https://t.me/+M1r4vM0jv1BhYzI0",
  faq: "https://hack.dev3pack.xyz/faq",
  dashboard: "https://hack.dev3pack.xyz/member/dashboard",
  submit: "https://hack.dev3pack.xyz/login",
  chiledao: "https://linktr.ee/web3chile",
  discord: "https://discord.com/events/1323417632371900568/1450955254815527085",
  spanishVideo: "https://youtube.com/live/r7Z5YwjRFCc?feature=share",
  felirami: "https://felirami.com",
  farcaster: "https://farcaster.xyz/felirami",
  arcabot: "https://arcabot.ai",
  github: "https://github.com/felirami/hackathon-dev3pack-chiledao",
};

const eventStart = new Date("2026-05-08T14:00:00-04:00").getTime();

type Track = {
  name: string;
  amount: string;
  headline: string;
  detail: string;
  prizes: string[];
  resources: { label: string; href: string }[];
};

const tracks: Track[] = [
  {
    name: "Solana",
    amount: "$10.000",
    headline: "Mejor app general en Solana",
    detail:
      "Construye un proyecto open-source que reimagine pagos, DeFi, mobile apps o colaboración digital sobre Solana.",
    prizes: [
      "1er lugar: $3.000",
      "2do lugar: $2.500",
      "3er lugar: $1.500",
      "Top 10: Ledger por integrante",
      "Top 30: pool de $2.500 para un mes de Claude Pro",
      "Bonus: $500 por mejor uso de x402 en Solana",
    ],
    resources: [
      { label: "Solana Quick Start", href: "https://solana.com/docs/intro/quick-start" },
      { label: "Solana Skills", href: "https://solana.com/skills" },
      { label: "solana.new", href: "https://solana.new/" },
    ],
  },
  {
    name: "LI.FI",
    amount: "$1.000",
    headline: "Mejor UX cross-chain en Solana",
    detail:
      "Usa LI.FI para mejorar onboarding, swaps, bridging, pagos o ejecución de transacciones en una app, workflow o agente.",
    prizes: ["1er lugar: $500", "2do lugar: $300", "3er lugar: $200"],
    resources: [
      { label: "Widget Overview", href: "https://docs.li.fi/widget/overview" },
      { label: "SDK Overview", href: "https://docs.li.fi/sdk/overview" },
      { label: "Agent Skills", href: "https://github.com/lifinance/lifi-agent-skills" },
    ],
  },
  {
    name: "Virtuals",
    amount: "$500",
    headline: "Mejor agente de IA en el mundo físico",
    detail:
      "Extiende agentes de IA hacia entornos reales: automatización, asistencia, colaboración humano-robot o toma de decisiones con contexto físico.",
    prizes: ["1er lugar: $500"],
    resources: [
      { label: "Virtuals", href: "https://virtuals.io/" },
      { label: "Ideas SendAI", href: "https://ideas.sendai.fun/" },
    ],
  },
  {
    name: "Solana Mobile",
    amount: "Seeker phones",
    headline: "Mejor app mobile construida con Solana Mobile",
    detail:
      "Diseñado para apps móviles en Solana usando Solana Mobile Stack, wallet adapters y experiencia nativa en Android.",
    prizes: ["1er lugar: Seeker Phones", "2do lugar: Seeker Phones", "3er lugar: Seeker Phones"],
    resources: [
      {
        label: "Mobile Wallet Adapter",
        href: "https://docs.solanamobile.com/mobile-wallet-adapter/mobile-apps",
      },
      { label: "Expo / React Native", href: "https://docs.expo.dev/" },
      {
        label: "Development setup",
        href: "https://docs.solanamobile.com/get-started/development-setup",
      },
    ],
  },
  {
    name: "ElevenLabs",
    amount: "Scale tier",
    headline: "Mejor integración de ElevenLabs",
    detail:
      "Crea agentes naturales en voz o chat con más de 70 idiomas, baja latencia, knowledge base y herramientas conectadas.",
    prizes: ["Mejor proyecto: 3 meses Scale tier, equivalente a $1.980 por integrante"],
    resources: [
      { label: "Quickstart", href: "https://elevenlabs.io/docs/eleven-agents/quickstart" },
      { label: "Agents Docs", href: "https://elevenlabs.io/docs/conversational-ai/docs/introduction" },
      { label: "API Reference", href: "https://elevenlabs.io/docs/api-reference/introduction" },
    ],
  },
];

const localAgenda = [
  ["14:00", "Llegada y registro de asistentes"],
  ["14:15", "Presentación de hackathon, sponsors y tracks"],
  ["14:30", "Intro a Blockchain, IA y casos de uso"],
  ["15:00", "Actividad de ideas"],
  ["15:15", "Coffee break y formación de equipos"],
  ["15:40", "Entorno de desarrollo y submissions Dev3pack"],
  ["16:00", "Vibecoding: uso de IA para desarrollar"],
  ["16:20", "Hack con mentoría y asistencia técnica"],
];

const globalAgenda = [
  ["Vie 8, 10:00", "Kickoff global"],
  ["Vie 8, 11:00", "Ideación y formación de equipos"],
  ["Sáb 9, 10:00", "Feedback de proyectos"],
  ["Dom 10, 03:00", "Bloque de submissions en Dev3pack"],
  ["Dom 10, 12:00", "Cierre global y ganadores preliminares"],
  ["Mar 12, 10:00", "Global Demo Day"],
];

const resources = [
  ["NoahAI", "Vibe code de A a Z para tu primer proyecto Solana", "https://trynoah.ai/"],
  ["Colosseum Copilot", "Presiona tu idea contra datos de hackathons Solana", "https://colosseum.com/copilot"],
  ["Superteam Ideas", "Ideas listas para builders de DeFi, pagos, consumer y más", "https://superteam.fun/build/ideas"],
  ["Solana Playground", "IDE de navegador para codear y desplegar", "https://beta.solpg.io/"],
  ["Create Solana dApp", "Scaffold de app Solana en un comando", "https://github.com/solana-foundation/create-solana-dapp"],
  ["x402 en Solana", "Pagos internet-native para APIs y agentes", "https://solana.com/x402"],
  ["Phantom Connect", "Integración recomendada de wallet", "https://docs.phantom.com/phantom-connect"],
  ["Awesome Solana AI", "Lista curada de herramientas AI para Solana", "https://github.com/solana-foundation/awesome-solana-ai"],
];

const perks = [
  ["Noah AI", "Acceso gratis con email de hackathon", "https://forms.gle/LNDjeS8YY8kvqb328"],
  ["ElevenLabs", "Un mes Creator plan", "https://discord.com/invite/VnBvbbcdEC"],
  ["QuickNode", "Dos meses del Build plan", "https://quiknode.typeform.com/dev3pack"],
  ["Cursor Pro", "Un año gratis para países elegibles", "https://cursor.com/en-US/students"],
  ["Notion Plus", "Plan education gratuito", "https://www.notion.com/product/notion-for-education"],
  ["GitHub Dev Pack", "Copilot, Azure, MongoDB y más", "https://education.github.com/pack"],
  ["Figma Pro", "Plan Education", "https://www.figma.com/education/apply"],
  ["Firecrawl", "20k créditos y API para estudiantes", "https://www.firecrawl.dev/student-program"],
  ["AWS", "Hasta $100 en créditos", "https://aws.amazon.com/education/awseducate/"],
  ["v0", "$30 en créditos, próximamente", "https://v0.dev/"],
];

const partnerLogos = [
  { name: "Dev3pack", src: "/logos/dev3pack.png", className: "wide" },
  { name: "ChileDAO", src: "/logos/chiledao.png", className: "compact" },
  { name: "NodoZero", src: "/logos/nodozero.png", className: "compact" },
  { name: "MBA USACH", src: "/logos/mba-usach.png", className: "wide" },
  { name: "Red de Mentores MBA USACH", src: "/logos/red-mentores.png", className: "wide" },
  { name: "Build Buddies Santiago", src: "/logos/build-buddies.png", className: "tall" },
];

const ecosystemPartners = [
  "Solana",
  "Vercel",
  "ElevenLabs",
  "USACH",
];

const beginnerSteps = [
  {
    icon: Lightbulb,
    title: "Parte por un problema chico",
    text: "Elige algo concreto: una app de pagos para una feria, un asistente de voz para trámites, un dashboard de comunidad o una herramienta para estudiantes.",
  },
  {
    icon: MessageSquareText,
    title: "Explícaselo a la IA como a un teammate",
    text: "Describe usuario, objetivo, datos, pantallas y restricciones. Pide primero un plan simple, luego código por partes y pruebas rápidas.",
  },
  {
    icon: Wrench,
    title: "Arma un prototipo usable",
    text: "No necesitas una empresa completa. Necesitas una demo que abra, haga una cosa importante y muestre por qué Blockchain o IA aportan algo real.",
  },
  {
    icon: Presentation,
    title: "Cuenta la historia del demo",
    text: "Prepara problema, solución, cómo funciona, qué track compite, qué aprendiste y qué harías si tuvieras una semana más.",
  },
];

const technicalChecklist = [
  {
    icon: Github,
    title: "Repo público",
    text: "Código open-source con instrucciones para instalar, correr y revisar el demo.",
  },
  {
    icon: FileCheck2,
    title: "README claro",
    text: "Problema, solución, stack, track elegido, links, integrantes y limitaciones honestas.",
  },
  {
    icon: TerminalSquare,
    title: "Demo reproducible",
    text: "Deploy, video corto o pasos locales. Evita que el jurado tenga que adivinar.",
  },
  {
    icon: ShieldCheck,
    title: "Web3 sin humo",
    text: "Si usas wallets, APIs, agentes o transacciones, explica qué es real, qué es mock y qué red usa.",
  },
];

const builderModes = [
  ["Nunca programé", "Usa NoahAI, v0 o Cursor para crear pantallas, conectar lógica básica y pedir explicaciones línea por línea."],
  ["Diseño/producto", "Convierte el dolor del usuario en flujo, copy, demo y pitch. Un buen prototipo necesita criterio, no solo código."],
  ["IT/dev", "Asegura arquitectura simple, README sólido, variables de entorno limpias, deploy estable y una integración técnica defendible."],
  ["Founder/comunidad", "Valida si alguien lo usaría, arma narrativa, define métrica de éxito y piensa cómo vive después del domingo."],
];

const submissionChecklist = [
  "Completa tu perfil y equipo en Dev3pack.",
  "Elige uno o más tracks solo si puedes justificar el uso real.",
  "Publica el repo y agrega licencia o nota open-source.",
  "Incluye link de demo, video o capturas en el README.",
  "Documenta qué partes fueron hechas con IA y qué decisiones tomó el equipo.",
  "Sube la entrega en la plataforma antes del bloque oficial de submissions.",
];

const felipeHighlights = [
  "Artista analógico y builder Web3 desde 2021.",
  "Creador de WarpletScan, W2DBot, Hypersubs y proyectos Farcaster.",
  "Hackathon builder en ETHGlobal Buenos Aires 2025 con NeetChat.",
  "Fundador de Arcabot, explorando agentes de IA para trabajo real.",
];

function useCountdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return useMemo(() => {
    const diff = eventStart - now;
    if (diff <= 0) {
      return { done: true, days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
    const days = Math.floor(diff / 86_400_000);
    const hours = Math.floor((diff % 86_400_000) / 3_600_000);
    const minutes = Math.floor((diff % 3_600_000) / 60_000);
    const seconds = Math.floor((diff % 60_000) / 1000);

    return {
      done: false,
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }, [now]);
}

function App() {
  const countdown = useCountdown();

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true" />
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Hackathon Dev3pack x ChileDAO">
            <span className="brand-mark">D3</span>
            <span>Dev3pack x ChileDAO</span>
          </a>
          <div className="nav-links">
            <a href="#cuenta">Cuenta</a>
            <a href="#guia">Guía</a>
            <a href="#agenda">Agenda</a>
            <a href="#tracks">Tracks</a>
            <a href="#recursos">Recursos</a>
            <a href="#entrega">Entrega</a>
            <a href="#perks">Perks</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="eyebrow">
            <CalendarDays size={16} />
            Viernes 8 de mayo de 2026 | USACH + virtual
          </div>
          <div className="hero-logo-lockup" aria-label="Organizan Dev3pack y ChileDAO">
            <img className="hero-dev3pack-logo" src="/logos/dev3pack.png" alt="Dev3pack" />
            <span aria-hidden="true">x</span>
            <img className="hero-chiledao-logo" src="/logos/chiledao.png" alt="ChileDAO" />
          </div>
          <h1>Hackathon IA + Blockchain en Santiago</h1>
          <p className="hero-copy">
            Súmate al hub chileno de la Dev3pack Global Hackathon: arma equipo, aprende
            vibecoding, construye sobre Solana y compite con builders de todo el mundo.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href={links.register} target="_blank" rel="noreferrer">
              Registrarme en Dev3pack <ArrowRight size={18} />
            </a>
            <a className="btn ghost" href={links.luma} target="_blank" rel="noreferrer">
              Cupo presencial <ExternalLink size={17} />
            </a>
          </div>
          <div className="event-strip" aria-label="Información clave">
            <span>
              <MapPin size={17} /> Sala EF402, FAE USACH
            </span>
            <span>
              <Clock3 size={17} /> 14:00 a 18:00 hora Chile
            </span>
            <span>
              <Users size={17} /> Estudiantes y builders de todas las áreas
            </span>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Resumen global">
        <div className="stat">
          <span>30+</span>
          <p>hubs satélite en el mundo</p>
        </div>
        <div className="stat">
          <span>$10K+</span>
          <p>premios cash confirmados</p>
        </div>
        <div className="stat">
          <span>May 12</span>
          <p>Global Demo Day</p>
        </div>
        <div className="stat">
          <span>$2.500+</span>
          <p>perks por estudiante</p>
        </div>
        <div className="countdown">
          <p>{countdown.done ? "La hackathon ya comenzó" : "Cuenta regresiva al hub presencial"}</p>
          <strong>
            {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
          </strong>
        </div>
      </section>

      <section className="section account-section" id="cuenta">
        <div className="account-card">
          <div className="account-icon" aria-hidden="true">
            <Mail size={24} />
          </div>
          <div className="account-copy">
            <p className="kicker">Configuración final de tu cuenta</p>
            <h2>Termina tu perfil para participar oficialmente.</h2>
            <p>
              Para optar a los premios, necesitas completar tu perfil dentro de la
              plataforma de Dev3pack antes de enviar el proyecto.
            </p>
            <ul className="setup-list">
              <li>
                <CheckCircle2 size={16} />
                <span>
                  Busca en tu correo el asunto{" "}
                  <code>Fw: You're in - complete your account setup</code>.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  Revisa SPAM o correos no deseados; a veces el mensaje llega ahí.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  Entra al enlace <code>Complete your setup</code> y completa tus datos.
                </span>
              </li>
            </ul>
            <div className="account-help">
              <strong>¿Problemas?</strong>
              <span>
                Si no encuentras el correo o el enlace falla, ven al Hub el viernes 8 de
                mayo y lo resolvemos juntos en un minuto.
              </span>
            </div>
          </div>
          <a className="btn primary account-button" href={links.dashboard} target="_blank" rel="noreferrer">
            Abrir Dev3pack <ExternalLink size={17} />
          </a>
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="kicker">Por qué ir</p>
          <h2>Un viernes para salir con equipo, idea y primer prototipo.</h2>
        </div>
        <div className="intro-copy">
          <p>
            ChileDAO trae una jornada presencial con soporte humano real, mentoría técnica,
            networking y arranque de hackeo. La competencia sigue virtualmente hasta el
            domingo 10 de mayo para terminar tu entrega.
          </p>
          <div className="quick-links">
            <a href={links.whatsapp} target="_blank" rel="noreferrer">
              Comunidad WhatsApp <ExternalLink size={15} />
            </a>
            <a href={links.telegram} target="_blank" rel="noreferrer">
              Soporte técnico <ExternalLink size={15} />
            </a>
            <a href={links.spanishVideo} target="_blank" rel="noreferrer">
              Video en español <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="section guide-section" id="guia">
        <div className="section-heading split">
          <div>
            <p className="kicker">Guía para llegar sin miedo</p>
            <h2>No tienes que saberlo todo antes de construir.</h2>
          </div>
          <a className="btn small" href={links.spanishVideo} target="_blank" rel="noreferrer">
            Ver intro en español <ExternalLink size={16} />
          </a>
        </div>
        <div className="guide-grid">
          <article className="guide-panel">
            <div className="panel-title">
              <Route size={21} />
              <h3>Si nunca has vibe coded</h3>
            </div>
            <p>
              Vibe coding es construir conversando con herramientas de IA. Tu trabajo
              no es saber cada comando: es explicar bien el problema, probar lo que
              sale y mejorar el prototipo con criterio.
            </p>
            <div className="step-list">
              {beginnerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="step-item" key={step.title}>
                    <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={19} />
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <article className="guide-panel">
            <div className="panel-title">
              <BrainCircuit size={21} />
              <h3>Si vienes de IT o ya programas</h3>
            </div>
            <p>
              La ventaja técnica está en reducir scope, integrar bien y entregar algo
              reproducible. En una hackathon gana el equipo que demuestra valor rápido,
              no el que promete más arquitectura.
            </p>
            <div className="technical-grid">
              {technicalChecklist.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="technical-item" key={item.title}>
                    <Icon size={20} />
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
        <div className="builder-modes" aria-label="Cómo aportar según tu perfil">
          {builderModes.map(([mode, detail]) => (
            <div className="builder-mode" key={mode}>
              <strong>{mode}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section schedule" id="agenda">
        <div className="section-heading">
          <p className="kicker">Agenda</p>
          <h2>Viernes presencial y sprint global hasta el domingo.</h2>
        </div>
        <div className="schedule-grid">
          <article className="schedule-panel">
            <div className="panel-title">
              <MapPin size={20} />
              <h3>Hub Chile | FAE USACH</h3>
            </div>
            <p>Sala EF402, Facultad de Administración y Economía.</p>
            <div className="timeline">
              {localAgenda.map(([time, title]) => (
                <div className="timeline-row" key={time}>
                  <time>{time}</time>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="schedule-panel">
            <div className="panel-title">
              <CalendarDays size={20} />
              <h3>Global Hackathon</h3>
            </div>
            <p>Sesiones y deadlines visibles en Dev3pack, horario America/Santiago.</p>
            <div className="timeline compact">
              {globalAgenda.map(([time, title]) => (
                <div className="timeline-row" key={time}>
                  <time>{time}</time>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section tracks-section" id="tracks">
        <div className="section-heading">
          <p className="kicker">Tracks y premios</p>
          <h2>Escoge el ángulo que más calza con tu equipo.</h2>
        </div>
        <div className="track-grid">
          {tracks.map((track) => (
            <article className="track-card" key={track.name}>
              <div className="track-top">
                <span className="track-icon">
                  <Trophy size={20} />
                </span>
                <strong>{track.amount}</strong>
              </div>
              <h3>{track.name}</h3>
              <p className="track-headline">{track.headline}</p>
              <p>{track.detail}</p>
              <ul>
                {track.prizes.map((prize) => (
                  <li key={prize}>
                    <CheckCircle2 size={15} />
                    {prize}
                  </li>
                ))}
              </ul>
              <div className="mini-links">
                {track.resources.slice(0, 3).map((resource) => (
                  <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="accelerator-callout">
          <GraduationCap size={22} />
          <p>
            Los mejores proyectos también pueden apuntar a Colosseum Accelerator:
            $250.000 en premios y hasta $2M en financiamiento seed para equipos destacados.
          </p>
        </div>
      </section>

      <section className="section resources-section" id="recursos">
        <div className="section-heading split">
          <div>
            <p className="kicker">Recursos</p>
            <h2>Todo para partir rápido sin perderse en pestañas.</h2>
          </div>
          <a className="btn small" href={links.dashboard} target="_blank" rel="noreferrer">
            Dashboard Dev3pack <ExternalLink size={16} />
          </a>
        </div>
        <div className="resource-grid">
          {resources.map(([name, description, href]) => (
            <a className="resource-card" href={href} target="_blank" rel="noreferrer" key={href}>
              <Code2 size={20} />
              <strong>{name}</strong>
              <span>{description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section submission-section" id="entrega">
        <div className="section-heading split">
          <div>
            <p className="kicker">Entrega sin perder puntos fáciles</p>
            <h2>Haz que el jurado entienda tu proyecto en menos de dos minutos.</h2>
          </div>
          <a className="btn small" href={links.submit} target="_blank" rel="noreferrer">
            Subir proyecto <ExternalLink size={16} />
          </a>
        </div>
        <div className="submission-layout">
          <div className="submission-copy">
            <ClipboardCheck size={24} />
            <h3>Checklist antes del domingo</h3>
            <p>
              La entrega ideal no es perfecta; es clara. Si tu demo falla, un buen README
              y un video corto todavía pueden mostrar criterio, aprendizaje y dirección.
            </p>
          </div>
          <ol className="submission-list">
            {submissionChecklist.map((item) => (
              <li key={item}>
                <ListChecks size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section perks-section" id="perks">
        <div className="section-heading">
          <p className="kicker">Perks</p>
          <h2>Créditos y herramientas para la semana de shipping.</h2>
        </div>
        <div className="featured-perk">
          <div>
            <span className="badge">Start here</span>
            <h3>Noah AI gratis para vibecoding</h3>
            <p>
              Crea tu cuenta en NoahAI y completa el formulario con tu email de hackathon
              para desbloquear acceso gratuito.
            </p>
          </div>
          <a className="btn primary" href="https://forms.gle/LNDjeS8YY8kvqb328" target="_blank" rel="noreferrer">
            Activar Noah AI <ArrowRight size={18} />
          </a>
        </div>
        <div className="perk-grid">
          {perks.map(([name, description, href]) => (
            <a className="perk-card" href={href} target="_blank" rel="noreferrer" key={name}>
              <Gift size={18} />
              <strong>{name}</strong>
              <span>{description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section community-section">
        <div className="section-heading">
          <p className="kicker">Comunidad</p>
          <h2>Aprende, conecta y gobierna con ChileDAO.</h2>
        </div>
        <div className="community-grid">
          <article>
            <Handshake size={22} />
            <h3>ChileDAO</h3>
            <p>
              Comunidad para enseñar, conectar, experimentar e impulsar Blockchain e IA
              en Chile, con eventos mensuales y gobernanza abierta.
            </p>
            <a href={links.chiledao} target="_blank" rel="noreferrer">
              Ver links de ChileDAO <ExternalLink size={15} />
            </a>
          </article>
          <article>
            <Blocks size={22} />
            <h3>Partners locales</h3>
            <p>
              NodoZero, USACH, MBA USACH, Red de Mentores y Build Buddies aportan
              infraestructura, mentoría, comunidad y mirada de negocio.
            </p>
            <a href={links.discord} target="_blank" rel="noreferrer">
              Juntas de gobernanza <ExternalLink size={15} />
            </a>
          </article>
          <article>
            <Rocket size={22} />
            <h3>Entrega final</h3>
            <p>
              Mantén tu repo open-source, documenta el demo y sube tu proyecto desde
              la plataforma Dev3pack antes del bloque de submissions.
            </p>
            <a href={links.submit} target="_blank" rel="noreferrer">
              Ir a submissions <ExternalLink size={15} />
            </a>
          </article>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="kicker">FAQ rápido</p>
          <h2>Lo esencial antes de llegar.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>¿Tengo que participar presencialmente?</summary>
            <p>
              No. El hub de Santiago acelera equipos y aprendizaje el viernes 8 de mayo;
              la construcción y entrega continúan virtualmente hasta el domingo 10.
            </p>
          </details>
          <details>
            <summary>¿Qué debo llevar?</summary>
            <p>
              Computador, cargador, cuenta en Dev3pack, una idea tentativa y ganas de
              formar equipo con personas de distintas disciplinas.
            </p>
          </details>
          <details>
            <summary>¿El proyecto debe ser open-source?</summary>
            <p>
              Sí. La competencia premia proyectos abiertos y demostrables, con repo,
              demo y una explicación clara del track elegido.
            </p>
          </details>
          <details>
            <summary>¿Dónde pregunto si me bloqueo?</summary>
            <p>
              Usa el grupo técnico en Telegram, la comunidad de WhatsApp y las mentorías
              del hub. La plataforma también muestra el mentor agent "Solene".
            </p>
          </details>
        </div>
        <a className="btn ghost dark" href={links.faq} target="_blank" rel="noreferrer">
          Ver FAQ oficial <ExternalLink size={16} />
        </a>
      </section>

      <section className="partners" aria-labelledby="partners-title">
        <div className="section-heading split">
          <div>
            <p className="kicker">Organizan y acompañan</p>
            <h2 id="partners-title">El hub chileno conectado al ecosistema global.</h2>
          </div>
          <img className="usach-banner" src="/logos/event-banner.png" alt="Universidad de Santiago de Chile" />
        </div>
        <div className="logo-grid">
          {partnerLogos.map((partner) => (
            <div className={`logo-tile ${partner.className}`} key={partner.name}>
              <img src={partner.src} alt={partner.name} />
            </div>
          ))}
        </div>
        <div className="partner-chip-row" aria-label="Sponsors globales">
          {ecosystemPartners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="host-section" id="host" aria-labelledby="host-title">
        <div className="host-panel">
          <div className="host-copy">
            <p className="kicker">Host local</p>
            <h2 id="host-title">Quién está detrás del hub Chile.</h2>
            <p>
              Soy Luis Felipe Abarca, felirami online: artista, builder y fundador de
              Arcabot. Vengo del arte NFT, comunidades Web3 y herramientas para Farcaster;
              hoy trabajo full-time en agentes de IA y en hacer que más personas puedan
              construir software útil sin esperar permiso.
            </p>
            <p>
              Este hub existe para que estudiantes, devs, diseñadores y personas curiosas
              tengan una entrada real a IA + Blockchain: con mentoría, comunidad, criterio
              técnico y espacio para preguntar cosas básicas sin vergüenza.
            </p>
            <div className="host-links">
              <a href={links.felirami} target="_blank" rel="noreferrer">
                <Globe2 size={16} /> felirami.com
              </a>
              <a href={links.farcaster} target="_blank" rel="noreferrer">
                Farcaster <ExternalLink size={15} />
              </a>
              <a href={links.arcabot} target="_blank" rel="noreferrer">
                Arcabot <Bot size={15} />
              </a>
            </div>
          </div>
          <div className="host-proof">
            <div className="host-mark">
              <Zap size={28} />
              <span>felirami</span>
            </div>
            <ul>
              {felipeHighlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 size={16} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-event">
            <strong>Dev3pack Global Hackathon x ChileDAO</strong>
            <p>Hub Chile, viernes 8 de mayo de 2026, Sala EF402 FAE USACH.</p>
          </div>
          <div className="footer-maker">
            <span>Website hecho por felirami</span>
            <p>
              Developer chileno construyendo en arte, Web3, IA y entornos agénticos.
              Fundador de Arcabot.
            </p>
            <div className="footer-socials">
              <a href={links.felirami} target="_blank" rel="noreferrer">
                <Globe2 size={16} /> felirami.com
              </a>
              <a href={links.farcaster} target="_blank" rel="noreferrer">
                Farcaster <ExternalLink size={15} />
              </a>
              <a href={links.arcabot} target="_blank" rel="noreferrer">
                arcabot.ai <Bot size={15} />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                repo <Github size={15} />
              </a>
            </div>
          </div>
        </div>
        <p className="attribution">Logos y banner desde el kit compartido para el hub Chile.</p>
        <Sparkles className="footer-spark" size={24} aria-hidden="true" />
      </footer>
    </main>
  );
}

export default App;
