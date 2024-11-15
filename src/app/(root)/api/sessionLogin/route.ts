import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../firebaseAdmin.config";

export async function POST(req: NextRequest) {
    try {
      const { idToken } = await req.json();
  
      if (!idToken) {
        return new NextResponse("ID token is required", { status: 400 });
      }
      // const expiresIn = 60 * 60 * 24 * 5 * 1000; // Exempel på 5 dagar i millisekunder
      const expiresIn = 5 * 60 * 1000; // 5 minutes in milliseconds
      const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
      // console.log("Session cookie created:", sessionCookie);
  
      const response = NextResponse.json({ message: "Session created" });
      response.cookies.set("session", sessionCookie, { httpOnly: true, secure: true, path: "/" });
  
      return response;
    } catch (error) {
      console.error("Failed to create session cookie:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }