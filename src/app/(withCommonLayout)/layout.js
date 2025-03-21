// import Footer from "@/components/Shared/Footer/Footer";

import Navbar from "@/allComponent/Shared/Navber/Navber";
import { PaymentProvider } from "@/context/usePayment";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <ResponsiveNavbar /> */}
      <main>
      <PaymentProvider>
      {children}
      </PaymentProvider>
      
        
        </main>
      {/* <Footer /> */}
    </div>
  );
};

export default layout;