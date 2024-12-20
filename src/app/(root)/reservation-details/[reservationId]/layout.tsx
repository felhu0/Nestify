import { ReactNode } from "react";
import AuthContextProvider from "../../providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Reservation Details - Nestify",
  description: "Review your reservation details and complete your booking.",
};

export default function ReservationDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthContextProvider>
      <Toaster />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <main className="flex-grow">{children}</main>
      <div className="hidden md:block">
        <Footer />
      </div>
    </AuthContextProvider>
  );
}
