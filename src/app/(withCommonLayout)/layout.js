// import Footer from "@/components/Shared/Footer/Footer";

import Navbar from "@/allComponent/Shared/Navber/Navber";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <ResponsiveNavbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default layout;