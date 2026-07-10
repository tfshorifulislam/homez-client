'use client';

import Link from "next/link";
import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 py-16">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Homez
                        </h2>

                        <p className="mt-4 leading-7 text-slate-400">
                            Discover verified properties, connect with trusted
                            sellers, and find your dream home with confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-blue-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/properties"
                                    className="transition hover:text-blue-400"
                                >
                                    Properties
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/blog"
                                    className="transition hover:text-blue-400"
                                >
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about-us"
                                    className="transition hover:text-blue-400"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#contact"
                                    className="transition hover:text-blue-400"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="#faq"
                                    className="transition hover:text-blue-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-4">

                            <div className="flex gap-3">
                                <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                                <p>
                                    Dhaka, Bangladesh
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <a
                                    href="tel:+8801712345678"
                                    className="hover:text-blue-400"
                                >
                                    +880 1712-345678
                                </a>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <a
                                    href="mailto:support@homez.com"
                                    className="hover:text-blue-400"
                                >
                                    support@homez.com
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
                            >
                                <FaInstagram size={20} />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-600"
                            >
                                <FaTwitter size={20} />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="my-14 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                    © {year} Homez. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;