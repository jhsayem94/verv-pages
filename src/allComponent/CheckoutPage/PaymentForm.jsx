// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { CreditCard } from "lucide-react";

// const stripePromise = loadStripe("your_publishable_key_here");

// // Define Zod Schema
// const paymentSchema = z.object({
//   name: z.string().min(3, "Name must be at least 3 characters"),
//   email: z.string().email("Invalid email address"),
// });

// const CheckoutForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(paymentSchema),
//   });

//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const onSubmit = async (data) => {
//     if (!stripe || !elements) return;
//     setLoading(true);

//     const cardNumberElement = elements.getElement(CardNumberElement);
//     const cardExpiryElement = elements.getElement(CardExpiryElement);
//     const cardCvcElement = elements.getElement(CardCvcElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: {
//         number: cardNumberElement,
//         exp_month: cardExpiryElement,
//         exp_year: cardExpiryElement,
//         cvc: cardCvcElement,
//       },
//       billing_details: {
//         name: data.name,
//         email: data.email,
//       },
//     });

//     if (error) {
//       setMessage(error.message);
//       setLoading(false);
//     } else {
//       console.log("Payment Method:", paymentMethod);
//       setMessage("Payment Successful!");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="">
//       <div className=" w-full ">
    
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


//           {/* Card Number Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Card number</label>
//             <div className="border rounded-lg p-3 bg-gray-50 relative">
//               <CardNumberElement className="w-full"
              
//               />
//                 <CreditCard className="absolute left-3 text-gray-400" size={20} />
//             </div>
//           </div>
//            {/* Name Input */}
//            <div>
//             <label className="block text-sm font-medium text-gray-700">Name on card</label>
//             <input 
//               type="text"
//               placeholder="Name on card"
//               {...register("name")}
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//           </div>

//           {/* Expiry and CVC - Side by Side */}
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">Expiration date</label>
//               <div className="border rounded-lg p-3 bg-gray-50">

//                 <CardExpiryElement className="w-full" />
              
//               </div>
//             </div>

//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">Security code</label>
//               <div className="border rounded-lg p-3 bg-gray-50">
//                 <CardCvcElement className="w-full" />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             disabled={!stripe || loading}
//             className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
//           >
//             {loading ? "Processing..." : "Pay Now"}
//           </button>

//           {message && <p className="text-center text-green-600 mt-2">{message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// const StripePayment = () => (
//   <Elements stripe={stripePromise}>
//     <CheckoutForm />
//   </Elements>
// );

// export default StripePayment;
// components/PaymentForm.jsx
"use client"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { usePayment } from "../../context/usePayment"; // Importing context

// Zod Validation Schema
const paymentSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(paymentSchema),
  });

  const stripe = useStripe();
  const elements = useElements();
  const { setSubmitPayment } = usePayment();

  const onSubmit = async (data) => {
    if (!stripe || !elements) return;
    
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: {
        number: cardNumberElement,
        exp_month: cardExpiryElement,
        exp_year: cardExpiryElement,
        cvc: cardCvcElement,
      },
      billing_details: {
        name: data.name,
        email: data.email,
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Payment Successful!");
      console.log("Payment Method:", paymentMethod);
    }
  };

  // Expose submit function to context
  useEffect(() => {
    setSubmitPayment(() => handleSubmit(onSubmit));
  }, [setSubmitPayment, handleSubmit]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Stripe Payment</h2>
      
      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <div className="border rounded-lg p-3 bg-gray-50">
            <CardNumberElement className="w-full" />
          </div>
        </div>

        {/* Expiry and CVV */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <div className="border rounded-lg p-3 bg-gray-50">
              <CardExpiryElement className="w-full" />
            </div>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <div className="border rounded-lg p-3 bg-gray-50">
              <CardCvcElement className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
