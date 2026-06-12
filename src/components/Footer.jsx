import React from "react";
import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
    const whatsappNumber = "917753050839";
    const whatsappMsg = encodeURIComponent(
        "Hi World Beauty, I'm interested in wholesale / bulk orders. Please share more details."
    );
    const instagramUrl =
        "https://www.instagram.com/world_beauty_by_rida";

    return (
        <footer className="bg-[#342424] text-white border-t border-[#D18B8B]/20">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-serif mb-4">
                            World Beauty
                        </h2>

                        <p className="text-white/60 leading-relaxed max-w-md mb-8">
                            Timeless modest fashion crafted with elegance,
                            comfort, and attention to detail. Designed for
                            women who value confidence and grace.
                        </p>

                        <div className="flex items-center gap-4">

                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D18B8B] hover:text-[#D18B8B] transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition"
                            >
                                <FaWhatsapp />
                            </a>

                            <a
                                href="mailto:rajabali6282@gmail.com"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D18B8B] hover:text-[#D18B8B] transition"
                            >
                                <FaEnvelope />
                            </a>

                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest mb-6">
                            Shop
                        </h3>

                        <ul className="space-y-3 text-white/60">
                            <li>
                                <a href="#" className="hover:text-[#D18B8B]">
                                    Abayas
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#D18B8B]">
                                    Hijabs
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#D18B8B]">
                                    Co-ords
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-[#D18B8B]">
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-white/60">
                            <li>
                                <a href="#" className="hover:text-[#D18B8B]">
                                    About Us
                                </a>
                            </li>

                            

                            <li>
                                <a href="#" className="hover:text-[#D18B8B]">
                                    FAQs
                                </a>
                            </li>

                           
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest mb-6">
                            Contact Info
                        </h3>

                        <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                            <p>
                                Plot No. 14/M/1, Road No. 2
                                Near Hari Masjid, Shivaji Nagar
                                Govandi, Mumbai 400043
                            </p>

                            <p>
                                +91 7753050839
                            </p>

                            <p>
                                Monday - Saturday
                                <br />
                                10:00 AM - 7:00 PM
                            </p>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-12 pt-8">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-white/30 text-sm">
                            © {new Date().getFullYear()} World Beauty.
                            All rights reserved.
                        </p>

                        <div className="flex gap-6 text-white/30 text-sm">
                            <Link
                                to="/privacy-policy"
                                className="hover:text-white"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/shipping-policy"
                                className="hover:text-white"
                            >
                                Shipping Policy
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;