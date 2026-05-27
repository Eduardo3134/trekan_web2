"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo sé que necesito un Agente de IA?",
    answer: (
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Tus prospectos y clientes repiten las mismas preguntas de siempre</li>
        <li>Las personas que tienes atendiendo son capaces de hacer tareas más importantes</li>
        <li>Necesitas atender a tus prospectos o clientes en horarios y días no laborales</li>
      </ul>
    ),
  },
  {
    question: "¿Cuál es el proceso para adquirir?",
    answer: (
      <div className="space-y-3 text-gray-300">
        <ol className="list-decimal list-inside space-y-2">
          <li>Contáctate con nosotros</li>
          <li>Envíanos información básica de tu empresa, junto a las preguntas y respuestas que podrían hacer tus clientes</li>
          <li>Te enviamos un QR para enlazar tu WhatsApp Business</li>
          <li>Te enviamos un script de código para que tú o tu webmaster lo peguen en tu sitio web</li>
        </ol>
        <p className="mt-3 text-white font-medium">
          Y dentro de 24 hrs tendrás tu Agente de IA funcionando con tu información y listo para vender y atender a tus clientes.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cuántas semanas puedo usar la prueba?",
    answer: (
      <p className="text-gray-300">4 días.</p>
    ),
  },
  {
    question: "¿Cómo puedo cancelar mi suscripción?",
    answer: (
      <p className="text-gray-300">En cualquier momento dando aviso.</p>
    ),
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-[#080D1A] overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,80,200,0.45) 0%, transparent 70%)" }} />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Preguntas{" "}
          <span className="text-[#F4860C]">frecuentes</span>
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-12">
          Aclaramos tus dudas
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  suppressHydrationWarning
                >
                  <span className="text-white font-semibold text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="1" x2="6" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <div className="px-6 pb-5 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
