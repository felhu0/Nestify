import { CheckoutType } from "../types/booking";

const Bookings = ({
  activeBookings,
  previousBookings,
}: {
  activeBookings: CheckoutType[];
  previousBookings: CheckoutType[];
}) => {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex flex-col gap-2 w-full">
        <p className="text-body-bold-desktop">Active bookings</p>
        {activeBookings.length > 0 ? (
          activeBookings.map((booking) => (
            <span key={booking.sessionId} className="flex border-2 rounded-sm">
              <img
                src={booking.homeImage}
                alt="accommodation"
                className="w-28 h-24 object-cover"
              />
              <div className="flex flex-col p-2">
                <p className="text-caption-bold-desktop pb-1">
                  {booking.homeName || "Unknown Home"}
                </p>
                <span className="text-caption-sm-desktop">
                  <p>Check in: {booking.checkIn}</p>
                  <p>Check out: {booking.checkOut}</p>
                  <p>Guests: {booking.guests}</p>
                </span>
              </div>
            </span>
          ))
        ) : (
          <p>No active bookings found</p>
        )}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-body-bold-desktop">Previous bookings</p>
        {previousBookings.length > 0 ? (
          previousBookings.map((booking) => (
            <span key={booking.sessionId} className="flex border-2 rounded-sm">
              <img
                src={booking.homeImage}
                alt="accommodation"
                className="w-28 h-24 object-cover"
              />
              <div className="flex flex-col p-2">
                <p className="text-caption-bold-desktop pb-1">
                  {booking.homeName || "Unknown Home"}
                </p>
                <span className="text-caption-sm-desktop">
                  <p>Check in: {booking.checkIn}</p>
                  <p>Check out: {booking.checkOut}</p>
                  <p>Guests: {booking.guests}</p>
                </span>
              </div>
            </span>
          ))
        ) : (
          <p>No previous bookings found</p>
        )}
      </div>
    </div>
  );
};
export default Bookings;
