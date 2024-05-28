import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../Components/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

function Payment() {
  return (
    <div>
      <SectionHeader title={"Payment"} shorts={"Plaese Pay"}></SectionHeader>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
