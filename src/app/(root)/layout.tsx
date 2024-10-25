import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import AuthContextProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthContextProvider>
          <Toaster />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
