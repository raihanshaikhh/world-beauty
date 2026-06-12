import { useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { FaWhatsapp } from "react-icons/fa";
import {useState} from "react";

function ProductDetails() {
  const { slug } = useParams();


  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <div className="py-40 text-center">
        Product not found
      </div>
    );
  }
    const [selectedSize, setSelectedSize] = useState(
  product?.sizes?.[0] || ""
);
  const whatsappNumber = "+919004778995";

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Selected Size: ${selectedSize}`
  );

  return (
    <section className="bg-[#FFF8F8] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-3xl w-full"
            />
          </div>

          {/* Content */}
          <div>

            <h1 className="text-4xl font-bold text-[#4B3A3A]">
              {product.name}
            </h1>

            <p className="text-2xl text-[#D18B8B] font-semibold mt-4">
              {product.price}
            </p>

            <p className="mt-6 text-[#7A6060]">
              {product.description}
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-[#4B3A3A]">
                Fabric
              </h3>

              <p className="text-[#7A6060]">
                {product.fabric}
              </p>
            </div>

<div className="mt-8">
  <h3 className="font-semibold text-[#4B3A3A] mb-3">
    Available Sizes
  </h3>

  <div className="flex gap-3 flex-wrap">
    {product.sizes.map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`px-4 py-2 rounded-full border transition-all duration-200 ${
          selectedSize === size
            ? "bg-[#D18B8B] text-white border-[#D18B8B]"
            : "border-gray-300 hover:border-[#D18B8B]"
        }`}
      >
        {size}
      </button>
    ))}
  </div>
</div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetails;