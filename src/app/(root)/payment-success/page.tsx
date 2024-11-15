import PaymentSuccess from "@/app/components/PaymentSuccess";

export const metadata = {
  title: "Payment Successful - Nestify",
  description:
    "Your payment was successful. Redirecting you back to the homepage.",
};

const PaymentSuccessPage = () => {
  return <PaymentSuccess />;
};
export default PaymentSuccessPage;
