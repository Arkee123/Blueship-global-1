'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function QuotePage() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', moq: '', details: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.moq) return;

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ firstName: '', lastName: '', phone: '', moq: '', details: '' });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-background">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>

                    <div className="text-center mb-10 relative z-10">
                        <h1 className="text-4xl font-bold font-serif mb-4">Request a <span className="text-primary italic">Quote</span></h1>
                        <p className="text-muted-foreground">Fill in your requirements below and our commercial team will contact you directly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="bg-background border-border"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="bg-background border-border"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="bg-background border-border"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="moq">Minimum Order Quantity (MOQ)</Label>
                                <Input
                                    id="moq"
                                    placeholder="e.g. 1 Metric Ton"
                                    value={formData.moq}
                                    onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                                    className="bg-background border-border"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="details">Additional Requirements (Optional)</Label>
                            <Textarea
                                id="details"
                                rows={4}
                                value={formData.details}
                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                className="bg-background border-border resize-none"
                            />
                        </div>

                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-medium transition-all">
                            {submitted ? 'Quote Request Sent' : 'Submit Request'}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
