import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/Trustbar.jsx";
import FeaturedCollections from "./components/FeaturedCollection.jsx";
import BrandStory from "./components/BrandStory.jsx";
import BusinessWithUs from "./components/BusinessWithUs.jsx";
import Footer from "./components/Footer.jsx";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <FeaturedCollections />
      <BrandStory />
      <BusinessWithUs />
      <Footer />
   
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/shipping-policy"
          element={<ShippingPolicy />}
        />
         <Route
    path="/product/:slug"
    element={<ProductDetails />}
  />

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;