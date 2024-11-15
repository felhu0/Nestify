import "../globals.css";
import Navbar from "../components/Navbar";
import AuthContextProvider from "../(root)/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Authentication - Nestify",
  description: "Manage your account and log in to Nestify.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthContextProvider>
          <Toaster />
          <div className="hidden md:block">
            <Navbar />
          </div>
          <main className="flex-grow">{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
