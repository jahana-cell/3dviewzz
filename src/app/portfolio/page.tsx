'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { allPortfolioItems } from '@/lib/portfolio-data';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const categories = ['All', 'Residential', 'Commercial', 'Mixed-use'];

function PortfolioItemCard({ item }: { item: { id: string; category: string; title: string } }) {
  const image = PlaceHolderImages.find((p: ImagePlaceholder) => p.id === item.id);
  
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
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredItems = allPortfolioItems.filter(
    (item) => filter === 'All' || item.category === filter
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Full Portfolio
          </h1>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Browse our extensive collection of 3D visualizations, spanning residential, commercial, and mixed-use projects.
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
          {filteredItems.map((item) => (
            <PortfolioItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
