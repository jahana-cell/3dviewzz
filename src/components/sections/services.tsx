'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Starter",
    description: "Ideal for initial concepts and small projects.",
    price: "$499",
    features: ["5 Basic Still Renders", "2 Revision Rounds", "Standard Delivery"],
    cta: "Choose Starter"
  },
  {
    name: "Professional",
    description: "The most popular choice for marketing and client presentations.",
    price: "$1,299",
    features: ["10 High-Quality Renders", "30s Animation", "4 Revision Rounds", "Priority Support"],
    isPopular: true,
    cta: "Choose Professional"
  },
  {
    name: "Premium",
    description: "For immersive experiences and large-scale developments.",
    price: "$2,999",
    features: ["20 Photorealistic Renders", "60s Video Walkthrough", "Interactive 360° VR Tour", "Unlimited Revisions"],
    cta: "Choose Premium"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Service Packages
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Find the perfect visualization package for your project needs, or build your own custom solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
