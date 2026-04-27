import React from "react";
import { industries } from "../../lib/data";
import { Route, Building, HardHat, Radiation, Zap, TrainFront, Road, Ship, Factory, Building2 } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "bridge": return <Route size={80} strokeWidth={1.5} />;
    case "building": return <Building size={80} strokeWidth={1.5} />;
    case "hard-hat": return <HardHat size={80} strokeWidth={1.5} />;
    case "radiation": return <Radiation size={80} strokeWidth={1.5} />;
    case "zap": return <Zap size={80} strokeWidth={1.5} />;
    case "train": return <TrainFront size={80} strokeWidth={1.5} />;
    case "road": return <Road size={80} strokeWidth={1.5} />;
    case "ship": return <Ship size={80} strokeWidth={1.5} />;
    case "factory": return <Factory size={80} strokeWidth={1.5} />;
    case "warehouse": return <Building2 size={80} strokeWidth={1.5} />;
    default: return <Factory size={80} strokeWidth={1.5} />;
  }
};

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-primary uppercase" style={{ color: "#444" }}>
            Industries We Cater
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {industries.map((ind, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center w-full max-w-[180px]"
            >
              <div className="w-full aspect-square bg-[#F8F8F8] flex items-center justify-center mb-3 group hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  {getIcon(ind.iconName)}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 text-center leading-tight">{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
