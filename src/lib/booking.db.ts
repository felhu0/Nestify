import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { CheckoutType } from "@/app/types/booking";

export async function fetchBooking(userId: string) : Promise<CheckoutType | null> {
    try {
      const bookingDocRef = doc(db, "checkouts", userId);
    const bookingDoc = await getDoc(bookingDocRef);
    if (bookingDoc.exists()) {
        const data = bookingDoc.data();
        if (data) {
          return {
            id: bookingDoc.id,
            sessionId: data.sessionId,
            reservationId: data.reservationId,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
            guests: data.guests,
            totalAmount: data.totalAmount,
            userId: data.userId,
            status: data.status,
            createdAt: data.createdAt.toDate(), // Assuming createdAt is a Firestore Timestamp
          } as CheckoutType;
        }
  }
    return null;
    } catch (error) {
      console.error('Failed to fetch home id:', (error as Error).message);
      return null;
    }
    
  }