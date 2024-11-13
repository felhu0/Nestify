import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  // Ta bort session-cookien
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  if (!baseUrl) {
    console.error("Base URL is not defined in environment variables.");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  
  const response = NextResponse.redirect(`${baseUrl}/sign-in`);
  response.cookies.set("session", "", { maxAge: -1, path: "/" });
  return response;
}
