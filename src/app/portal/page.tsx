'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, FileText, ChevronRight } from 'lucide-react';

interface Inquiry {
    name: string;
    email: string;
    company: string;
    message: string;
    date: string;
}

export default function BuyerPortal() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);

    useEffect(() => {
        if (isAuthenticated) {
            const data = JSON.parse(localStorage.getItem('blueship_inquiries') || '[]');
            // eslint-disable-next-line
            setInquiries(data);
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid password. Hint: admin123');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-card border border-border/50 rounded-2xl p-8 shadow-2xl"
                >
                    <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold font-serif text-center mb-2">Buyer Portal Access</h1>
                    <p className="text-muted-foreground text-center mb-8 text-sm">Enter the portal password to view active quotes and mock data.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-background"
                                placeholder="Hint: admin123"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Access Secure Portal
                        </Button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 border-t border-border/10">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-foreground mb-2">My Dashboad</h1>
                        <p className="text-muted-foreground">Welcome back. Here are your active inquiries.</p>
                    </div>
                    <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Sign Out</Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" /> Recent Inquiries
                        </h2>

                        {inquiries.length === 0 ? (
                            <div className="bg-card border border-border/50 rounded-2xl p-12 text-center text-muted-foreground">
                                No inquiries found. Go back to the homepage and submit a quote request.
                            </div>
                        ) : (
                            [...inquiries].reverse().map((inq, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-primary/10 text-primary uppercase text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">
                                                Pending
                                            </span>
                                            <span className="text-sm text-muted-foreground">{new Date(inq.date).toLocaleDateString()}</span>
                                        </div>
                                        <h3 className="font-medium text-foreground text-lg">{inq.company || inq.name}</h3>
                                        <p className="text-muted-foreground text-sm line-clamp-1">{inq.message}</p>
                                        <p className="text-muted-foreground text-xs mt-2">{inq.email}</p>
                                    </div>
                                    <Button variant="ghost" className="shrink-0 text-primary hover:text-primary hover:bg-primary/10">
                                        View Specs <ChevronRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </motion.div>
                            ))
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold font-serif mb-4">Dedicated Account Manager</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xl font-serif">
                                    A
                                </div>
                                <div>
                                    <p className="font-medium">Arjun Mehra</p>
                                    <p className="text-sm text-muted-foreground">Logistics Director</p>
                                </div>
                            </div>
                            <Button className="w-full bg-secondary hover:bg-secondary/80 text-foreground">Schedule Call</Button>
                        </div>

                        <div className="bg-gradient-to-br from-primary/20 to-secondary/50 border border-primary/20 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold font-serif text-primary mb-2">Download Global Catalog</h3>
                            <p className="text-sm text-muted-foreground mb-6">Access our latest 2026 export grading and pricing matrix.</p>
                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Download PDF</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
