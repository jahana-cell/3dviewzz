'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'As-Built',
    description: 'For documenting existing conditions.',
    price: 'Contact Us',
    features: ['Site Plan (non-Surveyed)', '2D Floor Plan'],
    cta: 'Get a Quote',
  },
  {
    name: 'Silver',
    description: 'Perfect for basic design proposals.',
    price: 'Contact Us',
    features: ['2D New Floor Plan', 'Elevations'],
    isPopular: true,
    cta: 'Get a Quote',
  },
  {
    name: 'Gold',
    description: 'For a complete 2D and 3D design picture.',
    price: 'Contact Us',
    features: ['2D New Floor Plan', 'Elevations', '3D Perspectives'],
    cta: 'Get a Quote',
  },
  {
    name: 'Platinum',
    description: 'The ultimate package for immersive visualization.',
    price: 'Contact Us',
    features: [
      '2D New Floor Plan',
      'Elevations',
      '3D Perspectives',
      '3D Walkthrough',
    ],
    cta: 'Get a Quote',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Service Packages
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Find the perfect visualization package for your project needs, or build your own custom solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {packages.map(pkg => (
                <Card key={pkg.name} className={`flex flex-col ${pkg.isPopular ? 'border-primary ring-2 ring-primary' : ''}`}>
                    {pkg.isPopular && <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">Most Popular</div>}
                    <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-6">
                        <div className="text-4xl font-bold">{pkg.price}</div>
                        <ul className="space-y-3">
                            {pkg.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant={pkg.isPopular ? 'default' : 'outline'}>{pkg.cta}</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        <div className="text-center mt-8 text-muted-foreground">
          <p>Need something different? <a href="#contact" className="font-semibold text-primary hover:underline">Book a free consultation</a> for a custom quote.</p>
          <p className="text-sm mt-2">Sign up this month and get 2 extra interior renders free on Professional & Premium packages!</p>
        </div>
      </div>
    </section>
  );
}
