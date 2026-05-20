import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { phone, demo } = await req.json();

  const response = await fetch("https://flow.trekan.co/webhook/demo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, demo }),
  });

  return NextResponse.json({}, { status: response.status });
}
