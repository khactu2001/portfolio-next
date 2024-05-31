import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, owner } = await request.json();
  // token
  try {
    const result =
      await sql`INSERT INTO Pets (Name, Owner) VALUES (${name}, ${owner});`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function GET(request: Request) {
  console.log("get", request);
  return NextResponse.json({ message: "Hello World" });
}

export async function PATCH(request: Request) {
  const { name, owner } = await request.json();
}
