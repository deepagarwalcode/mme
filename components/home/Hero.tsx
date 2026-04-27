"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/infra/9.jpeg",
  "/infra/11.jpeg",
  "/infra/12.jpeg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 px-4 md:px-16 lg:px-24 max-w-7xl w-full">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide" style={{ color: "white" }}>
          Trusted Choice in <br className="hidden md:block" />
          Steel Fabrication Industry
        </h1>
        <p className="text-xl md:text-xl text-gray-200 mb-10 font-semibold border-l-4 border-brand-orange pl-4 max-w-2xl bg-black/30 p-4 rounded-r shadow-sm">
          We Tailor Our Service to Meet Your Exact Needs. "THINK OF FABRICATION THINK OF METAL MATRIX"
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/services" className="px-8 py-4 bg-brand-orange text-white font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-center">
            Our Services
          </a>
          <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-brand-blue transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-center">
            Contact Us
          </a>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-brand-orange scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
