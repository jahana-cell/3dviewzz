import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const blueprintImage = PlaceHolderImages.find(p => p.id === 'hero-blueprint');
  const renderImage = PlaceHolderImages.find(p => p.id === 'hero-render');

  return (
    <section id="hero" className="container py-12 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Turn Blueprints into{' '}
            <span className="text-accent">Living Spaces</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            See your project before it’s built. 3Dviewzz is the go-to visualization partner for architects, developers, and real estate professionals.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              Download Free Guide
              <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#portfolio">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
            {blueprintImage && (
              <Image
                src={blueprintImage.imageUrl}
                alt={blueprintImage.description}
                width={800}
                height={600}
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                data-ai-hint={blueprintImage.imageHint}
              />
            )}
            {renderImage && (
              <Image
                src={renderImage.imageUrl}
                alt={renderImage.description}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                data-ai-hint={renderImage.imageHint}
              />
            )}
          </div>
          <div className="absolute top-4 right-4 flex gap-2 text-sm font-medium">
            <div className="rounded-full bg-background/80 px-3 py-1 backdrop-blur-sm transition-all group-hover:bg-accent group-hover:text-accent-foreground">Before</div>
            <div className="rounded-full bg-accent/80 text-accent-foreground px-3 py-1 backdrop-blur-sm transition-all group-hover:bg-background group-hover:text-foreground">After</div>
          </div>
        </div>
      </div>
    </section>
  );
}
