"use client";

import { CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PaymentSuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000); // 1000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen text-center items-center justify-center text-third ">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <CircleCheckBig className="w-8 h-8 md:w-10 md:h-10" />
        <p className="text-title-sm-bold-mobile md:text-title-mobile">
          Payment Successful!
        </p>
      </div>
    </div>
  );
};
export default PaymentSuccessPage;
