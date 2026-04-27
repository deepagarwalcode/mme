import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Products from "../components/home/Products";
import Industries from "../components/home/Industries";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Products />
      <Industries />
    </main>
  );
}
