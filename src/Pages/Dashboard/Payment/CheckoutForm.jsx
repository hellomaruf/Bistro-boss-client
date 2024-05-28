import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } = stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    if (confirmError) {
      console.log("Confirm Error");
    } else {
      console.log("payment intent", paymentIntent);
    }

    const payment = {
      email: user?.email,
      price: totalPrice,
      date: new Date(),
      cartId: cart.map((item) => item._id),
      menuItemId: cart.map((item) => item.menu_id),
      status: "panding",
    };

    const res = await axiosSecure.post("/payment", payment);
    console.log("Payment Saved", res.data);
    refetch();
    if (res.data?.paymentResult?.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Thanks for your Payment!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-[#FB923C] text-white mt-4 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500 text-sm">{error}</p>
      </form>
    </div>
  );
}

export default CheckoutForm;
