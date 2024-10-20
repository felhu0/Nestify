import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="flex flex-row">
      <img src="/signupform.png" alt="loginform" className="w-1/2" />
      <form className="flex flex-col w-1/2 px-32 pt-44">
        <p className="text-title-sm-desktop pb-10">Register</p>
        <div className="flex flex-row text-caption-desktop gap-4 pb-4 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="pb-2">
              First Name
            </label>
            <input
              id="email"
              type="email"
              placeholder="First Name"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nema" className="pb-2">
              Last Name
            </label>
            <input
              id="email"
              type="email"
              placeholder="Last Name"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
          </div>
        </div>
        <div className="flex flex-col text-caption-desktop gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="pb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="pb-2">
              Confirm Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Confirm Password"
              required
              className="border-2 rounded-md w-full h-9 cart-outline px-3"
            />
          </div>
        </div>
        <button type="submit" className="btn-primary w-full my-10">
          Create an account
        </button>
        <div className=" text-center text-sm">
          Already a member? <br />
          <Link href="/sign-in" className="underline">
            log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
