import Loading from "./Loading";
import { User } from "../types/user";
import Link from "next/link";
import { XCircle } from "lucide-react";

function MyAccount({
  user,
  activeBookingCount,
  previousBookingCount,
}: {
  user: User;
  activeBookingCount: number;
  previousBookingCount: number;
}) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex gap-12">
        <div className="flex md:hidden col-span-1">
          <Link href="/">
            <button className="p-1 rounded-full btn-icon-primary text-link">
              <XCircle className="w-6" />
            </button>
          </Link>
        </div>
        <p className="text-body-bold-desktop col-span-2">My account</p>
      </div>
      <div className="flex flex-col items-center gap-2 bg-secondary py-5 p-8 sm:py-7 sm:p-14 shadow-md w-fit rounded-xl">
        <div className="flex flex-row md:flex-col  items-center gap-4">
          <button className="btn-user-secondary">
            <p className="w-12 h-12 text-subheading">
              {getInitials(user.username)}
            </p>
          </button>
          <div className="flex flex-col items-center">
            <p className="text-body-bold-desktop">{user.username}</p>
            <p className="text-caption-sm-desktop">
              Active bookings: {activeBookingCount}
            </p>
            <p className="text-caption-sm-desktop">
              Previous bookings: {previousBookingCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
