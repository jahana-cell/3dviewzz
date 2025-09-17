import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const paymentTiers = [
  {
    name: 'Silver',
    price: '$499',
    priceDetails: 'per project',
    description: 'Perfect for basic design proposals and quick turnarounds.',
    features: ['2D New Floor Plan', 'Elevations', '2 Revisions'],
    cta: 'Choose Silver',
    paymentLink: 'https://buy.stripe.com/placeholder',
  },
  {
    name: 'Gold',
    price: '$899',
    priceDetails: 'per project',
    description: 'The most popular choice for a complete 2D and 3D picture.',
    isPopular: true,
    features: ['2D New Floor Plan', 'Elevations', '3D Perspectives', 'Material Selection', '5 Revisions'],
    cta: 'Choose Gold',
    paymentLink: 'https://buy.stripe.com/placeholder',
  },
  {
    name: 'Platinum',
    price: '$1,599',
    priceDetails: 'per project',
    description: 'The ultimate package for immersive marketing and client presentations.',
    features: ['All in Gold', '3D Walkthrough Animation', 'VR-Ready Tour', 'Unlimited Revisions'],
    cta: 'Choose Platinum',
    paymentLink: 'https://buy.stripe.com/placeholder',
  },
];

export default function Payment() {
  return (
    <section id="payment" className="py-12 lg:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pricing & Payments
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Choose a package that fits your needs and get started today. Secure payments powered by Stripe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-sm mx-auto md:max-w-none">
          {paymentTiers.map(tier => (
            <Card key={tier.name} className={`flex flex-col ${tier.isPopular ? 'border-primary ring-2 ring-primary' : ''}`}>
              {tier.isPopular && (
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className={tier.isPopular ? '' : 'pt-8'}>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground"> {tier.priceDetails}</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
                  <a href={tier.paymentLink} target="_blank" rel="noopener noreferrer">
                    {tier.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 text-muted-foreground">
          <p>
            Need a custom solution or have questions? <a href="#contact" className="font-semibold text-primary hover:underline">Contact us</a> for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
