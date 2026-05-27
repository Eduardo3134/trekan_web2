import {
  HeadphonesIcon,
  ShoppingBag,
  BookOpen,
  CalendarCheck,
  Repeat,
  Layers,
  Plug,
  BarChart2,
  Users,
  TrendingUp,
} from "lucide-react";

const agentSkills = [
  {
    icon: <HeadphonesIcon size={22} />,
    title: "Agente de Atención al Cliente",
    description:
      "Responde preguntas frecuentes de manera instantánea y precisa, brindando soporte 24/7 sin colas de espera.",
    badges: ["Archivo base de conocimientos", "Plataforma de tickets", "Otros"],
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Agente de Ventas por Catálogo",
    description:
      "Asesora a tus clientes sobre productos, compara opciones y guía el proceso de compra de forma conversacional.",
    badges: ["Archivo base de conocimientos", "Plataforma de productos", "Otros"],
  },
  {
    icon: <BookOpen size={22} />,
    title: "Agente de Consultoría de Productos/Servicios Complejos",
    description:
      "Explica servicios técnicos complejos con claridad, detecta necesidades y propone la solución más adecuada.",
    badges: ["Archivo base de conocimientos", "Plataforma de calendario", "Otros"],
  },
  {
    icon: <CalendarCheck size={22} />,
    title: "Agente de Calificación y Agendador de Reuniones",
    description:
      "Califica prospectos mediante preguntas estratégicas y agenda reuniones directo en tu calendario de forma autónoma.",
    badges: ["Archivo base de conocimientos", "CRM", "Plataforma de calendario", "Otros"],
  },
  {
    icon: <Repeat size={22} />,
    title: "Agente de Respuesta a Campañas",
    description:
      "Gestiona las respuestas entrantes de tus campañas de voz o WhatsApp, convirtiendo contactos en conversaciones activas.",
    badges: ["Archivo base de conocimientos", "Plantilla Excel o Google Sheets", "Base de datos vía VPN", "Otros"],
  },
];

const supervisorFeatures = [
  {
    icon: <BarChart2 size={22} />,
    title: "Análisis de Empatía",
    description:
      "Evalúa el nivel de empatía en cada conversación, identificando brechas y oportunidades de mejora en la comunicación.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Análisis NPS",
    description:
      "Calcula el Net Promoter Score de forma automática analizando el tono y satisfacción en conversaciones reales.",
  },
  {
    icon: <Users size={22} />,
    title: "Segmentación de Clientes",
    description:
      "Clasifica a tus clientes en segmentos con acciones comerciales y de marketing diferenciadas para cada grupo.",
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="relative py-20 scroll-mt-16 overflow-hidden" style={{ backgroundColor: "#080D1A" }}>
      {/* Top-center blue radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,80,200,0.45) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            IA que trabaja para tu negocio
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Agentes inteligentes que se integran con tus herramientas actuales y
            automatizan los procesos que más tiempo te consumen.
          </p>
        </div>

        {/* ===== AGENTES IA ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-[#006AFF]">
              <Layers size={20} />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Agentes IA</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {agentSkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-[#0F1629] rounded-xl p-6 border border-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="mb-4 text-[#006AFF]">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{skill.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {skill.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium px-2 py-0.5 rounded border"
                      style={{
                      backgroundColor: "rgba(0,106,255,0.15)",
                        borderColor: "rgba(0,106,255,0.3)",
                        color: "#006AFF",
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Multi-skill & CRM banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="rounded-md p-5 border flex items-start gap-4"
              style={{ backgroundColor: "rgba(0,106,255,0.1)", borderColor: "rgba(0,106,255,0.25)", borderRadius: "0.75rem" }}
            >
              <div className="text-[#006AFF] shrink-0">
                <Layers size={18} />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Multi-habilidad</p>
                <p className="text-sm text-gray-400">
                  Todos los agentes pueden combinar múltiples habilidades. Por
                  ejemplo: un agente puede atender clientes{" "}
                  <strong>y</strong> ser consultor de productos/servicios
                  complejos al mismo tiempo.
                </p>
              </div>
            </div>
            <div
              className="rounded-md p-5 border flex items-start gap-4"
              style={{ backgroundColor: "rgba(244,134,12,0.1)", borderColor: "rgba(244,134,12,0.25)", borderRadius: "0.75rem" }}
            >
              <div className="text-[#F4860C] shrink-0">
                <Plug size={18} />
              </div>
              <div>
                <p className="font-bold text-white mb-1">
                  Integración con tu ecosistema
                </p>
                <p className="text-sm text-gray-400">
                  Todos los agentes pueden integrarse con tu <strong>CRM</strong>,{" "}
                  <strong>ERP</strong> o cualquier sistema de gestión que uses
                  actualmente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SUPERVISOR IA ===== */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="text-[#F4860C]">
              <BarChart2 size={20} />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Supervisor IA</h3>
          </div>

          <div
            className="rounded-xl overflow-hidden border border-white/10 shadow-sm"
            style={{
              background: "linear-gradient(135deg, #006AFF 0%, #004FCC 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left description */}
              <div className="p-8 lg:p-12 text-white">
                <h4 className="text-2xl lg:text-3xl font-extrabold mb-4">
                  Supervisa la calidad de todas tus conversaciones
                </h4>
                <p className="text-white/85 text-base leading-relaxed mb-6">
                  El Supervisor IA audita las conversaciones entre
                  tus trabajadores y clientes, entre tus agentes IA y clientes,
                  y genera reportes accionables para tu equipo comercial y de
                  marketing.
                </p>
                <ul className="space-y-3">
                  {[
                    "Monitoreo inmediato de conversaciones al finalizar",
                    "Reportes automáticos de calidad",
                    "Sugerencia de acciones para el cliente",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#F4860C" }}
                      >
                        <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                          <path d="M3 8l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right features */}
              <div className="p-8 lg:p-12 bg-[#0F1629]">
                <div className="space-y-6">
                  {supervisorFeatures.map((feat) => (
                    <div key={feat.title} className="flex items-start gap-4">
                      <div className="text-[#F4860C] shrink-0">
                        {feat.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1">{feat.title}</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
