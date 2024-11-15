"use client";

import { doc, getDoc } from "firebase/firestore";
import { ArrowBigLeft, SquarePen } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../../../../firebase.config";
import Loading from "@/app/components/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { getAuth } from "firebase/auth";
import { getUserById } from "@/lib/user.db";
import { HomeType } from "@/app/types/home";
import { useAuth } from "../../providers/AuthProvider";
import Link from "next/link";

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
          homeName: home?.name,
          homeImage: home?.imageUrl[0],
        }),
      });

      const { sessionId } = await response.json();

      if (sessionId) {
        stripe.redirectToCheckout({ sessionId });
      }
    } else {
      console.error("User is not logged in.");
    }
  };

  if (!reservationId) return <Loading />;

  return (
    <div className="flex justify-center mt-16 p-1 py-8">
      <div className="absolute top-10 left-2 z-10 block md:hidden">
        <Link href="/">
          <button className="p-1 rounded-full btn-icon-primary text-link ">
            <ArrowBigLeft className="w-6" />
          </button>
        </Link>
      </div>
      <div className="relative flex flex-col gap-2 pt-8 md:p-4 md:gap-14 w-full md:w-fit">
        <h1 className="text-title-sm-bold-mobile md:text-title-sm-desktop pl-8 md:pl-0 pb-2">
          Your trip
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10 md:justify-center items-center md:items-start bg-secondary md:bg-primary p-5 md:p-0">
          <div className="flex gap-3 items-center">
            <img
              src={home?.imageUrl[0]}
              alt={home?.name}
              className="w-24 max-w-xs aspect-square object-cover md:w-96 md:h-64"
            />
            <p className="text-link-bold-mobile md:text-body-bold-desktop block md:hidden items-center">
              {home?.name}
            </p>
          </div>
          <div className="block md:hidden">
            <p className="text-body-mobile md:text-link-bold-mobile">
              Price per night: {home?.pricePerNight} SEK
            </p>
            <p className="text-body-mobile md:text-body-desktop">
              {" "}
              Selected dates: {checkIn} - {checkOut}
            </p>
            <Link href={`/home-details/${reservationId}`} className="ml-10 ">
              <button className="flex gap-2 text-link items-center justify-center btn-outline w-full">
                <SquarePen className="w-4" />
                Edit
              </button>
            </Link>
          </div>

          <span className="flex flex-col justify-between hidden md:block ">
            <p className="text-link-bold-mobile md:text-body-bold-desktop pb-4">
              {home?.name}
            </p>
            <span className="flex flex-col gap-3">
              <p className="text-body-mobile md:text-link-bold-mobile">
                Price per night: {home?.pricePerNight} SEK
              </p>
              <p className="text-body-mobile md:text-link-bold-mobile">
                {" "}
                Selected dates: {checkIn} - {checkOut}
              </p>
            </span>

            <p className="text-body-bold-mobile md:text-link-bold-mobile pt-16">
              Total:{" "}
              <span className="text-link-bold-mobile">{totalAmount} SEK</span>
            </p>
          </span>
          <Link
            href={`/home-details/${reservationId}`}
            className="ml-10 hidden md:block"
          >
            <button className="flex gap-2 text-link items-center btn-outline w-full md:btn-icon-secondary md:w-fit">
              <SquarePen className="w-4" />
              Edit
            </button>
          </Link>
        </div>
        <p className="text-body-bold-mobile md:text-body-desktop pt-28 md:pt-16 block md:hidden text-center">
          Total: <span className="text-body-mobile">{totalAmount} SEK</span>
        </p>
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
