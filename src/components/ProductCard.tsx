'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    description: string;
    imageSrc: string;
    index: number;
}

export default function ProductCard({ title, description, imageSrc, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[450px] w-full overflow-hidden rounded-[20px] bg-card border border-border/50"
        >
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 bg-background/50 backdrop-blur-md">
                    <Leaf className="text-primary w-5 h-5" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3 font-serif tracking-tight">{title}</h3>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mt-2">{description}</p>
                </div>
                <div className="h-1 w-12 bg-primary mt-6 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
            </div>
        </motion.div>
    );
}
