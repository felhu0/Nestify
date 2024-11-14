import { stripe } from "../../../../lib/stripe";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
      const { totalAmount, reservationId, checkIn, checkOut, guests, userId, homeName, homeImage } = await req.json();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "sek",
              product_data: {
                name: `Reservation for home ${reservationId}`,
                description: `Stay from ${checkIn} to ${checkOut} for ${guests} guest(s)`,
              },
              unit_amount: totalAmount * 100, 
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.nextUrl.origin}/payment-success`,
        cancel_url: `${req.nextUrl.origin}/reservation-details/${reservationId}`,
        client_reference_id: userId, 
        metadata: { reservationId, checkIn, checkOut, guests, totalAmount, userId, homeName, homeImage },
      });
  
    
      // Return session ID to the client
      return NextResponse.json({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      return NextResponse.json({ error: "Unable to create session" }, { status: 500 });
    }
  }
