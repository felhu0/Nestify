import "../globals.css";
import { Inter } from "next/font/google";
import AuthContextProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Nestify - Find Your Next Stay",
  description:
    "Explore accommodations with customizable filters, search options, and featured listings. Discover and book your perfect stay on Nestify.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <AuthContextProvider>
          <Toaster />
          <main className="flex-grow">{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
