import Bookings from "@/app/components/Bookings";
import MyAccount from "@/app/components/MyAccount";
import { CheckoutType } from "@/app/types/booking";
import { User } from "@/app/types/user";
import { fetchBooking } from "@/lib/booking.db";
import { getUserById } from "@/lib/user.db";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../../../../firebaseAdmin.config";

export default async function ProfilePage({
  params,
}: {
  params: { profileId: string };
}) {
  // Kontrollera sessionscookien
  const sessionCookie = cookies().get("session")?.value;
  if (!sessionCookie) {
    redirect("/sign-in");
  }

  // Verifiera session och hämta användarens ID
  let userId;
  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
    userId = decodedClaims.uid;

    // Om användaren försöker komma åt en annan profil, omdirigera
    if (userId !== params.profileId) {
      redirect("/sign-in");
    }
  } catch (error) {
    console.error("Session verification failed:", error);
    redirect("/sign-in");
  }

  const user: User | null = await getUserById(userId);
  if (!user) {
    return <div>Failed to fetch user data.</div>;
  }

  const bookings: CheckoutType[] = (await fetchBooking(userId)) || [];

  const currentDate = new Date();
  const activeBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) >= currentDate
  );
  const previousBookings = bookings.filter(
    (booking) => new Date(booking.checkOut) < currentDate
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 px-4 md:px-5 lg:px-10 pt-10 pb-10 md:pt-28">
      <div className="flex flex-col items-center w-full">
        <MyAccount
          user={user}
          activeBookingCount={activeBookings.length}
          previousBookingCount={previousBookings.length}
        />
      </div>

      <div className="flex flex-col items-center w-full">
        <Bookings
          activeBookings={activeBookings}
          previousBookings={previousBookings}
        />
      </div>
    </div>
  );
}
