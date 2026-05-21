import { Check, Zap, PhoneCall, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-600">
      <Check size={16} className="mt-0.5 shrink-0 text-green-500" />
      {text}
    </li>
  );
}

function PlanCard({
  name,
  price,
  priceUnit,
  features,
  highlighted,
  badge,
  ctaLabel,
  isCustom,
}: {
  name: string;
  price?: string;
  priceUnit?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel: string;
  isCustom?: boolean;
}) {
  return (
    <div
      className={`relative rounded border flex flex-col p-6 transition-shadow ${
        highlighted
          ? "border-[#006AFF] shadow-lg shadow-blue-100"
          : "border-gray-200 shadow-sm hover:shadow-md"
      } ${isCustom ? "bg-gradient-to-br from-[#006AFF] to-[#004FCC] text-white" : "bg-white"}`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge
            className="px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: "#F4860C" }}
          >
            {badge}
          </Badge>
        </div>
      )}

      <div className="mb-5">
        <h4
          className={`text-xs font-bold uppercase tracking-widest mb-2 ${
            isCustom ? "text-white/70" : "text-gray-400"
          }`}
        >
          {name}
        </h4>
        {price ? (
          <div className="flex items-end gap-1">
            <span className={`text-4xl font-extrabold ${isCustom ? "text-white" : "text-gray-900"}`}>
              {price}
            </span>
            {priceUnit && (
              <span className={`text-sm mb-1 ${isCustom ? "text-white/70" : "text-gray-400"}`}>
                {priceUnit}
              </span>
            )}
          </div>
        ) : (
          <div>
            <span className={`text-3xl font-extrabold ${isCustom ? "text-white" : "text-gray-900"}`}>
              A cotizar
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${isCustom ? "text-[#F4860C]" : "text-green-500"}`}
            />
            <span className={isCustom ? "text-white/90" : "text-gray-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/56965231694?text=${encodeURIComponent(`Hola, me interesa el servicio ${name}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center font-bold rounded py-2 text-sm transition-colors ${
          highlighted || isCustom
            ? "text-white hover:opacity-90"
            : "text-[#006AFF] border border-[#006AFF] hover:bg-blue-50"
        }`}
        style={
          highlighted
            ? { backgroundColor: "#006AFF" }
            : isCustom
            ? { backgroundColor: "#F4860C" }
            : {}
        }
      >
        {ctaLabel}
      </a>
    </div>
  );
}

function SectionTitle({
  icon,
  title,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  highlight?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
        style={{ backgroundColor: "#006AFF" }}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900">
        {title}{" "}
        {highlight && (
          <span style={{ color: "#F4860C" }}>{highlight}</span>
        )}
      </h3>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="precios" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Planes para cada etapa de tu negocio
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Sin costos ocultos. Precios no incluyen impuestos aplicables.
          </p>
        </div>

        {/* ===== AGENTES IA ===== */}
        <div className="mb-16">
          <SectionTitle icon={<Zap size={20} />} title="Agentes IA" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <PlanCard
              name="Plan Inicial"
              price="$75"
              priceUnit="USD / mes"
              features={[
                "1 agente",
                "1 habilidad",
                "Hasta 10 conversaciones por día",
                "Opcional: Integración con Google Calendar",
              ]}
              ctaLabel="Comenzar →"
            />
            <PlanCard
              name="Plan Profesional"
              price="$150"
              priceUnit="USD / mes"
              features={[
                "1 agente",
                "2 habilidades",
                "Hasta 100 conversaciones por día",
                "Opcional: Integración con Google Calendar",
              ]}
              highlighted
              badge="Más popular"
              ctaLabel="Comenzar →"
            />
            <PlanCard
              name="Plan Extendido"
              price="$450"
              priceUnit="USD / mes"
              features={[
                "1 agente",
                "Habilidades ilimitadas",
                "Hasta 300 conversaciones por día",
                "Opcional: Integración con Google Calendar",
              ]}
              ctaLabel="Comenzar →"
            />
            <PlanCard
              name="Plan Especial"
              features={[
                "N agentes a medida",
                "Habilidades ilimitadas",
                "Conversaciones ilimitadas",
                "Integraciones ilimitadas",
              ]}
              isCustom
              ctaLabel="Cotizar ahora →"
            />
          </div>

          {/* Considerations */}
          <div className="rounded border border-gray-100 bg-gray-50 p-5 text-sm text-gray-600 space-y-1.5">
            <p className="font-semibold text-gray-800 mb-2">Consideraciones:</p>
            <ul className="space-y-1.5">
              <CheckItem text="Cada habilidad adicional: 20 USD por mes" />
              <CheckItem text="Integraciones con CRM, ERP o software de gestión: 500 USD (pago único)" />
              <CheckItem text="Los precios no incluyen impuestos" />
            </ul>
          </div>
        </div>

        {/* ===== SUPERVISOR IA ===== */}
        <div className="mb-16">
          <SectionTitle icon={<Zap size={20} />} title="Supervisor IA" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded p-6 border flex flex-col justify-between min-h-[220px]"
              style={{
                background: "linear-gradient(135deg, #FFF3E0, #FFF8F0)",
                borderColor: "#FDBA74",
              }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">
                  Supervisor IA
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-gray-900">$0.10</span>
                  <span className="text-sm text-gray-400 mb-1">USD / conversación auditada</span>
                </div>
                <ul className="space-y-2">
                  <CheckItem text="1 agente supervisor" />
                  <CheckItem text="Auditoría por conversación" />
                  <CheckItem text="Reportes de análisis de empatía y NPS" />
                  <CheckItem text="Segmentación de clientes accionable" />
                </ul>
              </div>
              <a
                href={`https://wa.me/56965231694?text=${encodeURIComponent("Hola, me interesa el servicio Supervisor IA")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full sm:w-auto inline-flex items-center justify-center font-bold rounded text-white px-5 py-2 text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#F4860C" }}
              >
                Contratar Supervisor →
              </a>
            </div>
            <div className="rounded border border-gray-100 bg-gray-50 p-5 text-sm text-gray-600 flex flex-col justify-center">
              <p className="font-semibold text-gray-800 mb-3">Consideraciones:</p>
              <ul className="space-y-1.5">
                <CheckItem text="Integraciones con CRM, ERP o software de gestión: 500 USD (pago único)" />
                <CheckItem text="Los precios no incluyen impuestos" />
              </ul>
            </div>
          </div>
        </div>

        {/* ===== CAMPAÑAS ===== */}
        <div>
          <SectionTitle
            icon={<Zap size={20} />}
            title="Campañas"
            highlight="con Respuesta de Agentes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Campaña voz */}
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center text-white"
                  style={{ backgroundColor: "#006AFF" }}
                >
                  <PhoneCall size={20} />
                </div>
                <h4 className="font-bold text-gray-900">Campaña Voz + Agente IA</h4>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$0.30</span>
                <span className="text-sm text-gray-400 mb-1">USD / minuto</span>
              </div>
              <ul className="space-y-2 flex-1">
                <CheckItem text="Llamadas automáticas a tu lista de contactos" />
                <CheckItem text="Agente IA responde en tiempo real a las interacciones" />
                <CheckItem text="Reportes de tasa de éxito y conversación" />
              </ul>
              <a
                href={`https://wa.me/56965231694?text=${encodeURIComponent("Hola, me interesa el servicio Campaña Voz + Agente IA")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center font-bold rounded text-white py-2 text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#006AFF" }}
              >
                Contratar campaña de voz →
              </a>
            </div>

            {/* Campaña WhatsApp */}
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center text-white"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={20} />
                </div>
                <h4 className="font-bold text-gray-900">Campaña WhatsApp + Agente IA</h4>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$0.14</span>
                <span className="text-sm text-gray-400 mb-1">USD / mensaje</span>
              </div>
              <ul className="space-y-2 flex-1">
                <CheckItem text="Mensajes masivos personalizados por WhatsApp" />
                <CheckItem text="Agente IA responde automáticamente las respuestas" />
                <CheckItem text="Seguimiento y reportes de apertura y conversión" />
              </ul>
              <a
                href={`https://wa.me/56965231694?text=${encodeURIComponent("Hola, me interesa el servicio Campaña WhatsApp + Agente IA")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center font-bold rounded text-white py-2 text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#25D366" }}
              >
                Contratar campaña WhatsApp →
              </a>
            </div>
          </div>

          {/* Campaign considerations */}
          <div className="rounded border border-gray-100 bg-gray-50 p-5 text-sm text-gray-600">
            <p className="font-semibold text-gray-800 mb-2">Consideraciones:</p>
            <ul className="space-y-1.5">
              <CheckItem text="Las respuestas de los Agentes IA se contratan como Agente IA con habilidad de respuesta a campaña" />
              <CheckItem text="Integraciones con CRM, ERP o software de gestión: 500 USD (pago único)" />
              <CheckItem text="Los precios no incluyen impuestos" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
