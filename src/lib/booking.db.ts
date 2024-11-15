import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";
import { CheckoutType } from "@/app/types/booking";

export async function fetchBooking(userId: string): Promise<CheckoutType[] | null> {
  try {
    const bookingCollectionRef = collection(db, "checkouts");
    const q = query(bookingCollectionRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const bookings: CheckoutType[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        bookings.push({
          sessionId: data.sessionId,
          reservationId: data.reservationId,
          homeName: data.homeName,
          checkIn: data.checkIn,
          checkOut: data.checkOut,
          guests: data.guests,
          totalAmount: data.totalAmount,
          userId: data.userId,
          status: data.status,
          createdAt: data.createdAt.toDate(),
          homeImage: data.homeImage, 
        });
      });
      return bookings;
    } else {
      console.log("No booking documents found for user ID:", userId);
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch booking:", error);
    return null;
  }
}