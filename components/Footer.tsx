import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Pamcare AI</h3>
                        <p className="text-sm text-gray-500">Medical Care</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Help</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/about" className="hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-primary">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div> {/* Added placeholders for other columns to match original design roughly or keep it simple */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Social</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Pamcare AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
