import { ArrowRight, PhoneCall, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Blue overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,106,255,0.92) 0%, rgba(0,51,153,0.88) 60%, rgba(0,20,80,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-16">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8 drop-shadow-lg">
          Imagina un{" "}
          <span style={{ color: "#F4860C" }}>Agente de IA</span> a través de{" "}
          <span className="underline decoration-[#F4860C] decoration-4 underline-offset-4">
            WhatsApp
          </span>{" "}
          y por{" "}
          <span className="underline decoration-[#F4860C] decoration-4 underline-offset-4">
            Teléfono
          </span>
          <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90">
            que atienda a tus clientes, que venda por ti y llene tu calendario
            de reuniones.
          </span>
          <span
            className="block mt-4 text-2xl sm:text-3xl font-semibold"
            style={{ color: "#F4860C" }}
          >
            Esto ya es posible con la IA.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Automatiza la atención, las ventas y la gestión de reuniones con
          agentes inteligentes que trabajan 24/7 en los canales que tus clientes
          ya usan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/56963129255?text=Hola%2C%20quiero%20probar%20la%20Demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 text-base rounded shadow-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#F4860C" }}
          >
            <MessageCircle size={18} />
            Probar Demo WhatsApp
          </a>
          <a
            href="#demos"
            className="inline-flex items-center gap-2 border border-white text-white bg-white/10 hover:bg-white/20 font-bold px-8 py-3.5 text-base rounded transition-colors"
          >
            <PhoneCall size={18} />
            Probar Demo Voz
          </a>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 text-white hover:bg-white/10 font-semibold px-6 py-3.5 text-base rounded transition-colors"
          >
            Ver Precios <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
