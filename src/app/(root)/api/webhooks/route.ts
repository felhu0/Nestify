import { stripe } from "@/lib/stripe";
import { doc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../firebase.config";
import Stripe from "stripe";

type SessionMetadata = {
    reservationId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalAmount: string;
    userId: string;
    homeName: string;
    homeImage: string;
  };
  
//The endpoint handles Stripe webhooks, verifies payments, and updates booking data in Firestore in real-time.
export const POST = async (req: NextRequest) => {
    try {
        const rawBody = await req.text();
        const signature = req.headers.get("Stripe-Signature") as string;

        const event = stripe.webhooks.constructEvent(
            rawBody,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );

        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log("[webhooks_POST]", session);

            const metadata = session.metadata as unknown as SessionMetadata;

            const { reservationId, checkIn, checkOut, guests, totalAmount, userId, homeName, homeImage } = metadata;

            try {
                const checkoutDoc = doc(db, "checkouts", session.id);
                await setDoc(checkoutDoc, {
                  sessionId: session.id,
                  reservationId,
                  homeName,
                  checkIn,
                  checkOut,
                  guests,
                  totalAmount: parseFloat(totalAmount),
                  userId,
                  status: "completed", 
                  createdAt: new Date(),
                  homeImage
                });
                console.log("Checkout session saved to Firestore:", session.id); 
                return new NextResponse("Order created", { status: 200 });
            } catch (error) {
                console.log("[webhooks_POST] Firestore Error:", error);
                return new NextResponse("Failed to save session to Firestore", { status: 500 });
            }
        } else {
            console.log("Unhandled event type:", event.type);
            return new NextResponse("Unhandled event type", { status: 400 });
        }
    } catch (error) {
        console.log("[webhooks_POST] Signature Verification Error:", error);
        return new NextResponse("Failed to verify Stripe event", { status: 500 });
    }
};
