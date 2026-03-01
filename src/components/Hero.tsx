'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!buttonRef.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;

            if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
                setPosition({ x: distanceX * 0.2, y: distanceY * 0.2 });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Abstract Graphic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply"></div>

            {/* Light glow effects */}
            <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-200/40 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 mb-8 uppercase"
                >
                    <Globe className="w-4 h-4" />
                    Global Dry Fruits Trading House
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 max-w-5xl leading-[1.1]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                    Connecting Premium Quality with <br />
                    <span className="text-primary italic font-serif">Global Markets.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Blueship Global drives supply chain excellence, exporting the finest Almonds, Cashews, Raisins, and Pistachios from trusted processors to international buyers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <Link href="/quote">
                        <motion.div
                            animate={{ x: position.x, y: position.y }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
                        >
                            <Button ref={buttonRef} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-7 text-lg font-medium shadow-xl shadow-primary/20 flex items-center gap-3">
                                Request a Quote
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
