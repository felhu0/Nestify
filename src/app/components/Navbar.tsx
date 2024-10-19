import { Calendar, CircleUserRound, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex p-2 justify-between border-b-2 shadow-sm ">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img
              src="/nestify-logo.png"
              alt="Logo"
              className="w-40 h-auto object-contain"
            />
          </Link>
          <div>
            <Link href="/bookings">
              <button className="flex gap-1 text-link items-center btn-icon-primary">
                <Calendar className="w-4" />
                Bookings
              </button>
            </Link>
          </div>
          <div>
            <Link href="/sign-in">
              <button className="flex gap-1 text-link items-center btn-icon-primary">
                <CircleUserRound className="w-5" />
                Log in
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center p-3 ">
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
    </div>
  );
};
export default Navbar;
