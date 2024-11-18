import { NextResponse } from "next/server";

//Handles the logout process by clearing the session cookie and redirecting to the sign-in page.
// Ensures the client's login status is synced with the server by removing the session.

export async function POST() {
 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  if (!baseUrl) {
    console.error("Base URL is not defined in environment variables.");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  
  const response = NextResponse.redirect(`${baseUrl}/sign-in`);
  response.cookies.set("session", "", { maxAge: -1, path: "/" });
  return response;
}
