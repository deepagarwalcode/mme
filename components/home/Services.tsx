import React from "react";
import { services } from "../../lib/data";

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary" style={{ color: "#666" }}>
            OUR SERVICES
          </h2>
        </div>

        <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-4 pb-8 md:pb-0 hide-scrollbar">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-none w-[260px] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] mb-4 overflow-hidden shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-center text-gray-700 group-hover:text-brand-orange transition-colors leading-tight px-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
