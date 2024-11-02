"use client";
import { useAuth } from "../(root)/providers/AuthProvider";
import Loading from "./Loading";

function MyAccount() {
  const { user } = useAuth();

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
    <div className="flex flex-col gap-10  w-1/2">
      <p className="text-body-bold-desktop">My account</p>
      <div className="flex flex-col items-center gap-1 bg-secondary py-7 p-14 shadow-md w-fit rounded-xl">
        <button className="btn-user-secondary">
          <p className="w-12 h-12 text-subheading">
            {getInitials(user.username)}
          </p>
        </button>
        <p className="text-body-bold-desktop">{user.username}</p>
        <p className="text-caption-sm-desktop">Active bookings: 2</p>
        <p className="text-caption-sm-desktop">Previous bookings: 4</p>
      </div>
    </div>
  );
}
export default MyAccount;
