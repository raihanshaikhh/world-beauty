import React from "react";
import { FiPackage, FiTruck, FiTag, FiShield } from "react-icons/fi";

const perks = [
  {
    icon: <FiPackage size={20} />,
    title: "Bulk Orders",
    desc: "Minimum order quantities starting from 20 pieces per style.",
  },
  {
    icon: <FiTag size={20} />,
    title: "Wholesale Pricing",
    desc: "Exclusive trade prices with better margins as your volume grows.",
  },
  {
    icon: <FiTruck size={20} />,
    title: "Reliable Shipping",
    desc: "Pan-India delivery with tracking. International orders welcome.",
  },
  {
    icon: <FiShield size={20} />,
    title: "Quality Assured",
    desc: "Every batch inspected before dispatch. No compromises.",
  },
];

function BusinessWithUs() {
  const whatsappNumber = "+919004778995";
  const email = "rajabali6282@gmail.com";
  const whatsappMsg = encodeURIComponent(
    "Hi World Beauty, I'm interested in wholesale / bulk orders. Please share more details."
  );

  return (
    <section className="bg-[#FDF8F5] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D18B8B] mb-3">
              Partner With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B3A3A] leading-tight mb-3">
              Grow Your Business <br className="hidden md:block" />
              With World Beauty
            </h2>
            <div className="w-20 h-px bg-[#D18B8B] mb-4 ml-2" />
            <p className="text-[#7A6060] text-base leading-relaxed mb-4">
              We work with boutiques, retailers, and online sellers who share
              our love for modest, quality fashion. Whether you're stocking a
              single store or scaling an online catalogue, we're here to
              support you.
            </p>
            <p className="text-[#7A6060] text-sm leading-relaxed mb-10">
              Reach out directly — no lengthy forms, no waiting. Just a
              conversation to understand your needs and get you started.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${email}?subject=Wholesale Enquiry — World Beauty`}
                className="inline-flex items-center gap-2 border border-[#D18B8B] text-[#D18B8B] hover:bg-[#D18B8B] hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Us
              </a>
            </div>
          </div>

          {/* Right — Perks grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white border border-[#F0E6E6] rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#FDF0F0] text-[#D18B8B] flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h4 className="text-[#4B3A3A] font-semibold text-sm mb-2">
                  {perk.title}
                </h4>
                <p className="text-[#9A8080] text-xs leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>

        </div>{/* ← closes grid */}
      </div>{/* ← closes max-w-7xl */}
    </section>
  );
}

export default BusinessWithUs;