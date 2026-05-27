"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Carolina Herrera",
    company: "RetailCL",
    role: "Gerente de Ventas",
    avatar: "CH",
    avatarBg: "#006AFF",
    text: "Desde que implementamos el agente de IA de Trekan, nuestras ventas por WhatsApp aumentaron un 40%. El bot responde al instante, agenda reuniones solo y nunca pierde una consulta. No podríamos imaginar volver atrás.",
    metric: "+40%",
    metricLabel: "Aumento en ventas",
  },
  {
    name: "Marcos Fuentes",
    company: "Clínica Viva",
    role: "Director de Operaciones",
    avatar: "MF",
    avatarBg: "#F4860C",
    text: "Teníamos un equipo de 5 personas contestando llamadas todo el día. Con Trekan, el agente cubre el 80% de las consultas automáticamente. Ahora el equipo se enfoca en casos complejos y la satisfacción del paciente subió notablemente.",
    metric: "80%",
    metricLabel: "Consultas automatizadas",
  },
  {
    name: "Valentina Rojo",
    company: "Agencia Impulsa",
    role: "Fundadora",
    avatar: "VR",
    avatarBg: "#7C3AED",
    text: "Probé la demo en 5 minutos y quedé convencida. La configuración fue rapidísima y el soporte de Trekan es excelente. Mis clientes no saben que están hablando con un agente de IA, la experiencia es totalmente natural.",
    metric: "48h",
    metricLabel: "Tiempo de implementación",
  },
  {
    name: "Diego Morales",
    company: "Inmobiliaria Cima",
    role: "CEO",
    avatar: "DM",
    avatarBg: "#059669",
    text: "Integramos el agente de Trekan con nuestro CRM en 48 horas. Ahora califica leads automáticamente y agenda visitas sin intervención humana. Nuestro equipo comercial cerró un 30% más de operaciones el primer mes.",
    metric: "+30%",
    metricLabel: "Operaciones cerradas",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8 flex flex-col gap-5 hover:shadow-md transition-shadow w-full h-full">
      <span className="text-5xl font-serif leading-none select-none" style={{ color: "#F4860C" }}>&ldquo;</span>
      <p className="text-gray-600 text-base leading-relaxed flex-1 italic">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: t.avatarBg }}
          >
            {t.avatar}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.role}</p>
            <p className="text-gray-500 text-xs font-medium">{t.company}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-lg font-extrabold" style={{ color: "#F4860C" }}>{t.metric}</p>
          <p className="text-xs text-gray-400 mt-0.5">{t.metricLabel}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // drag/swipe state
  const dragStart = useRef<number | null>(null);
  const isDragging = useRef(false);

  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));
  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));

  const onDragStart = (clientX: number) => { dragStart.current = clientX; isDragging.current = false; };
  const onDragEnd = (clientX: number) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
    dragStart.current = null;
  };

  // Reset auto-advance timer on manual interaction
  const [tick, setTick] = useState(0);
  const resetTimer = () => setTick((t) => t + 1);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick, total]);

  const dragHandlers = {
    onMouseDown: (e: React.MouseEvent) => { onDragStart(e.clientX); },
    onMouseMove: (e: React.MouseEvent) => { if (dragStart.current !== null) isDragging.current = true; },
    onMouseUp: (e: React.MouseEvent) => { onDragEnd(e.clientX); resetTimer(); },
    onMouseLeave: (e: React.MouseEvent) => { if (dragStart.current !== null) { onDragEnd(e.clientX); resetTimer(); } },
    onTouchStart: (e: React.TouchEvent) => { onDragStart(e.touches[0].clientX); },
    onTouchEnd: (e: React.TouchEvent) => { onDragEnd(e.changedTouches[0].clientX); resetTimer(); },
    style: { cursor: "grab" } as React.CSSProperties,
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Empresas reales que transformaron su atención con agentes de IA.
          </p>
        </div>

        {/* Desktop: show 2 cards, slide 1 at a time, equal height */}
        <div className="hidden lg:block overflow-hidden select-none" {...dragHandlers}>
          <div
            className="flex items-stretch transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 50}%)` }}
          >
            {[...testimonials, testimonials[0]].map((t, i) => (
              <div key={i} className="w-1/2 shrink-0 px-3 flex">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: single carousel */}
        <div className="lg:hidden overflow-hidden select-none" {...dragHandlers}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0 px-2 sm:px-8">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer(); }}
              aria-label={`Ir a ${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition-colors"
              style={{ backgroundColor: i === current ? "#006AFF" : "#D1D5DB" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
