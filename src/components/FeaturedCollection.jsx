import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "../data/Products.js";




function FeaturedCollections() {
  const swiperRef = useRef(null);
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/product/${product.slug}`}>
                  <Card col={product} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/product/${product.slug}`}>
                <Card col={product} />
              </Link>
            </SwiperSlide>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
            }}
            className="cursor-pointer border border-[#D18B8B] text-[#D18B8B] hover:bg-[#D18B8B] hover:text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            Chat on WhatsApp
            <FaWhatsapp size={16} className="inline ml-2" />

          </button>
        </div>

      </div>
    </section>
  );
}

function Card({ col }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={col.image}
          alt={col.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
        <p className="text-white font-semibold text-base">{col.name}</p>
        <div className="flex items-center justify-between mt-0.5">
          <p className="text-white/70 text-xs">{col.subtitle}</p>
          <span className="text-white/70 text-xs">{col.items}</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollections;