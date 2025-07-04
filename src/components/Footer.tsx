// src\components\Footer.tsx

'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full mt-20">
            {/* CTA Section */}
            <div className="bg-neutral-cream px-4 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-primary-orange rounded-md px-8 py-8 flex flex-col md:flex-row justify-between items-center shadow-lg">
                        <div className="text-white mb-6 md:mb-0 text-center md:text-left">
                            <p className="text-lg font-semibold">Apakah Anda memiliki pertanyaan?</p>
                            <p className="text-white/90 text-base">Butuh informasi lebih lanjut?</p>
                        </div>
                        <Link
                            href="https://wa.me/6285646877888"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 rounded-full px-8 py-3 flex items-center gap-3 hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-semibold shadow-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="bg-neutral-charcoal max-w-7xl mx-auto px-4 py-16 rounded-md">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {/* Sitemap */}
                        <div>
                            <h3 className="text-white font-bold text-xl mb-6">SITEMAP</h3>
                            <div className="w-20 h-1 bg-primary-orange mb-8 rounded-full"></div>
                            <ul className="space-y-5">
                                {[
                                    { label: 'Home', href: '/', highlight: false },
                                    { label: 'Pricing', href: '/price' },
                                    { label: 'Blog', href: '/blog' },
                                    { label: 'About', href: '/about' },
                                ].map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`text-base font-medium transition-colors duration-300 ${item.highlight
                                                ? 'text-primary-orange hover:text-white'
                                                : 'text-gray-300 hover:text-primary-orange'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bimbel */}
                        <div>
                            <h3 className="text-white font-bold text-xl mb-6">BIMBEL</h3>
                            <div className="w-20 h-1 bg-primary-orange mb-8 rounded-full"></div>
                            <ul className="space-y-5">
                                {[
                                    { label: 'CPNS', id: 'cpns' },
                                    { label: 'PKN STAN', id: 'pknStan' },
                                    { label: 'PPPK', id: 'cpns' }, // Assuming PPPK uses same section as CPNS
                                    { label: 'TNI & Polri', id: 'tniPolri' },
                                    { label: 'UTBK', id: 'utbkSnbt' },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={`/price#${item.id}`}
                                            className="text-gray-300 hover:text-primary-orange transition-colors duration-300 text-base"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-bold text-xl mb-6">CONTACT</h3>
                            <div className="w-20 h-1 bg-primary-orange mb-8 rounded-full"></div>
                            <ul className="space-y-6">
                                <li>
                                    <a
                                        href="mailto:info@itdevelopment.com"
                                        className="flex items-center gap-4 text-base text-gray-300 hover:text-primary-orange transition-colors duration-300 group"
                                    >
                                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        masterprimasurabaya@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:085646877888"
                                        className="flex items-center gap-4 text-base text-gray-300 hover:text-primary-orange transition-colors duration-300 group"
                                    >
                                        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        +62 856-4687-7888
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-white border-t border-gray-100 px-4 py-6">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-gray-500 text-base">
                        © 2024 Master Prima. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
