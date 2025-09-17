'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const packages = [
  {
    name: 'As-Built',
    description: 'For documenting existing conditions.',
    price: 'Contact Us',
    features: ['Site Plan (non-Surveyed)', '2D Floor Plan'],
    cta: 'Get a Quote',
    tags: {
      type: 'existing',
      features: ['2d'],
    }
  },
  {
    name: 'Silver',
    description: 'Perfect for basic design proposals.',
    price: 'Contact Us',
    features: ['2D New Floor Plan', 'Elevations'],
    isPopular: true,
    cta: 'Get a Quote',
    tags: {
      type: 'new',
      features: ['2d-plus'],
    }
  },
  {
    name: 'Gold',
    description: 'For a complete 2D and 3D design picture.',
    price: 'Contact Us',
    features: ['2D New Floor Plan', 'Elevations', '3D Perspectives'],
    cta: 'Get a Quote',
    tags: {
      type: 'new',
      features: ['3d'],
    }
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
    tags: {
        type: 'new',
        features: ['3d-plus'],
    }
  },
];

const projectTypes = [
    { id: 'existing', label: 'Document an Existing Building' },
    { id: 'new', label: 'Design a New Project' },
]

const featureLevels = [
    { id: '2d', label: 'Basic 2D Plans' },
    { id: '2d-plus', label: '2D Plans + Elevations' },
    { id: '3d', label: '3D Perspectives' },
    { id: '3d-plus', label: '3D Walkthroughs' },
]


export default function Services() {
    const [projectType, setProjectType] = useState('new');
    const [featureLevel, setFeatureLevel] = useState('3d');

    const recommendedPackage = useMemo(() => {
        if (projectType === 'existing') return 'As-Built';

        switch (featureLevel) {
            case '3d-plus': return 'Platinum';
            case '3d': return 'Gold';
            case '2d-plus': return 'Silver';
            case '2d': return 'Silver'; // Silver is the minimum for new designs with plans
            default: return 'Gold'; // Default recommendation
        }
    }, [projectType, featureLevel]);

  return (
    <section id="services" className="py-12 lg:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find Your Perfect Package
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Answer two simple questions to get a personalized recommendation for your project.
          </p>
        </div>
        
        <Card className="mb-12 p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">1. What is your project type?</h3>
                    <RadioGroup value={projectType} onValueChange={setProjectType} className="gap-3">
                       {projectTypes.map(type => (
                         <div key={type.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={type.id} id={`type-${type.id}`} />
                            <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
                        </div>
                       ))}
                    </RadioGroup>
                </div>
                 <div>
                    <h3 className="font-semibold mb-4">2. What features do you need?</h3>
                    <RadioGroup value={featureLevel} onValueChange={setFeatureLevel} className="gap-3">
                        {featureLevels.map(level => (
                         <div key={level.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={level.id} id={`feature-${level.id}`} disabled={projectType === 'existing'} />
                            <Label htmlFor={`feature-${level.id}`} className={cn(projectType === 'existing' && 'text-muted-foreground/50')}>{level.label}</Label>
                        </div>
                       ))}
                    </RadioGroup>
                </div>
            </div>
        </Card>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {packages.map(pkg => {
                const isRecommended = pkg.name === recommendedPackage;
                return (
                <Card key={pkg.name} className={cn('flex flex-col transition-all duration-300', isRecommended ? 'border-primary ring-2 ring-primary shadow-2xl' : '')}>
                    {isRecommended && 
                        <div className="flex items-center justify-center gap-2 bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                           <Sparkles className="h-4 w-4" /> Recommended For You
                        </div>
                    }
                    {pkg.isPopular && !isRecommended && <div className="bg-secondary text-secondary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">Most Popular</div>}
                    
                    <CardHeader className={cn((pkg.isPopular || isRecommended) ? '' : 'pt-9' )}>
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
                        <Button className="w-full" variant={isRecommended ? 'default' : 'outline'}>{pkg.cta}</Button>
                    </CardFooter>
                </Card>
            )})}
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>Need something different? <a href="#contact" className="font-semibold text-primary hover:underline">Book a free consultation</a> for a custom quote.</p>
        </div>
      </div>
    </section>
  );
}
