"use client";

import { useState } from "react";
import { Check, Zap, PhoneCall, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-300">
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
  showSavings,
}: {
  name: string;
  price?: string;
  priceUnit?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel: string;
  isCustom?: boolean;
  showSavings?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border flex flex-col p-6 transition-shadow ${
        highlighted
          ? "border-[#006AFF] shadow-lg shadow-blue-900/30"
          : "border-white/10 shadow-sm hover:shadow-md"
      } ${isCustom ? "bg-gradient-to-br from-[#006AFF] to-[#004FCC] text-white" : "bg-[#0F1629]"}`}
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
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-1">
              <span className={`text-4xl font-extrabold ${isCustom ? "text-white" : "text-white"}`}>
                {price}
              </span>
              {priceUnit && (
                <span className={`text-sm mb-1 ${isCustom ? "text-white/70" : "text-gray-400"}`}>
                  {priceUnit}
                </span>
              )}
            </div>
            {showSavings && (
              <span className="inline-flex self-start items-center text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2.5 py-0.5">
                ▼ 30% menos
              </span>
            )}
          </div>
        ) : (
          <div>
            <span className={`text-3xl font-extrabold ${isCustom ? "text-white" : "text-white"}`}>
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
            <span className={isCustom ? "text-white/90" : "text-gray-300"}>{f}</span>
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
            : "text-[#006AFF] border border-[#006AFF] hover:bg-blue-900/20"
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
      <div className="text-[#006AFF]">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-white">
        {title}{" "}
        {highlight && (
          <span style={{ color: "#F4860C" }}>{highlight}</span>
        )}
      </h3>
    </div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const isAnnual = billing === "annual";

  const prices = {
    inicial: isAnnual ? "$53" : "$75",
    profesional: isAnnual ? "$105" : "$150",
    extendido: isAnnual ? "$315" : "$450",
  };
  const priceUnit = isAnnual ? "USD / mes · cobrado anual" : "USD / mes";
  const extraSkillPrice = isAnnual ? "14" : "20";

  return (
    <section id="precios" className="relative py-20 bg-[#0A0E1F] scroll-mt-16 overflow-hidden">
      {/* Top-center blue radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,80,200,0.5) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Planes para cada etapa de tu negocio
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            Sin costos ocultos. Precios no incluyen impuestos aplicables.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center bg-[#0F1629] border border-white/10 rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling("monthly")}
              suppressHydrationWarning
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isAnnual ? "bg-[#006AFF] text-white shadow-md" : "text-gray-400 hover:text-white"
              }`}
            >
              Plan Mensual
            </button>
            <button
              onClick={() => setBilling("annual")}
              suppressHydrationWarning
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAnnual ? "bg-[#006AFF] text-white shadow-md" : "text-gray-400 hover:text-white"
              }`}
            >
              Plan Anual
            </button>
          </div>
        </div>

        {/* ===== AGENTES IA ===== */}
        <div className="mb-16">
          <SectionTitle icon={<Zap size={20} />} title="Agentes IA" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <PlanCard
              name="Plan Inicial"
              price={prices.inicial}
              priceUnit={priceUnit}
              features={[
                "1 agente",
                "1 habilidad",
                "Hasta 10 conversaciones por día",
                "Opcional: Integración con Google Calendar",
              ]}
              showSavings={isAnnual}
              ctaLabel="Comenzar →"
            />
            <PlanCard
              name="Plan Profesional"
              price={prices.profesional}
              priceUnit={priceUnit}
              features={[
                "1 agente",
                "2 habilidades",
                "Hasta 100 conversaciones por día",
                "Opcional: Integración con Google Calendar",
              ]}
              highlighted
              badge="Más popular"
              showSavings={isAnnual}
              ctaLabel="Comenzar →"
            />
            <PlanCard
              name="Plan Extendido"
              price={prices.extendido}
              priceUnit={priceUnit}
              features={[
                "1 agente",
                "Habilidades ilimitadas",
                "Hasta 300 conversaciones por día",
                "Opcional: Integración con Google Calendar",
              ]}
              showSavings={isAnnual}
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
          <div className="rounded-xl border border-white/10 bg-[#0A0E1F] p-5 text-sm text-gray-400 space-y-1.5">
            <p className="font-semibold text-gray-200 mb-2">Consideraciones:</p>
            <ul className="space-y-1.5">
              <CheckItem text={`Cada habilidad adicional: ${extraSkillPrice} USD por mes`} />
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
              className="rounded-xl p-6 border flex flex-col justify-between min-h-[220px]"
              style={{
                background: "linear-gradient(135deg, #1a0e05, #120a03)",
                borderColor: "rgba(244,134,12,0.35)",
              }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">
                  Supervisor IA
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-white">$0.10</span>
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
            <div className="rounded-xl border border-white/10 bg-[#0A0E1F] p-5 text-sm text-gray-400 flex flex-col justify-center">
              <p className="font-semibold text-gray-200 mb-3">Consideraciones:</p>
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
            <div className="bg-[#0F1629] rounded-xl border border-white/10 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="text-[#006AFF]">
                  <PhoneCall size={20} />
                </div>
                <h4 className="font-bold text-white">Campaña Voz + Agente IA</h4>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">$0.30</span>
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
            <div className="bg-[#0F1629] rounded-xl border border-white/10 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="text-[#25D366]">
                  <MessageCircle size={20} />
                </div>
                <h4 className="font-bold text-white">Campaña WhatsApp + Agente IA</h4>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">$0.14</span>
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
          <div className="rounded-xl border border-white/10 bg-[#0A0E1F] p-5 text-sm text-gray-400">
            <p className="font-semibold text-gray-200 mb-2">Consideraciones:</p>
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
