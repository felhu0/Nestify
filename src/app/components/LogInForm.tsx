import Link from "next/link";

const LogInForm = () => {
  return (
    <div className="flex flex-row">
      <img src="/loginform.png" alt="loginform" className="w-1/2" />
      <form className="flex flex-col w-1/2 px-32 pt-44">
        <p className="text-title-sm-desktop pb-10">Log in</p>
        <div className="flex flex-col gap-8 text-caption-desktop">
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
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </div>
        <div className="mt-8 text-center text-sm">
          Not a member? <br />
          <Link href="/sign-up" className="underline">
            create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
