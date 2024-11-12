import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Ta bort session-cookien
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = NextResponse.redirect(`${baseUrl}/sign-in`);
  response.cookies.set("session", "", { maxAge: -1, path: "/" });
  return response;
}
