'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Package, Plane } from 'lucide-react';

const strengths = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: 'Quality Inspection',
        description: 'Stringent multi-tier quality checks ensure only premium grade dry fruits meet our export standards. Zero compromise.'
    },
    {
        icon: <Package className="w-8 h-8 text-primary" />,
        title: 'Packaging Excellence',
        description: 'Vacuum-sealed, export-ready packaging designed to preserve freshness, aroma, and prevent transit damage.'
    },
    {
        icon: <Plane className="w-8 h-8 text-primary" />,
        title: 'Global Distribution',
        description: 'Mastery in cold chain logistics and freight forwarding. We deliver seamlessly across continents with precise tracking.'
    }
];

export default function Logistics() {
    return (
        <section id="logistics" className="py-32 bg-secondary relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                            Unrivaled Supply <br />
                            <span className="text-primary italic">Chain Mastery.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
                            We don&apos;t just trade; we orchestrate a flawless global operation. Our end-to-end logistics ensure that your bulk orders arrive in pristine condition, precisely when you need them.
                        </p>
                        <div className="h-px w-full bg-border/50 mb-10"></div>

                        <div className="flex gap-12">
                            <div>
                                <div className="text-4xl font-bold text-foreground mb-2">40+</div>
                                <div className="text-sm text-primary tracking-widest uppercase">Countries Served</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-foreground mb-2">0</div>
                                <div className="text-sm text-primary tracking-widest uppercase">Compromise</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        {strengths.map((str, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="group bg-card/50 backdrop-blur-sm border border-border/40 p-8 rounded-2xl hover:bg-card hover:border-primary/30 transition-all duration-300 flex gap-6"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    {str.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{str.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{str.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
