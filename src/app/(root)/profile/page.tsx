const ProfilePage = () => {
  return (
    <div className="flex w-screen justify-between px-60 pt-28">
      <div className="flex flex-col gap-10  w-1/2">
        <p className="text-body-bold-desktop">My account</p>
        <div className="flex flex-col items-center gap-1 bg-secondary py-7 p-14 shadow-md w-fit rounded-xl">
          <button className="btn-user-secondary">
            <p className="w-12 h-12 text-subheading">JK</p>
          </button>
          <p className="text-body-bold-desktop">Jennie Kim</p>
          <p className="text-caption-sm-desktop">Active bookings: 2</p>
          <p className="text-caption-sm-desktop">Previous bookings: 4</p>
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-body-bold-desktop">Active bookings</p>
          <span className="flex border-2 rounded-sm">
            <img
              src="/vidar-nordli-mathisen.jpg"
              alt="accommodation"
              className="w-28 h-24 object-cover"
            />
            <div className="flex flex-col p-2">
              <p className="text-caption-bold-desktop pb-1">
                Rustic elegant apartment
              </p>
              <span className="text-caption-sm-desktop">
                <p>Check in: 20/12 - 2024 </p>
                <p>Check out: 25/12 - 2024 </p>
                <p>Guests: 4</p>
              </span>
            </div>
          </span>
          <span className="flex border-2 rounded-sm">
            <img
              src="/vidar-nordli-mathisen.jpg"
              alt="accommodation"
              className="w-28 h-24 object-cover"
            />
            <div className="flex flex-col p-2">
              <p className="text-caption-bold-desktop pb-1">
                Rustic elegant apartment
              </p>
              <span className="text-caption-sm-desktop">
                <p>Check in: 20/12 - 2024 </p>
                <p>Check out: 25/12 - 2024 </p>
                <p>Guests: 4</p>
              </span>
            </div>
          </span>
        </div>
        <div className="flex flex-col gap-2  w-full">
          <p className="text-body-bold-desktop">Previous bookings</p>
          <span className="flex border-2 rounded-sm">
            <img
              src="/vidar-nordli-mathisen.jpg"
              alt="accommodation"
              className="w-28 h-24 object-cover"
            />
            <div className="flex flex-col p-2">
              <p className="text-caption-bold-desktop pb-1">
                Rustic elegant apartment
              </p>
              <span className="text-caption-sm-desktop">
                <p>Check in: 20/12 - 2024 </p>
                <p>Check out: 25/12 - 2024 </p>
                <p>Guests: 4</p>
              </span>
            </div>
          </span>
          <span className="flex border-2 rounded-sm">
            <img
              src="/vidar-nordli-mathisen.jpg"
              alt="accommodation"
              className="w-28 h-24 object-cover"
            />
            <div className="flex flex-col p-2">
              <p className="text-caption-bold-desktop pb-1">
                Rustic elegant apartment
              </p>
              <span className="text-caption-sm-desktop">
                <p>Check in: 20/12 - 2024 </p>
                <p>Check out: 25/12 - 2024 </p>
                <p>Guests: 4</p>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
