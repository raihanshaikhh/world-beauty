import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "../data/Products.js";
import AllProducts from "../pages/AllProducts.jsx";
import ProductCard from "./ProductCard.jsx";




function FeaturedCollections() {
  const swiperRef = useRef(null);
  const featuredProducts = products.slice(0, 8);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const email = import.meta.env.VITE_EMAIL;
  const whatsappMsg = encodeURIComponent(
    "Hi World Beauty, I Want To Buy This Collection. Please share more details."
  );

  return (
    <section className="bg-[#FDF8F5] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading + Nav Buttons Row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D18B8B] mb-2">
              Explore
            </p>
            <h2 className="text-3xl font-bold text-[#4B3A3A]">
              New Arrivals
            </h2>
          </div>

          {/* Nav buttons — desktop only */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slidePrev();
                }
              }}
              className="w-9 h-9 rounded-full border border-[#D18B8B] text-[#D18B8B] hover:bg-[#D18B8B] hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideNext();
                }
              }}
              className="w-9 h-9 rounded-full border border-[#D18B8B] text-[#D18B8B] hover:bg-[#D18B8B] hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: Swiper Carousel */}
        <div className="hidden lg:block">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}

          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="pb-5">
                {/* <Link to={`/product/${product.slug}`}> */}
                <ProductCard product={product} />
                {/* </Link> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {featuredProducts.map((product) => (
            // <Link key={product.id} to={`/product/${product.slug}`}>
            <ProductCard product={product} />
            // </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/Products"
            className="border border-[#D18B8B] text-[#D18B8B] hover:bg-[#D18B8B] hover:text-white px-8 py-3 rounded-full"
          >
            View All Collection
          </Link>

          <button
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, "_blank")
            }
            className="bg-[#D18B8B] text-white px-8 py-3 rounded-full hover:opacity-90 cursor-pointer"
          >
            Chat on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}


export default FeaturedCollections;