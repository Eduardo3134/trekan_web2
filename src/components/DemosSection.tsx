"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, PhoneCall, Megaphone, Zap } from "lucide-react";

const COUNTRY_CODES = [
  { label: "CL +56", value: "+56" },
  { label: "AR +54", value: "+54" },
  { label: "MX +52", value: "+52" },
  { label: "CO +57", value: "+57" },
  { label: "PE +51", value: "+51" },
  { label: "ES +34", value: "+34" },
  { label: "US +1",  value: "+1"  },
];

function PhoneInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [countryCode, setCountryCode] = useState("+56");
  const [local, setLocal] = useState("");

  const handleLocal = (raw: string) => {
    const digits = raw.replace(/\s/g, "");
    setLocal(digits);
    onChange(countryCode + digits);
  };

  const handleCode = (code: string) => {
    setCountryCode(code);
    onChange(code + local);
  };

  return (
    <div className="flex gap-2">
      <select
        value={countryCode}
        onChange={(e) => handleCode(e.target.value)}
        className="border border-white/10 rounded px-2 py-2 text-sm bg-[#1a2236] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 shrink-0"
        suppressHydrationWarning
      >
        {COUNTRY_CODES.map((c) => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>
      <Input
        placeholder="963129255"
        value={local}
        onChange={(e) => handleLocal(e.target.value)}
        className="rounded flex-1"
        suppressHydrationWarning
      />
    </div>
  );
}

const CAMPAIGN_MESSAGE = (name: string) =>
  `Hola ${name || "[nombre]"}, te estamos llamando para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento.`;

const MIXED_MESSAGE = (name: string) =>
  `Hola ${name || "[nombre]"}, te estamos escribiendo para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento para ti. Si aceptas, te enviaremos un mensaje de WhatsApp con el acceso a la tienda online.`;

function DemoCard({
  icon,
  title,
  description,
  accentColor,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  children?: React.ReactNode;
}) {
  return (
    <Card className="bg-[#0F1629] rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <CardHeader className="pb-3">
        <div
          className="mb-3"
          style={{ color: accentColor }}
        >
          {icon}
        </div>
        <CardTitle className="text-lg font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">{children}</CardContent>
    </Card>
  );
}

function VoiceDemo() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!phone) {
      setError("Ingresa tu número de teléfono.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, demo: "voice" }),
      });
      setSent(true);
    } catch {
      setError("Ocurrió un error. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DemoCard
      icon={<PhoneCall size={22} />}
      title="Demo Voz"
      description="Prueba cómo sería tu agente telefónico. Agrega tu número y recibe una llamada demo de nuestro agente de IA."
      accentColor="#006AFF"
    >
      <div className="space-y-3">
        {sent ? (
          <p className="text-sm text-green-600 font-medium text-center py-2">
            ¡Listo! Recibirás una llamada en breve.
          </p>
        ) : (
          <>
            <PhoneInput value={phone} onChange={setPhone} />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#006AFF" }}
              suppressHydrationWarning
            >
              {loading ? "Enviando..." : "Recibir llamada demo →"}
            </button>
          </>
        )}
      </div>
    </DemoCard>
  );
}

function WhatsAppCampaignDemo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const message = `Hola ${name}, te estamos escribiendo para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento`;

  const handleSubmit = async () => {
    setError("");
    if (!phone.trim()) {
      setError("Ingresa tu número de teléfono.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, demo: "whatsapp_campaign", name: name.trim(), message }),
      });
      setSent(true);
    } catch {
      setError("Ocurrió un error. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DemoCard
      icon={<MessageCircle size={22} />}
      title="Demo Campaña WhatsApp"
      description="Prueba cómo serían tus campañas por WhatsApp. Ingresa tu nombre y número, y visualiza el mensaje que recibirías."
      accentColor="#128C7E"
    >
      <div className="space-y-3">
        {sent ? (
          <p className="text-sm text-green-600 font-medium text-center py-2">
            ¡Listo! Recibirás el mensaje en breve.
          </p>
        ) : (
          <>
            <Input
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded"
              suppressHydrationWarning
            />
            <PhoneInput value={phone} onChange={setPhone} />
            <div className="bg-[#080D1A] border border-white/10 rounded p-3 text-sm text-gray-300 leading-relaxed italic">
              &ldquo;{`Hola ${name || "[nombre]"}, te estamos escribiendo para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento`}&rdquo;
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#128C7E" }}
              suppressHydrationWarning
            >
              {loading ? "Enviando..." : "Enviar mensaje de prueba →"}
            </button>
          </>
        )}
      </div>
    </DemoCard>
  );
}

function VoiceCampaignDemo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!phone.trim()) {
      setError("Ingresa tu número de teléfono.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          demo: "voice_campaign",
          name: name.trim(),
          message: `Hola ${name.trim()}, te estamos llamando para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento`,
        }),
      });
      setSent(true);
    } catch {
      setError("Ocurrió un error. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DemoCard
      icon={<PhoneCall size={22} />}
      title="Demo Campaña Voz"
      description="Prueba cómo serían tus campañas telefónicas. Ingresa tu nombre y número, y escucha el audio que se generaría."
      accentColor="#F4860C"
    >
      <div className="space-y-3">
        {sent ? (
          <p className="text-sm text-green-600 font-medium text-center py-2">
            ¡Listo! Recibirás una llamada en breve.
          </p>
        ) : (
          <>
            <Input
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded"
              suppressHydrationWarning
            />
            <PhoneInput value={phone} onChange={setPhone} />
            <div className="bg-[#080D1A] border border-white/10 rounded p-3 text-sm text-gray-300 leading-relaxed italic">
              &ldquo;{CAMPAIGN_MESSAGE(name)}&rdquo;
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#F4860C" }}
              suppressHydrationWarning
            >
              {loading ? "Enviando..." : "Escuchar audio de prueba →"}
            </button>
          </>
        )}
      </div>
    </DemoCard>
  );
}

function MixedCampaignDemo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!phone) {
      setError("Ingresa tu número de teléfono.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          demo: "voice_whatsapp_campaign",
          name: name.trim(),
          message: `Hola ${name.trim()}, te estamos escribiendo para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento para ti. Si aceptas, te enviaremos un mensaje de WhatsApp con el acceso a la tienda online`,
        }),
      });
      setSent(true);
    } catch {
      setError("Ocurrió un error. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DemoCard
      icon={<Zap size={22} />}
      title="Demo Campaña Mixta (Voz + WhatsApp)"
      description="Combina una llamada inicial con un mensaje de WhatsApp automático. Ingresa tu nombre y número para ver la experiencia completa."
      accentColor="#7C3AED"
    >
      <div className="space-y-3">
        {sent ? (
          <p className="text-sm text-green-600 font-medium text-center py-2">
            ¡Listo! Recibirás la llamada y el mensaje en breve.
          </p>
        ) : (
          <>
            <Input
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded"
              suppressHydrationWarning
            />
            <PhoneInput value={phone} onChange={setPhone} />
            <div className="bg-[#080D1A] border border-white/10 rounded p-3 text-sm text-gray-300 leading-relaxed italic">
              &ldquo;{MIXED_MESSAGE(name)}&rdquo;
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#7C3AED" }}
              suppressHydrationWarning
            >
              {loading ? "Enviando..." : "Probar campaña mixta →"}
            </button>
          </>
        )}
      </div>
    </DemoCard>
  );
}

function CampaignDemo({
  icon,
  title,
  description,
  accentColor,
  getPreview,
  ctaLabel,
  showPhone,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  getPreview: (name: string) => string;
  ctaLabel: string;
  showPhone?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <DemoCard icon={icon} title={title} description={description} accentColor={accentColor}>
      <div className="space-y-3">
        <Input
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded"
          suppressHydrationWarning
        />
        {showPhone && (
          <PhoneInput value={phone} onChange={setPhone} />
        )}
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700 leading-relaxed italic">
          &ldquo;{getPreview(name)}&rdquo;
        </div>
        <button
          className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: accentColor }}
          suppressHydrationWarning
        >
          {ctaLabel}
        </button>
      </div>
    </DemoCard>
  );
}

export default function DemosSection() {
  return (
    <section id="demos" className="relative py-20 bg-[#080D1A] scroll-mt-16 overflow-hidden">
      {/* Top-center blue radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,80,200,0.45) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Experimenta tus Agentes de IA
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Prueba cómo funcionarían tus agentes antes de contratar. Sin tarjeta
            de crédito, sin compromiso.
          </p>
        </div>

        {/* Row 1: Direct agent demos */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Agentes IA <span className="text-[#25D366]">Inbound</span></h3>
          <p className="text-sm text-gray-400">Atienden consultas, ventas y reuniones entrantes 24/7.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Demo WhatsApp */}
          <DemoCard
            icon={<MessageCircle size={22} />}
            title="Demo WhatsApp"
            description="Prueba cómo sería tu agente de WhatsApp respondiendo preguntas, ayudando con ventas y agendando reuniones en tiempo real."
            accentColor="#25D366"
          >
            <a
              href="https://wa.me/56965231694?text=Hola%2C%20quiero%20probar%20la%20Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25D366" }}
            >
              Probar Agente WhatsApp →
            </a>
          </DemoCard>

          {/* Demo Voz */}
          <VoiceDemo />
        </div>

        {/* Row 2: Campaign demos */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Agentes IA para Campañas <span className="text-[#F4860C]">Outbound</span></h3>
          <p className="text-sm text-gray-400">Lanzan campañas masivas por voz y WhatsApp de forma automática y obtienen respuestas parametrizadas.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Campaña WhatsApp */}
          <WhatsAppCampaignDemo />

          {/* Campaña Voz */}
          <VoiceCampaignDemo />
        </div>

        {/* Row 3: Mixed campaign + CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Campaña Mixta */}
          <MixedCampaignDemo />

          {/* CTA Card */}
          <div
            className="rounded p-6 flex flex-col justify-between text-white min-h-[240px]"
            style={{
              background: "linear-gradient(135deg, #006AFF 0%, #0040CC 100%)",
            }}
          >
            <div>
              <Megaphone size={28} className="mb-3 opacity-90" />
              <h3 className="text-xl font-bold mb-2">¿Listo para automatizar?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Diseñamos e implementamos tu agente de IA personalizado en
                menos de 48 horas.
              </p>
            </div>
            <a
              href="#precios"
              className="mt-6 inline-flex items-center justify-center font-bold rounded text-[#006AFF] bg-white hover:bg-gray-100 px-4 py-2 text-sm transition-colors w-full"
            >
              Ver planes y precios →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
