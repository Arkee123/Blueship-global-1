'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Ship } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2 z-50">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Ship className="h-8 w-8 text-primary" />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        BLUESHIP<span className="text-primary font-light">GLOBAL</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Products</Link>
                    <Link href="/#logistics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Logistics</Link>
                    <Link href="/quote" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 px-4 py-2 rounded-full hover:bg-primary/10">
                        Request a Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <Link href="/#products" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium">Products</Link>
                        <Link href="/#logistics" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium">Logistics</Link>
                        <Link href="/quote" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-primary">Request a Quote</Link>
                    </motion.div>
                )}

            </div>
        </header>
    );
};

export default Navbar;
