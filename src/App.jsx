import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/Trustbar";
import FeaturedCollections from "./components/FeaturedCollection";
import BrandStory from "./components/BrandStory";
import BusinessWithUs from "./components/BusinessWithUs";
import Footer from "./components/Footer";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;