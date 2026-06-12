import React from "react";
import { TbTruck, TbRefresh, TbHeadset } from "react-icons/tb";
import { GiFeather } from "react-icons/gi";

const trustItems = [
  {
    icon: <TbTruck size={22} />,
    title: "Free Shipping",
    subtitle: "On orders over ₹999",
  },
  {
    icon: <TbRefresh size={22} />,
    title: "Easy Returns",
    subtitle: "7-day return policy",
  },
  {
    icon: <GiFeather size={22} />,
    title: "Premium Fabric",
    subtitle: "Soft, breathable materials",
  },
];

function TrustBar() {
  return (
    <section className="bg-[#FFF8F8] border-y border-[#F0D9D5]">
      <div className="max-w-7xl mx-auto px-6 py-7">
        <div className="grid grid-cols-3 gap-3">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:gap-3"
            >
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#F0D9D5] flex items-center justify-center text-[#6B4F43]">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#4B3A3A]">
                  {item.title}
                </p>
                <p className="hidden sm:block text-xs text-[#9C8282]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;