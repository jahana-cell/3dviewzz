'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { allPortfolioItems } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const portfolioItems = allPortfolioItems.slice(0, 6);

const categories = ['All', 'Residential', 'Commercial', 'Mixed-use'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredItems =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="bg-muted/50 py-12 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Portfolio Showcase
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Explore a selection of our projects, from stunning residential homes to groundbreaking commercial spaces.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={cn(
                'capitalize',
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const image = PlaceHolderImages.find((p) => p.id === item.id);
            return (
              <Card key={item.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-accent">{item.category}</p>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                    View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
