import React from "react";

export default function About() {
  return (
    <>
      <div className="w-full bg-brand-orange py-6 px-4 text-center shadow-inner">
        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide m-0 heading-primary" style={{ color: "white" }}>
          Delivering Quality with Performance
        </h3>
      </div>
      <section className="flex flex-col md:flex-row w-full min-h-[500px] bg-[#EAEAEA]">
        <div
          className="w-full md:w-1/2 min-h-[400px] md:min-h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/infra/18.jpeg" }}
        >
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 heading-primary" style={{ color: "#555" }}>
              ABOUT US
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Metal Matrix Engineering was started in 2010, pioneering the development of pneumatic conveying technology. The company established itself as the leading Bulk Materials Handling and Pneumatic Conveying Specialists.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              METAL MATRIX ENGINEERING offer a total end to end solution for bulk material handling system tailored to suit your specific application as
            </p>
            <a href="/about" className="inline-block px-6 py-2 bg-brand-orange text-white font-medium hover:bg-orange-600 transition-colors">
              Read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
