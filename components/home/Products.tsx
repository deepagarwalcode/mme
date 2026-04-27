import React from "react";
import { products } from "../../lib/data";

export default function Products() {
  return (
    <section className="bg-white">
      {/* Heavy Engineering Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8 border-b-2 border-brand-orange inline-block pb-2">
          <span className="text-3xl md:text-4xl font-light text-[#2F3E46] mr-3 tracking-tight">Products List</span>
          <br />
          <br />
          <span className="text-lg md:text-xl font-medium text-[#3A4A5A] uppercase tracking-wide">HEAVY ENGINEERING PRODUCTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {products.heavyEngineering.map((item, index) => (
            <div key={index} className="py-4 border-b border-gray-200 text-sm font-bold text-gray-700">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Structural Steel Products Section */}
      <div className="bg-[#EFEFEF] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 border-b-2 border-brand-orange inline-block pb-2">
            <span className="text-xl font-medium text-[#3A4A5A] uppercase tracking-wide">STRUCTURAL STEEL PRODUCTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {products.structuralSteel.map((item, index) => (
              <div key={index} className="py-4 border-b border-gray-300 text-sm font-bold text-gray-700">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/products" className="inline-block px-8 py-3 bg-brand-orange text-white font-medium hover:bg-orange-600 transition-colors shadow">
              VIEW PRODUCT DETAILS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
