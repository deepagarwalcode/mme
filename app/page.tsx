import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Industries from "@/components/home/Industries";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "A refined industrial homepage for Metal Matrix Equipment, presenting fabrication, machining, and engineered equipment services with premium positioning.",
};

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Products />
      <Industries />
      <ContactCta />
    </main>
  );
}
