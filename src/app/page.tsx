import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Logistics from '@/components/Logistics';

const products = [
  {
    title: 'Premium Almonds',
    description: 'Sourced from the finest orchards, our almonds offer unmatched crunch and nutritional density. Perfect for grading and mass packaging.',
    imageSrc: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Golden Cashews',
    description: 'Immaculately graded whole cashews known for their rich, buttery texture. Vacuum-sealed for absolute freshness across oceans.',
    imageSrc: '/cashews.webp'
  },
  {
    title: 'Export-Grade Raisins',
    description: 'Naturally sweet, plump, and thoroughly inspected. Our raisins are cleaned and processed in state-of-the-art facilities.',
    imageSrc: '/Raisins.webp'
  },
  {
    title: 'Roasted Pistachios',
    description: 'Distinctive flavor profile with stringent quality controls ensuring minimal closed shells and exceptional taste.',
    imageSrc: '/pistachios.webp'
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="products" className="py-32 bg-background relative z-10 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-foreground">The <span className="text-primary italic">Big Four.</span></h2>
            <p className="text-muted-foreground text-lg">
              We specialize in the meticulous export of the world&apos;s most sought-after dry fruits. Zero manufacturing, purely flawless global trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <ProductCard key={index} index={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <div className="scroll-mt-24" id="logistics">
        <Logistics />
      </div>

      <footer className="bg-secondary py-12 border-t border-border/20 text-center">
        <p className="text-muted-foreground font-light">&copy; {new Date().getFullYear()} Blueship Global. Unrivaled Trading Excellence.</p>
      </footer>
    </>
  );
}
