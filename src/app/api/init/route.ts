import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const random = Math.random();
  try {
    await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
    await sql`INSERT INTO Pets (Name, Owner) VALUES ('Name1', 'Owner1');`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const result = await sql`SELECT * FROM Pets;`;

  return NextResponse.json({ result: result.rows }, { status: 200 });
}
