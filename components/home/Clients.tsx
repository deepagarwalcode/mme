import React from "react";
import { clients } from "../../lib/data";

export default function Clients() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2">Our Network</h4>
        <h2 className="text-3xl font-bold text-brand-blue mb-10 heading-primary">
          Our Valued Clients
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="w-32 h-32 flex items-center justify-center bg-brand-gray-light border border-gray-200 rounded-full grayscale hover:grayscale-0 hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-400 group-hover:text-brand-blue transition-colors">
                  {client.logo}
                </span>
                <p className="text-xs font-semibold mt-2 text-gray-500 group-hover:text-brand-red transition-colors">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
