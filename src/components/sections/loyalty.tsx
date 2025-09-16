import { Button } from '@/components/ui/button';
import { Gift, Handshake, Star } from 'lucide-react';

export default function Loyalty() {
  return (
    <section id="loyalty" className="bg-muted/50 py-12 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Beyond the First Project
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                    We believe in building long-term partnerships. Our success is tied to yours.
                </p>
                 <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                            <Handshake className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Referral Program</h3>
                            <p className="text-muted-foreground text-sm">Refer a colleague and earn a free render or $200 credit on your next project.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                            <Gift className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Exclusive Client Perks</h3>
                            <p className="text-muted-foreground text-sm">Returning clients enjoy a 10% discount on all our rendering packages.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                            <Star className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Client Spotlight</h3>
                            <p className="text-muted-foreground text-sm">We'd love to feature your amazing project in our portfolio and social channels.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center p-8 bg-background rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Ready to Grow Together?</h3>
                <p className="text-muted-foreground">Join our community of forward-thinking clients and let's create stunning visualizations.</p>
                <div className="flex gap-4 mt-4">
                    <Button>Refer & Earn</Button>
                    <Button variant="outline">Explore Perks</Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
