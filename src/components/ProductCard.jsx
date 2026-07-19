import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
     <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    
      <Link to={`/product/${product.slug}`}>
        {/* Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 rounded-md group-hover:scale-105 "
          />
        </div>
      </Link>

      {/* Wishlist button — top right, floats over image */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setWishlisted(!wishlisted);
        }}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-white transition"
      >
        <Heart
          size={16}
          className={wishlisted ? "fill-black text-black" : "text-gray-500"}
        />
      </button>
        
      {/* Details below image */}
      <div className="p-2">
        <p className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.round(product.rating) ? "fill-amber-400" : "fill-gray-200 text-gray-200"}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">({product.reviewCount || 0})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-gray-900">
            {product.price}
          </span>
          {hasDiscount && (
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>

  );
}