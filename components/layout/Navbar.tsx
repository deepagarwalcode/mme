import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-brand-blue text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>Trusted Choice in Steel Fabrication Industry</div>
          <div>Call Us: +971 50 123 4567 | info@metalmatrix.ae</div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-blue tracking-tighter font-serif">
          METAL MATRIX <span className="text-brand-orange">ENGINEERING</span>
        </div>
        <ul className="hidden md:flex space-x-8 font-semibold text-brand-gray-dark">
          <li>
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
          </li>
          <li>
            <Link href="/machinery" className="hover:text-brand-orange transition-colors">Machinery & Infra</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-brand-orange transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-brand-blue">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
