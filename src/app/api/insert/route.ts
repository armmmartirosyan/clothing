import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const random = Math.random();
  try {
    const result =
      await sql`INSERT INTO Pets (Name, Owner) VALUES ('Name2', 'Owner2');`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
