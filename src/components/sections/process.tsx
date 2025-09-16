import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share, PenSquare, MessageSquare, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Share,
    title: '1. Share Drawings',
    description: 'Securely upload your blueprints, sketches, and project requirements through our client portal.',
  },
  {
    icon: PenSquare,
    title: '2. First Draft',
    description: 'Our artists get to work, creating the initial 3D models and clay renders for your review.',
  },
  {
    icon: MessageSquare,
    title: '3. Feedback',
    description: 'Provide your feedback and revision requests. We refine the details until it perfectly matches your vision.',
  },
  {
    icon: CheckCircle,
    title: '4. Final Delivery',
    description: 'Receive your high-resolution final renders, animations, or VR tours, ready for marketing and presentation.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 lg:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Simple 4-Step Process
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            From your concept to a stunning reality, we make the process seamless and transparent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.title} className="text-center">
              <CardHeader className="items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Start Your Project Today</Button>
        </div>
      </div>
    </section>
  );
}
