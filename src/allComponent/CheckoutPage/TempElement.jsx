// "use client"
// import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
// // import { useEffect } from "react";
// import { useState } from "react";


// const TempElement = ({ cart, price }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [cardError, setCardError] = useState('');
//     // const [clientSecret, setClientSecret] = useState('');
//     // const [processing, setProcessing] = useState(false);
//     // const [transactionId, setTransactionId] = useState('');
  


//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return
//         }
//         const cardNumberElement = elements.getElement(CardNumberElement);
//     const cardExpiryElement = elements.getElement(CardExpiryElement);
//     const cardCvcElement = elements.getElement(CardCvcElement);
//         if ((cardNumberElement || cardExpiryElement || cardCvcElement ) === null) {
//             return
//         }
//         // console.log(card)
//         // const { error, paymentMethod } = await stripe.createPaymentMethod({
//         //     type: "card",            
//         //     card:{
//         //         card_number: cardNumberElement,
//         //     card_exp_month: cardExpiryElement,
//         //     card_exp_year: cardExpiryElement,
//         //     card_cvc: cardCvcElement
//         //     }
//         //   });
//           console.log( cardNumberElement, cardExpiryElement , cardCvcElement );

//         // if (error) {
//         //     console.log('error', error)
//         //     setCardError(error.message);
//         // }
//         // else {
//         //     setCardError('');
//         //     console.log('payment method', paymentMethod)
//         // }

//         // setProcessing(true)

//         // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//         //     clientSecret,
//         //     {
//         //         payment_method: {
//         //             card: card,
//         //             billing_details: {
//         //                 email: user?.email || 'unknown',
//         //                 name: user?.displayName || 'anonymous'
//         //             },
//         //         },
//         //     },
//         // );

//         // if (confirmError) {
//         //     console.log(confirmError);
//         // }

//         // console.log('payment intent', paymentIntent)
//         // setProcessing(false)
//         // if (paymentIntent.status === 'succeeded') {
//         //     setTransactionId(paymentIntent.id);
//         //     // save payment information to the server
//         //     const payment = {
//         //         email: user?.email,
//         //         transactionId: paymentIntent.id,
//         //         price,
//         //         date: new Date(),
//         //         quantity: cart.length,
//         //         cartItems: cart.map(item => item._id),
//         //         menuItems: cart.map(item => item.menuItemId),
//         //         status: 'service pending',
//         //         itemNames: cart.map(item => item.name)
//         //     }
//         //     axiosSecure.post('/payments', payment)
//         //         .then(res => {
//         //             console.log(res.data);
//         //             if (res.data.insertResult.insertedId) {
//         //                 Swal.fire({
//         //                     title: 'Payment Successful.',
//         //                     showClass: {
//         //                         popup: 'animate__animated animate__fadeInDown'
//         //                     },
//         //                     hideClass: {
//         //                         popup: 'animate__animated animate__fadeOutUp'
//         //                     }
//         //                 });
//         //                 navigate('/dashboard/mycart');
//         //             }
//         //         })
//         // }


//     }

//     return (
//         <>
//             <form className="md:w-2/3 md:mx-auto w-full md:m-8 m-2 " onSubmit={handleSubmit}>
//                 {/* <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 /> */}
//                 <div className="space-y-4">        
//         {/* Card Number */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Card Number</label>
//           <div className="border rounded-lg p-3 bg-gray-50">
//             <CardNumberElement className="w-full" />
//           </div>
//         </div>
//         {/* Expiry and CVV */}
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
//             <div className="border rounded-lg p-3 bg-gray-50">
//               <CardExpiryElement className="w-full" />
//             </div>
//           </div>
//           <div className="w-1/2">
//             <label className="block text-sm font-medium text-gray-700">CVV</label>
//             <div className="border rounded-lg p-3 bg-gray-50">
//               <CardCvcElement className="w-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//                 <button className="btn bg-[#FBBD23] btn-sm mt-4" type="submit" disabled={!stripe}>
//                     Pay
//                 </button>
//             </form>
//             {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
//             {/* {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} */}
//         </>
//     );
// };

// export default TempElement;