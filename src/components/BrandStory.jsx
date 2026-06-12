import React from "react";
import brandStoryBg from "../assets/background-image.png";
function BrandStory() {
    return (
        <section className=" py-32 relative w-full max-h-[80vh] flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={brandStoryBg}
                    alt="World Beauty"
                    className="w-full h-full bg-cover bg-[position:75%_center] lg:bg-center"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center backdrop-blur-[2px] bg-white/4 rounded-3xl ">

                {/* Eyebrow */}
                <p className="text-sm uppercase tracking-[0.25em] text-[#D18B8B] mb-5 font-semibold">
                    Our Story
                </p>

                {/* Brand Name */}
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    World Beauty
                </h2>

                {/* Divider */}
                <div className="w-10 h-px bg-[#D18B8B] mx-auto mb-8" />

                {/* Body copy */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 font-medium ">
                    At World Beauty, every piece is made with intention. We believe modest
                    fashion is not a compromise — it is a choice rooted in grace,
                    confidence, and quiet elegance.
                </p>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-10">
                    Each abaya, hijab, and co-ord is thoughtfully crafted from fabrics
                    chosen for how they feel against the skin and how they move through
                    the day. No shortcuts. No excess. Just clothing made to honour the
                    woman wearing it.
                </p>

                {/* Stats row */}
                <div className="flex items-center justify-center gap-10 mb-12">
                    <div>
                        <p className="text-white text-2xl font-bold">100%</p>
                        <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Handcrafted Quality</p>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div>
                        <p className="text-white text-2xl font-bold">80+</p>
                        <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Curated Designs</p>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div>
                        <p className="text-white text-2xl font-bold">Premium</p>
                        <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Fabric Selection</p>
                    </div>
                </div>

                {/* CTA */}
                <button className="cursor-pointer bg-[#D18B8B] text-[#572f1d] hover:bg-[#D18B8B] hover:text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                    Discover Our Craft
                </button>

            </div>
        </section>
    );
}

export default BrandStory;