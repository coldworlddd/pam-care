import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">Pamcare AI</h1>
          <span className="text-sm text-gray-500">
            Intelligent Health Management
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Our Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact Us
          </Link>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  );
}
