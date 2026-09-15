import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: unknown };
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!name) {
    return NextResponse.json({ message: "Name is required." }, { status: 400 });
  }

  return NextResponse.json({ message: `Submitted: ${name}` });
}