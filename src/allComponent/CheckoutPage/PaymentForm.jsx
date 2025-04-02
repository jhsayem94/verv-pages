
"use client"
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useElements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe } from "@stripe/react-stripe-js";
import { usePayment } from "../../context/PaymentContext"; // Importing context
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../Shared/UI/Form/InputField";

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
    // e.preventDefault()
    console.log(stripe)
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
    console.log(paymentMethod);
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
    <div className="">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Stripe Payment</h2>
      <div className="space-y-4">
        {/* Name Input */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div> */}
        <div>
          <p className='block text-sm font-medium text-gray-700 mb-1'>Name</p>
          <InputField
            registerName="Name"
            type="text"
            placeholder="Name"
            register={register}
            errors={errors}
            className="w-full "
          />
        </div>

        {/* Email Input */}
        <div>
          <p className='block text-sm font-medium text-gray-700 mb-1'>Name</p>
          <InputField
            registerName="Email"
            type="email"
            placeholder="Enter Your Email"
            register={register}
            errors={errors}
            className="w-full "
          />
        </div>
        {/* Card Number */}
        <div>
          <p className='block text-sm font-medium text-gray-700 mb-1'>Name</p>
          <InputField
            registerName="Email"
            type="email"
            placeholder="Enter Your Email"
            register={register}
            errors={errors}
            className="w-full "
          />
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
