import { ReactNode } from "react";
import AuthContextProvider from "../../providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Profile - Nestify",
  description: "View your account information and your booking history.",
};

export default function ProfileLayout({ children }: { children: ReactNode }) {
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
