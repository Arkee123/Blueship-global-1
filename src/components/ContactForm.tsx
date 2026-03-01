'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        // Simulate saving to local state for Buyer Portal
        const existing = JSON.parse(localStorage.getItem('blueship_inquiries') || '[]');
        localStorage.setItem('blueship_inquiries', JSON.stringify([...existing, { ...formData, date: new Date().toISOString() }]));

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <section id="contact" className="py-32 bg-background relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Request a <span className="text-primary italic">Quote</span></h2>
                        <p className="text-muted-foreground">Partner with Blueship Global for premium bulk exports.</p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    autoComplete="off"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-background border-border focus-visible:ring-primary"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-background border-border focus-visible:ring-primary"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                                id="company"
                                autoComplete="off"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="bg-background border-border focus-visible:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Requirements (Product, Volume, Destination)</Label>
                            <Textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="bg-background border-border focus-visible:ring-primary resize-none"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg mt-4 font-medium transition-all">
                            {submitted ? 'Inquiry Sent Successfully' : 'Submit Inquiry'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
