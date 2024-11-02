"use client";

import { doc, getDoc } from "firebase/firestore";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../../../../firebase.config";
import { useAuth } from "../../providers/AuthProvider";
import Loading from "@/app/components/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { getAuth } from "firebase/auth";
import { getUserById } from "@/lib/user.db";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const ReservationDetailsPage = () => {
  const { reservationId } = useParams();
  const searchParams = useSearchParams();
  const [home, setHome] = useState<HomeType | null>(null);
  const { user } = useAuth();

  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");

  useEffect(() => {
    const fetchHomeDetails = async () => {
      if (reservationId) {
        const docRef = doc(db, "filters", reservationId as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setHome(docSnap.data() as HomeType);
        }
      }
    };
    fetchHomeDetails();
  }, [reservationId]);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = Math.abs(outDate.getTime() - inDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotalAmount = () => {
    if (!home || !guests) return 0;
    const nights = calculateNights();
    return nights * Number(guests) * home.pricePerNight;
  };

  const totalAmount = calculateTotalAmount();

  const handlePayment = async () => {
    const stripe = await stripePromise;
    if (!stripe || !totalAmount || !reservationId || !user) return;

    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userId = currentUser.uid;
      const fetchedUser = await getUserById(userId);

      // Call the API route to create a checkout session and save to Firebase
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalAmount: Number(totalAmount),
          reservationId,
          checkIn,
          checkOut,
          guests,
          userId: fetchedUser?.id,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      if (sessionId) {
        stripe.redirectToCheckout({ sessionId });
      }
    } else {
      console.error("User is not logged in.");
    }
  };

  if (!reservationId) return <Loading />;

  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-14 w-fit">
        <h1 className="text-title-sm-desktop">Your trip</h1>
        <div className="flex gap-10 justify-center">
          <img
            src={home?.imageUrl[0]}
            alt={home?.name}
            className="w-96 h-64 object-cover"
          />
          <span className="flex flex-col justify-between">
            <p className="text-body-bold-desktop">{home?.name}</p>
            <span className="flex flex-col">
              <p className="text-body-desktop">
                Price per night: {home?.pricePerNight} SEK
              </p>
              <p className="text-body-desktop">
                {" "}
                Selected dates: {checkIn} - {checkOut}
              </p>
              <p className="text-body-desktop">Guests: {guests}</p>
            </span>

            <p className="text-body-desktop pt-16">Total: {totalAmount} SEK</p>
          </span>
          <Link href={`/home-details/${reservationId}`} className="ml-10">
            <button className="flex gap-2 text-link items-center btn-icon-secondary">
              <SquarePen className="w-4" />
              Edit
            </button>
          </Link>
        </div>
        {user ? (
          <button onClick={handlePayment} className="btn-primary w-full">
            Request to book
          </button>
        ) : (
          <Link href="/sign-in">
            <button className="btn-primary w-full">Request to book</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ReservationDetailsPage;
