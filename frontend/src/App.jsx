import React from "react";
import "./i18n";

import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import FloatingSupport from "./components/FloatingSupport"; // 👈 ADD THIS
import Home from "./components/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Feed from "./pages/Feed";
import Medicines from "./pages/Medicines";
import WaterTesting from "./pages/WaterTesting";
import PondProbiotics from "./pages/PondProbiotics ";
import DiseaseTreatment from "./pages/DiseaseTreatment";
import Oxygen from "./pages/Oxygen";
import PondPreparation from "./pages/PondPreparation";
import Growth from "./pages/Groth";
import Probiotics from "./pages/Probiotics";
import Gas from "./pages/Gas";
import Plankton from "./pages/Plakton";
import Complete from "./pages/Complete";
import Recovery from "./pages/Recovery";

import Login from "./pages/Login";

import AdminMain from "./admin/AdminMain";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";





function App() {
  return (

     <CartProvider>

    <div className="App">
     <AnnouncementBar/>
      <Navbar />
      <Navbar2/>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/fish-feed" element={<Feed />} />
             <Route path="/medicines" element={<Medicines />} />
               <Route path="/water-testing" element={<WaterTesting/>} />
                <Route path="/pond-probiotics" element={<PondProbiotics />} />
                 <Route path="/diseaseTreatment" element={<DiseaseTreatment/>} />
                  <Route path="/oxygen" element={<Oxygen/>} />
                  <Route path="/pondPreparation" element={<PondPreparation/>} />
                   <Route path="/growth" element={<Growth/>} />
                    <Route path="/probiotics" element={<Probiotics/>} />
                     <Route path="/gas" element={<Gas/>} />
                       <Route path="/plankton" element={<Plankton/>} />
                        <Route path="/complete" element={<Complete/>} />
                         <Route path="/recovery" element={<Recovery/>} />





                       <Route path="/login" element={<Login/>} />

                             <Route path="/adminMain" element={<AdminMain/>} />

                             <Route path="/blogs" element={<BlogPage/>} />
                             <Route path="/contact" element={<ContactUs/>} />

                             
                              

                         
                        
                        
        
      </Routes>

      <Footer />
 <FloatingSupport />
    </div>


    </CartProvider>
  );
}

export default App;








