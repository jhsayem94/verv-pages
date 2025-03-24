// "use client"
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import TempElement from "./TempElement";

// // TODO: provide publishable Key
// // const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
// const stripePromise = loadStripe("pk_test_51MBOSJEOBnxFVRslr6WRlgceSTMkXwx9LHhIewVu0HSt0nsLA1TigOcCI2NflK5QgNeWt9DGwxvVZL350DfSwChT00OuWCRypr");

// const TempPayment = () => {
//     // const [cart] = useCart();
//     // const total = cart.reduce((sum, item) => sum + item.price, 0);
//     // const price = parseFloat(total.toFixed(2))
//     // cart={cart} price={price}
//     return (
//         <div className="">
           
//             <Elements  stripe={stripePromise}>
//                 <TempElement ></TempElement>
//             </Elements>
//         </div>
//     );
// };

// export default TempPayment;