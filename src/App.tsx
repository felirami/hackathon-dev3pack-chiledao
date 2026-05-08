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
  Languages,
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
  openCode: "https://opencode.ai/",
  openRouter: "https://openrouter.ai/docs",
  hermesAgent: "https://hermes-agent.org/",
  openClaw: "https://github.com/openclaw/openclaw",
  cline: "https://cline.bot/",
  aider: "https://aider.chat/",
  continueDev: "https://www.continue.dev/",
  ollama: "https://ollama.com/",
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
      "Construye un proyecto de código abierto que reimagine pagos, DeFi, apps móviles o colaboración digital sobre Solana.",
    prizes: [
      "1er lugar: $3.000",
      "2do lugar: $2.500",
      "3er lugar: $1.500",
      "10 mejores: Ledger por integrante",
      "30 mejores: fondo de $2.500 para un mes de Claude Pro",
      "Bono: $500 por mejor uso de x402 en Solana",
    ],
    resources: [
      { label: "Guía rápida de Solana", href: "https://solana.com/docs/intro/quick-start" },
      { label: "Cursos Solana", href: "https://solana.com/skills" },
      { label: "solana.new", href: "https://solana.new/" },
    ],
  },
  {
    name: "LI.FI",
    amount: "$1.000",
    headline: "Mejor experiencia entre cadenas en Solana",
    detail:
      "Usa LI.FI para mejorar incorporación, intercambios, puentes, pagos o ejecución de transacciones en una app, flujo de trabajo o agente.",
    prizes: ["1er lugar: $500", "2do lugar: $300", "3er lugar: $200"],
    resources: [
      { label: "Interfaz LI.FI", href: "https://docs.li.fi/widget/overview" },
      { label: "Kit de desarrollo LI.FI", href: "https://docs.li.fi/sdk/overview" },
      { label: "Habilidades para agentes", href: "https://github.com/lifinance/lifi-agent-skills" },
    ],
  },
  {
    name: "Virtuals",
    amount: "$500",
    headline: "Mejor agente de IA en el mundo físico",
    detail:
      "Extiende agentes de IA hacia entornos reales: automatización, asistencia, colaboración humano-máquina o toma de decisiones con contexto físico.",
    prizes: ["1er lugar: $500"],
    resources: [
      { label: "Virtuals", href: "https://virtuals.io/" },
      { label: "Ideas SendAI", href: "https://ideas.sendai.fun/" },
    ],
  },
  {
    name: "Solana Mobile",
    amount: "Teléfonos Seeker",
    headline: "Mejor app móvil construida con Solana Mobile",
    detail:
      "Diseñado para apps móviles en Solana usando la tecnología de Solana Mobile, adaptadores de billetera y experiencia nativa en Android.",
    prizes: ["1er lugar: teléfonos Seeker", "2do lugar: teléfonos Seeker", "3er lugar: teléfonos Seeker"],
    resources: [
      {
        label: "Adaptador móvil de billetera",
        href: "https://docs.solanamobile.com/mobile-wallet-adapter/mobile-apps",
      },
      { label: "Expo y React Native", href: "https://docs.expo.dev/" },
      {
        label: "Configuración de desarrollo",
        href: "https://docs.solanamobile.com/get-started/development-setup",
      },
    ],
  },
  {
    name: "ElevenLabs",
    amount: "Nivel Scale",
    headline: "Mejor integración de ElevenLabs",
    detail:
      "Crea agentes naturales en voz o chat con más de 70 idiomas, baja latencia, base de conocimiento y herramientas conectadas.",
    prizes: ["Mejor proyecto: 3 meses del nivel Scale, equivalente a $1.980 por integrante"],
    resources: [
      { label: "Inicio rápido", href: "https://elevenlabs.io/docs/eleven-agents/quickstart" },
      { label: "Documentación de agentes", href: "https://elevenlabs.io/docs/conversational-ai/docs/introduction" },
      { label: "Referencia de API", href: "https://elevenlabs.io/docs/api-reference/introduction" },
    ],
  },
];

const localAgenda = [
  ["14:00", "Llegada y registro de asistentes"],
  ["14:15", "Presentación de la hackathon, patrocinadores y categorías"],
  ["14:30", "Intro a Blockchain, IA y casos de uso"],
  ["15:00", "Actividad de ideas"],
  ["15:15", "Pausa de café y formación de equipos"],
  ["15:40", "Entorno de desarrollo y entregas en Dev3pack"],
  ["16:00", "Desarrollo con IA: cómo construir con asistentes"],
  ["16:20", "Construcción con mentoría y asistencia técnica"],
];

const globalAgenda = [
  ["Vie 8, 10:00", "Inicio global"],
  ["Vie 8, 11:00", "Ideación y formación de equipos"],
  ["Sáb 9, 10:00", "Retroalimentación de proyectos"],
  ["Dom 10, 03:00", "Bloque de entregas en Dev3pack"],
  ["Dom 10, 12:00", "Cierre global y ganadores preliminares"],
  ["Mar 12, 10:00", "Día global de demostraciones"],
];

const resources = [
  ["NoahAI", "Desarrollo con IA de A a Z para tu primer proyecto Solana", "https://trynoah.ai/"],
  ["Colosseum Copilot", "Presiona tu idea contra datos de hackathons Solana", "https://colosseum.com/copilot"],
  ["Superteam Ideas", "Ideas listas para DeFi, pagos, consumo y más", "https://superteam.fun/build/ideas"],
  ["Solana Playground", "Entorno web para programar y desplegar", "https://beta.solpg.io/"],
  ["Create Solana dApp", "Plantilla inicial de app Solana en un comando", "https://github.com/solana-foundation/create-solana-dapp"],
  ["x402 en Solana", "Pagos nativos de internet para APIs y agentes", "https://solana.com/x402"],
  ["Phantom Connect", "Integración recomendada de billetera", "https://docs.phantom.com/phantom-connect"],
  ["Awesome Solana AI", "Lista curada de herramientas de IA para Solana", "https://github.com/solana-foundation/awesome-solana-ai"],
];

const perks = [
  ["Noah AI", "Acceso gratis con correo de hackathon", "https://forms.gle/LNDjeS8YY8kvqb328"],
  ["ElevenLabs", "Un mes del plan Creator", "https://discord.com/invite/VnBvbbcdEC"],
  ["QuickNode", "Dos meses del plan Build", "https://quiknode.typeform.com/dev3pack"],
  ["Cursor Pro", "Un año gratis para países elegibles", "https://cursor.com/en-US/students"],
  ["Notion Plus", "Plan educativo gratuito", "https://www.notion.com/product/notion-for-education"],
  ["GitHub Dev Pack", "Copilot, Azure, MongoDB y más", "https://education.github.com/pack"],
  ["Figma Pro", "Plan educativo", "https://www.figma.com/education/apply"],
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
    text: "Elige algo concreto: una app de pagos para una feria, un asistente de voz para trámites, un panel de comunidad o una herramienta para estudiantes.",
  },
  {
    icon: MessageSquareText,
    title: "Explícaselo a la IA como a una compañera",
    text: "Describe usuario, objetivo, datos, pantallas y restricciones. Pide primero un plan simple, luego código por partes y pruebas rápidas.",
  },
  {
    icon: Wrench,
    title: "Arma un prototipo usable",
    text: "No necesitas una empresa completa. Necesitas una demostración que abra, haga una cosa importante y muestre por qué Blockchain o IA aportan algo real.",
  },
  {
    icon: Presentation,
    title: "Cuenta la historia de la demostración",
    text: "Prepara problema, solución, cómo funciona, en qué categoría compite, qué aprendiste y qué harías si tuvieras una semana más.",
  },
];

const technicalChecklist = [
  {
    icon: Github,
    title: "Repositorio público",
    text: "Código abierto con instrucciones para instalar, correr y revisar la demostración.",
  },
  {
    icon: FileCheck2,
    title: "README claro",
    text: "Problema, solución, tecnología usada, categoría elegida, enlaces, integrantes y limitaciones honestas.",
  },
  {
    icon: TerminalSquare,
    title: "Demostración reproducible",
    text: "Despliegue, video corto o pasos locales. Evita que el jurado tenga que adivinar.",
  },
  {
    icon: ShieldCheck,
    title: "Web3 sin humo",
    text: "Si usas billeteras, APIs, agentes o transacciones, explica qué es real, qué es simulado y qué red usa.",
  },
];

const builderModes = [
  ["Nunca programé", "Usa NoahAI, v0 o Cursor para crear pantallas, conectar lógica básica y pedir explicaciones línea por línea."],
  ["Diseño/producto", "Convierte el dolor del usuario en flujo, textos, demostración y presentación. Un buen prototipo necesita criterio, no solo código."],
  ["Tecnología/desarrollo", "Asegura arquitectura simple, README sólido, variables de entorno limpias, despliegue estable y una integración técnica defendible."],
  ["Emprendimiento/comunidad", "Valida si alguien lo usaría, arma narrativa, define métrica de éxito y piensa cómo vive después del domingo."],
];

const aiTools = [
  {
    name: "OpenCode",
    cost: "gratis y código abierto",
    fit: "Agente de desarrollo en terminal, editor o escritorio.",
    detail:
      "Buena primera opción técnica: trabaja sobre el repositorio, permite usar modelos gratis o locales y no exige cambiar de editor.",
    href: links.openCode,
  },
  {
    name: "OpenRouter",
    cost: "modelos gratis con límites",
    fit: "Una API para probar muchos modelos sin casarse con un proveedor.",
    detail:
      "No es una herramienta de código abierto; se incluye porque permite usar rutas y variantes gratuitas para aprender y prototipar.",
    href: links.openRouter,
  },
  {
    name: "Ollama",
    cost: "gratis y local",
    fit: "Modelos en tu computador para privacidad y bajo costo.",
    detail:
      "Ideal si el equipo tiene buen hardware y quiere experimentar sin enviar código o datos a servicios externos.",
    href: links.ollama,
  },
  {
    name: "Aider",
    cost: "gratis y código abierto",
    fit: "Programación en pareja desde la terminal con Git.",
    detail:
      "Funciona bien para cambios revisables, pruebas y refactors porque trabaja directamente con commits y archivos reales.",
    href: links.aider,
  },
  {
    name: "Cline",
    cost: "gratis y código abierto",
    fit: "Agente dentro del editor con aprobación humana.",
    detail:
      "Útil para personas que quieren ver cada lectura, edición y comando antes de permitir que la IA actúe.",
    href: links.cline,
  },
  {
    name: "Continue",
    cost: "gratis y código abierto",
    fit: "Asistente configurable para VS Code y JetBrains.",
    detail:
      "Buen puente para equipos mixtos: chat, autocompletado y modelos locales o de API con configuración compartible.",
    href: links.continueDev,
  },
  {
    name: "Hermes Agent",
    cost: "gratis y autoalojado",
    fit: "Agente persistente para equipos con experiencia operando infraestructura.",
    detail:
      "Potente, pero avanzado: úsalo con permisos limitados, claves separadas y revisión humana de acciones importantes.",
    href: links.hermesAgent,
  },
  {
    name: "OpenClaw",
    cost: "gratis y código abierto",
    fit: "Asistente personal autoalojado para automatización.",
    detail:
      "Inclúyelo solo si el equipo entiende los riesgos de agentes con acceso a archivos, navegador, mensajes y credenciales.",
    href: links.openClaw,
  },
];

const submissionChecklist = [
  "Completa tu perfil y equipo en Dev3pack.",
  "Elige una o más categorías solo si puedes justificar el uso real.",
  "Publica el repositorio y agrega licencia o nota de código abierto.",
  "Incluye enlace de demostración, video o capturas en el README.",
  "Documenta qué partes fueron hechas con IA y qué decisiones tomó el equipo.",
  "Sube la entrega en la plataforma antes del bloque oficial de entregas.",
];

const felipeHighlights = [
  "Voluntario de apoyo para la jornada en Chile.",
  "Creador voluntario de este sitio informativo.",
  "Builder de proyectos Web3, Farcaster y agentes de IA.",
  "Disponible para orientar y conectar recursos durante el evento.",
];

const glossary = [
  ["Hackathon", "maratón de creación o competencia de prototipos"],
  ["Global Hackathon", "hackathon global"],
  ["Hub", "sede local o punto de encuentro"],
  ["Builder", "persona que construye proyectos"],
  ["Track", "categoría de competencia"],
  ["Perks", "beneficios, créditos o descuentos"],
  ["Open-source", "código abierto"],
  ["Vibe coding", "desarrollo conversacional con IA"],
  ["Dashboard", "panel de control"],
  ["Submissions", "entregas"],
  ["Quick Start", "guía rápida"],
  ["SDK", "kit de desarrollo de software"],
  ["Agent", "agente"],
  ["Demo", "demostración"],
  ["Deploy", "despliegue"],
  ["README", "archivo de presentación del proyecto"],
  ["API", "interfaz para conectar software"],
  ["App", "aplicación"],
  ["Chat", "conversación digital"],
  ["IDE", "entorno de desarrollo integrado"],
  ["DeFi", "finanzas descentralizadas"],
  ["Software", "programas o sistemas digitales"],
  ["Claude Pro", "plan Pro de Claude"],
  ["GitHub Dev Pack", "paquete de herramientas para desarrolladores"],
  ["Copilot", "asistente de programación"],
  ["Wallet", "billetera digital"],
  ["Mobile", "móvil"],
  ["Scale tier", "nivel Scale"],
  ["Build plan", "plan Build"],
  ["Creator plan", "plan Creator"],
  ["Developer", "desarrollador o desarrolladora"],
  ["Website", "sitio web"],
  ["Cash", "dinero en efectivo"],
  ["Networking", "conexión profesional"],
  ["Blockchain", "cadena de bloques"],
  ["Web3", "web descentralizada con propiedad digital"],
  ["NFT", "token no fungible"],
  ["FAQ", "preguntas frecuentes"],
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
            <a href="#tracks">Categorías</a>
            <a href="#ia-abierta">IA gratis</a>
            <a href="#entrega">Entrega</a>
            <a href="#glosario">Glosario</a>
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
            Súmate a la sede chilena: arma equipo, aprende desarrollo con IA, construye
            sobre Solana y compite con personas de todo el mundo.
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
              <Users size={17} /> Todas las áreas y niveles
            </span>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Resumen global">
        <div className="stat">
          <span>30+</span>
          <p>sedes satélite en el mundo</p>
        </div>
        <div className="stat">
          <span>US$10 mil+</span>
          <p>premios en efectivo confirmados</p>
        </div>
        <div className="stat">
          <span>12 may</span>
          <p>día global de demostraciones</p>
        </div>
        <div className="stat">
          <span>$2.500+</span>
          <p>beneficios por estudiante</p>
        </div>
        <div className="countdown">
          <p>{countdown.done ? "La hackathon ya comenzó" : "Cuenta regresiva a la sede presencial"}</p>
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
                  <code>Fw: You're in - complete your account setup</code>{" "}
                  <em>(traducción: estás dentro, completa la configuración de tu cuenta)</em>.
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
                  Entra al enlace <code>Complete your setup</code>{" "}
                  <em>(traducción: completa tu configuración)</em> y completa tus datos.
                </span>
              </li>
            </ul>
            <div className="account-help">
              <strong>¿Problemas?</strong>
              <span>
                Si no encuentras el correo o el enlace falla, ven a la sede el viernes 8 de
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
            conexiones profesionales y arranque de construcción. La competencia sigue
            virtualmente hasta el domingo 10 de mayo para terminar tu entrega.
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
              <h3>Si nunca has desarrollado con IA</h3>
            </div>
            <p>
              El desarrollo conversacional con IA consiste en construir conversando con
              herramientas de IA. Tu trabajo no es saber cada comando: es explicar bien
              el problema, probar lo que sale y mejorar el prototipo con criterio.
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
              <h3>Si vienes de tecnología o ya programas</h3>
            </div>
            <p>
              La ventaja técnica está en reducir alcance, integrar bien y entregar algo
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
              <h3>Sede Chile | FAE USACH</h3>
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
              <h3>Hackathon global</h3>
            </div>
            <p>Sesiones y fechas límite visibles en Dev3pack, horario de Chile.</p>
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
          <p className="kicker">Categorías y premios</p>
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
            $250.000 en premios y hasta $2M en financiamiento inicial para equipos destacados.
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
            Panel Dev3pack <ExternalLink size={16} />
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

      <section className="section ai-section" id="ia-abierta">
        <div className="section-heading split">
          <div>
            <p className="kicker">IA gratis y abierta</p>
            <h2>Herramientas para construir sin pagar una suscripción.</h2>
          </div>
          <a className="btn small" href={links.openRouter} target="_blank" rel="noreferrer">
            Ver modelos gratis <ExternalLink size={16} />
          </a>
        </div>
        <div className="ai-intro">
          <BrainCircuit size={22} />
          <p>
            Prioriza herramientas gratuitas, de código abierto o con modelos gratis. Si
            usas una API pagada, deja presupuesto y límites claros para no bloquear a
            integrantes sin tarjeta o sin créditos.
          </p>
        </div>
        <div className="ai-tool-grid">
          {aiTools.map((tool) => (
            <a className="ai-tool-card" href={tool.href} target="_blank" rel="noreferrer" key={tool.name}>
              <div className="tool-card-top">
                <Code2 size={20} />
                <span>{tool.cost}</span>
              </div>
              <strong>{tool.name}</strong>
              <p>{tool.fit}</p>
              <small>{tool.detail}</small>
            </a>
          ))}
        </div>
        <div className="ai-guardrail">
          <ShieldCheck size={22} />
          <p>
            Regla de seguridad: no pegues secretos en chats, guarda claves en variables
            de entorno, aprueba comandos destructivos manualmente y revisa cada cambio de
            agentes con acceso a archivos, navegador, mensajes o credenciales.
          </p>
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
            <h3>Lista de verificación antes del domingo</h3>
            <p>
              La entrega ideal no es perfecta; es clara. Si tu demostración falla, un buen
              README y un video corto todavía pueden mostrar criterio, aprendizaje y dirección.
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
          <p className="kicker">Beneficios</p>
          <h2>Créditos y herramientas para la semana de entrega.</h2>
        </div>
        <div className="featured-perk">
          <div>
            <span className="badge">Empieza aquí</span>
            <h3>Noah AI gratis para desarrollo con IA</h3>
            <p>
              Crea tu cuenta en NoahAI y completa el formulario con tu correo de
              hackathon para desbloquear acceso gratuito.
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
              Ver enlaces de ChileDAO <ExternalLink size={15} />
            </a>
          </article>
          <article>
            <Blocks size={22} />
            <h3>Aliados locales</h3>
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
              Mantén tu repositorio como código abierto, documenta la demostración y
              sube tu proyecto desde la plataforma Dev3pack antes del bloque de entregas.
            </p>
            <a href={links.submit} target="_blank" rel="noreferrer">
              Ir a entregas <ExternalLink size={15} />
            </a>
          </article>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="kicker">Preguntas rápidas</p>
          <h2>Lo esencial antes de llegar.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>¿Tengo que participar presencialmente?</summary>
            <p>
              No. La sede de Santiago acelera equipos y aprendizaje el viernes 8 de mayo;
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
            <summary>¿El proyecto debe ser de código abierto?</summary>
            <p>
              Sí. La competencia premia proyectos abiertos y demostrables, con repositorio,
              demostración y una explicación clara de la categoría elegida.
            </p>
          </details>
          <details>
            <summary>¿Dónde pregunto si me bloqueo?</summary>
            <p>
              Usa el grupo técnico en Telegram, la comunidad de WhatsApp y las mentorías
              de la sede local. La plataforma también muestra el agente mentor "Solene".
            </p>
          </details>
        </div>
        <a className="btn ghost dark" href={links.faq} target="_blank" rel="noreferrer">
          Ver preguntas oficiales <ExternalLink size={16} />
        </a>
      </section>

      <section className="section glossary-section" id="glosario">
        <div className="section-heading split">
          <div>
            <p className="kicker">Glosario bilingüe</p>
            <h2>Palabras en inglés que aparecen por marca, evento o documentación.</h2>
          </div>
          <Languages size={30} aria-hidden="true" />
        </div>
        <p className="glossary-note">
          El sitio está escrito en español. Los nombres de marcas se mantienen como marca;
          los términos comunes en inglés se muestran con traducción para que nadie quede fuera.
        </p>
        <div className="glossary-grid">
          {glossary.map(([term, translation]) => (
            <div className="glossary-item" key={term}>
              <strong>{term}</strong>
              <span>{translation}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="partners" aria-labelledby="partners-title">
        <div className="section-heading split">
          <div>
            <p className="kicker">Organizan y acompañan</p>
            <h2 id="partners-title">La sede chilena conectada al ecosistema global.</h2>
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
        <div className="partner-chip-row" aria-label="Patrocinadores globales">
          {ecosystemPartners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="host-section" id="host" aria-labelledby="host-title">
        <div className="host-panel">
          <div className="host-copy">
            <p className="kicker">Aporte voluntario</p>
            <h2 id="host-title">Quién armó este sitio.</h2>
            <p>
              Soy Luis Felipe Abarca, felirami en internet. Voy a participar como
              voluntario y armé este sitio para ordenar la información de la sede Chile
              en español, hacerla más fácil de compartir y ayudar a que más personas
              lleguen preparadas.
            </p>
            <p>
              La organización de la sede corresponde a Dev3pack, ChileDAO y las comunidades
              aliadas del evento. Mi aporte aquí es apoyar desde el sitio, compartir contexto
              y facilitar que estudiantes, desarrolladores, diseñadores y personas curiosas
              encuentren la información sin perderse.
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
            <p>Sede Chile, viernes 8 de mayo de 2026, Sala EF402 FAE USACH.</p>
          </div>
          <div className="footer-maker">
            <span>Sitio web hecho por felirami</span>
            <p>
              Desarrollador chileno construyendo en arte, Web3, IA y entornos agénticos.
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
                Repositorio <Github size={15} />
              </a>
            </div>
          </div>
        </div>
        <p className="attribution">Logos y banner desde el material compartido para la sede Chile.</p>
        <Sparkles className="footer-spark" size={24} aria-hidden="true" />
      </footer>
    </main>
  );
}

export default App;
