import React from "react";

const collections = [
  {
    title: "Abayas",
    subtitle: "Modest & Elegant",
    image: "/src/assets/black-abaya.jpeg",
    items: "24 Styles",
  },
  {
    title: "Hijabs",
    subtitle: "Soft & Breathable",
    image: "/src/assets/black-abaya-2.jpeg",
    items: "18 Styles",
  },
  {
    title: "Co-ords",
    subtitle: "Effortless Matching",
    image: "/src/assets/creme-abaya.jpeg",
    items: "12 Styles",
  },
  {
    title: "Accessories",
    subtitle: "Complete Your Look",
    image: "/src/assets/grey-abaya.jpeg",
    items: "30+ Pieces",
  },
];

function FeaturedCollections() {
  return (
    <section className="bg-[#D6B2A6] py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[#D18B8B] mb-2">
            Explore
          </p>
          <h2 className="text-3xl font-bold text-[#4B3A3A]">
            New Arrivals
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((col, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
                <p className="text-white font-semibold text-base">
                  {col.title}
                </p>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-white/70 text-xs">{col.subtitle}</p>
                  <span className="text-white/70 text-xs">{col.items}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-8 text-center">
          <button className="border border-[#D18B8B] text-[#D18B8B] hover:bg-[#D18B8B] hover:text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            View All Collections
          </button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedCollections;