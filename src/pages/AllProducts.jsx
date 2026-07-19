import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Shop the Range
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                    All Collections
                </h1>
                <div className="mt-4 h-px w-16 bg-gray-300 mx-auto" />
            </div>

            {/* Product count / meta bar */}
            <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span>{products.length} products</span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Empty state */}
            {products.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    No products available right now.
                </div>
            )}
        </section>
    );
}