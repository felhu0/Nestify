import "../globals.css";
import Navbar from "../components/Navbar";
import AuthContextProvider from "../(root)/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
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
