import {
  ArrowRight,
  Blocks,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  Gift,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Trophy,
  Users,
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

const partners = [
  "Dev3pack",
  "ChileDAO",
  "Solana",
  "Vercel",
  "ElevenLabs",
  "NodoZero",
  "MBA USACH",
  "Build Buddies",
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
            <a href="#agenda">Agenda</a>
            <a href="#tracks">Tracks</a>
            <a href="#recursos">Recursos</a>
            <a href="#perks">Perks</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="eyebrow">
            <CalendarDays size={16} />
            Viernes 8 de mayo de 2026 | USACH + virtual
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
          <span>3.413</span>
          <p>hackers globales inscritos</p>
        </div>
        <div className="stat">
          <span>$10K+</span>
          <p>premios cash confirmados</p>
        </div>
        <div className="stat">
          <span>12</span>
          <p>teléfonos Seeker</p>
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

      <section className="partners" aria-label="Organizaciones participantes">
        {partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
      </section>

      <footer>
        <div>
          <strong>Dev3pack Global Hackathon x ChileDAO</strong>
          <p>Hub Chile, viernes 8 de mayo de 2026, Sala EF402 FAE USACH.</p>
        </div>
        <p className="attribution">
          Foto FAE USACH por Fernando Gomez, CC BY-SA 4.0 vía{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Facultad_de_Administraci%C3%B3n_y_Econom%C3%ADa_USACH.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Wikimedia Commons
          </a>
          .
        </p>
        <Sparkles className="footer-spark" size={24} aria-hidden="true" />
      </footer>
    </main>
  );
}

export default App;
