import React from "react";
import heroImg from "../assets/hero-sect-abaya.png"; // replace with your actual image path

function Hero() {
  return (
     <section
     className="hero-section relative w-full flex items-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url(${heroImg})`,
    minHeight: "clamp(500px, 75vh, 750px)",
    loading: "lazy",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        
        {/* Badge */}
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full mb-6 border border-white/30">
          New Collection 2026
        </span>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-playfair text-white leading-tight max-w-xl mb-6">
          Beauty That Speaks Elegance
        </h1>

        {/* Subtext */}
        <p className="text-white/80 text-lg max-w-lg mb-10">
          Discover premium beauty essentials crafted to enhance confidence,
          comfort, and timeless style.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-[#7d4a4a] hover:bg-[#3a2c2c] text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Shop Collection
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full border border-white/40 transition-colors">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;