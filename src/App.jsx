import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import Supplier from "./Pages/Supplier/Supplier.jsx";
import Welcome from "./Pages/Welcome/Welcome.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  const hideNavbarFooter = location.pathname === "/" || location.pathname.startsWith("/supplier");

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      
      {!hideNavbarFooter && <Navbar setShowLogin={setShowLogin} />}
      
      <div className="app">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/supplier/*" element={<Supplier />} />
        </Routes>
      </div>

      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default App;
