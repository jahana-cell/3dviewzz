'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah L., Architect',
    avatarId: 'testimonial-avatar-1',
    company: 'Innovate Arch Inc.',
    quote: "3Dviewzz transformed our presentations. The realism and attention to detail are unparalleled, helping us win bigger projects.",
  },
  {
    id: 'testimonial-2',
    name: 'Mike D., Real Estate Developer',
    avatarId: 'testimonial-avatar-2',
    company: 'Pinnacle Properties',
    quote: "The speed and quality of their renders are a game-changer for off-plan sales. Our last development sold out 50% faster thanks to their visualizations.",
  },
  {
    id: 'testimonial-3',
    name: 'Jessica Chen, Realtor',
    avatarId: 'testimonial-avatar-3',
    company: 'Urban Nest Realty',
    quote: "I can now show clients exactly what their future home will look like. The interactive tours are an incredible sales tool.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-12 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Hear what our clients have to say about their experience with 3Dviewzz.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatar = PlaceHolderImages.find((p) => p.id === testimonial.avatarId);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center text-center p-6 justify-center h-full">
                        <div className="mb-4">
                          {avatar && (
                            <Image
                              src={avatar.imageUrl}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="rounded-full"
                              data-ai-hint={avatar.imageHint}
                            />
                          )}
                        </div>
                        <p className="text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        <blockquote className="mt-4 text-sm italic border-l-2 pl-4 text-left">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
