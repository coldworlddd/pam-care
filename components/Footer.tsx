import Link from "next/link";
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import LinkedIn from "./Icons/LinkedIn";
import TikTok from "./Icons/TikTok";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 text-primary">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">PamCare AI</span>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Your personal health companion for a healthier, organized life
                        </p>
                    </div>

                    <div className="w-full lg:w-auto">
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your mail"
                                className="bg-white text-black px-4 py-3 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mb-12"></div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Socials & Copyright */}
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:opacity-50 hover:text-white transition-all"
                            >
                                <Facebook color="#009321" size={24} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:opacity-50 hover:text-white transition-all"
                            >
                                <Instagram color="#009321" size={24} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:opacity-50 hover:text-white transition-all"
                            >

                                <LinkedIn color="#009321" size={24} />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:opacity-50 hover:text-white transition-all"
                            >
                                <TikTok color="#009321" size={24} />
                            </Link>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Pamcare AI Inc. All rights reserved.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-20">
                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li>
                                    <Link href="/services" className="hover:text-primary transition-colors">
                                        Our service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-primary transition-colors">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary transition-colors">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li>
                                    <Link href="/services" className="hover:text-primary transition-colors">
                                        Our service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-primary transition-colors">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary transition-colors">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li>
                                    <Link href="/services" className="hover:text-primary transition-colors">
                                        Our service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-primary transition-colors">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary transition-colors">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
