"use client";

import { Calendar, CircleUserRound, Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../(root)/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import Loading from "./Loading";

const Navbar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Could not log out", error);
    } finally {
      setLoading(false);
      router.push("/");
    }
  };

  if (loading) return <Loading />;
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex p-4 justify-between border-b-0 sm:border-b-2 shadow-none sm:shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img
              src="/nestify-logo.png"
              alt="Logo"
              className="w-40 h-auto object-contain"
            />
          </Link>
          <div>
            {/* <Link href="/profile">
              <button className="flex gap-1 text-link items-center btn-icon-primary">
                <Calendar className="w-4" />
                profile
              </button>
            </Link> */}
          </div>
          {!user ? (
            <div>
              <Link href="/sign-in">
                <button className="flex gap-1 text-link items-center btn-icon-primary">
                  <CircleUserRound className="w-5" />
                  Log in
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-3">
              <div>
                <Link href="/">
                  <button
                    className="flex gap-1 text-link items-center btn-icon-primary"
                    onClick={handleLogout}
                  >
                    <CircleUserRound className="w-5" />
                    Log out
                  </button>
                </Link>
              </div>
              <Link href="/profile">
                <button className="flex gap-1 text-link items-center btn-icon-primary">
                  <Calendar className="w-4" />
                  My account
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center p-3">
          <div className="flex items-center border rounded-md h-10 w-72 ring-2 ring-primary focus-within:ring-2 focus-within:ring-secondary">
            <Search className="w-5 h-5 ml-2 text-primary" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full p-2 pl-2 focus:outline-none placeholder"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4 ">
        <div className="flex items-center border rounded-md h-11 w-full ring-2 ring-primary focus-within:ring-2 focus-within:ring-secondary">
          <button className="btn-search-primary ml-4">
            <Search className="w-4" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full p-2 pl-2 focus:outline-none placeholder"
          />
        </div>
        {!user ? (
          <div>
            <Link href="/sign-in">
              <button className="flex text-link items-center btn-icon-primary ml-4">
                <CircleUserRound className="w-6" />
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/profile">
              <button className="btn-user-primary ml-4 h-9">
                <span className="text-caption-mobile p-0.5">
                  {getInitials(user.username)}
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
