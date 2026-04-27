export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-orange pb-2 inline-block font-serif">Metal Matrix Engineering</h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            With the mission to be a supreme leader in its area of expertise, Metal Matrix Engineering has established a brand reputation in the Steel Fabrication Industry across the UAE.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-orange pb-2 inline-block font-serif">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-brand-orange transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-brand-orange transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-brand-orange transition-colors">Our Services</a></li>
            <li><a href="/projects" className="hover:text-brand-orange transition-colors">Gallery / Projects</a></li>
            <li><a href="/contact" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-brand-orange pb-2 inline-block font-serif">Contact Info</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>Industrial Area 1, Dubai, UAE</li>
            <li>+971 50 123 4567</li>
            <li>+971 4 123 4567</li>
            <li>info@metalmatrix.ae</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm border-t border-gray-600 pt-8">
        &copy; {new Date().getFullYear()} Metal Matrix Engineering. All Rights Reserved.
      </div>
    </footer>
  );
}
