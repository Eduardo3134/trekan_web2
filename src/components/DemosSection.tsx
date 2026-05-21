"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, PhoneCall, Megaphone, Zap } from "lucide-react";

const CAMPAIGN_MESSAGE = (name: string) =>
  `Hola ${name || "[nombre]"}, te estamos escribiendo para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento.`;

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
    <Card className="border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <CardHeader className="pb-3">
        <div
          className="w-11 h-11 rounded flex items-center justify-center mb-3 text-white"
          style={{ backgroundColor: accentColor }}
        >
          {icon}
        </div>
        <CardTitle className="text-lg font-bold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-500 text-sm leading-relaxed">
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
    if (!phone.trim()) {
      setError("Ingresa tu número de teléfono.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim(), demo: "voice" }),
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
            <Input
              placeholder="+56 9 1234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#006AFF" }}
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
        body: JSON.stringify({ phone: phone.trim(), demo: "whatsapp_campaign", message }),
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
            />
            <Input
              placeholder="+56 9 1234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded"
            />
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700 leading-relaxed italic">
              &ldquo;{`Hola ${name || "[nombre]"}, te estamos escribiendo para darte una buena noticia, de ahora en adelante compra todos nuestros productos de temporada anterior con un 50% de descuento`}&rdquo;
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#128C7E" }}
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
          phone: phone.trim(),
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
            />
            <Input
              placeholder="+56 9 1234 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded"
            />
            <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700 leading-relaxed italic">
              &ldquo;{CAMPAIGN_MESSAGE(name)}&rdquo;
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ backgroundColor: "#F4860C" }}
            >
              {loading ? "Enviando..." : "Escuchar audio de prueba →"}
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
        />
        {showPhone && (
          <Input
            placeholder="+56 9 1234 5678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded"
          />
        )}
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700 leading-relaxed italic">
          &ldquo;{getPreview(name)}&rdquo;
        </div>
        <button
          className="w-full font-semibold rounded py-2 text-sm text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: accentColor }}
        >
          {ctaLabel}
        </button>
      </div>
    </DemoCard>
  );
}

export default function DemosSection() {
  return (
    <section id="demos" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Experimenta tus Agentes de IA
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Prueba cómo funcionarían tus agentes antes de contratar. Sin tarjeta
            de crédito, sin compromiso.
          </p>
        </div>

        {/* Row 1: Direct agent demos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Campaña WhatsApp */}
          <WhatsAppCampaignDemo />

          {/* Campaña Voz */}
          <VoiceCampaignDemo />
        </div>

        {/* Row 3: Mixed campaign + CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Campaña Mixta */}
          <CampaignDemo
            icon={<Zap size={22} />}
            title="Demo Campaña Mixta (Voz + WhatsApp)"
            description="Combina una llamada inicial con un mensaje de WhatsApp automático. Ingresa tu nombre y número para ver la experiencia completa."
            accentColor="#7C3AED"
            getPreview={MIXED_MESSAGE}
            ctaLabel="Probar campaña mixta →"
            showPhone
          />

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
